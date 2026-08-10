// HTTP session-lifecycle smoke. Guards the leak fixed in fix/session-leak:
// each MCP session holds its own McpServer, and clients are not required to
// send DELETE /mcp before disappearing, so without an idle sweep the session
// map grows for the life of the process.
//
// Run after `npm run build`:  node scripts/smoke-session-leak.mjs

const PORT = 39311;
const BASE = `http://127.0.0.1:${PORT}`;
const IDLE_MS = 2500;
const ABANDONED = 5;

const { spawn } = await import('node:child_process');

const server = spawn('node', ['dist/index.js'], {
  env: {
    ...process.env,
    PORT: String(PORT),
    MCP_SESSION_IDLE_MS: String(IDLE_MS),
    MCP_SESSION_SWEEP_MS: '300',
    POSTHOG_API_KEY: '',
  },
  stdio: ['ignore', 'pipe', 'pipe'],
});
let serverLog = '';
server.stdout.on('data', (c) => (serverLog += c));
server.stderr.on('data', (c) => (serverLog += c));

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let pass = 0, fail = 0;
function check(label, ok, detail = '') {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${detail ? '  — ' + detail : ''}`);
  ok ? pass++ : fail++;
}

const health = async () => (await fetch(`${BASE}/health`)).json();

async function post(body, sessionId) {
  const headers = {
    'content-type': 'application/json',
    accept: 'application/json, text/event-stream',
  };
  if (sessionId) headers['mcp-session-id'] = sessionId;
  return fetch(`${BASE}/mcp`, { method: 'POST', headers, body: JSON.stringify(body) });
}

const initBody = (name) => ({
  jsonrpc: '2.0',
  id: 1,
  method: 'initialize',
  params: { protocolVersion: '2024-11-05', capabilities: {}, clientInfo: { name, version: '0.0.1' } },
});

try {
  for (let i = 0; i < 60; i++) {
    try { if ((await fetch(`${BASE}/health`)).ok) break; } catch {}
    await sleep(250);
  }

  check('/health reports live session count', typeof (await health()).sessions === 'number');

  // A session that is used normally, then closed politely.
  const res = await post(initBody('polite'));
  const politeId = res.headers.get('mcp-session-id');
  await res.body?.cancel().catch(() => {});
  check('initialize issues a session id', !!politeId);
  check('session is tracked', (await health()).sessions === 1, `sessions=${(await health()).sessions}`);

  await fetch(`${BASE}/mcp`, { method: 'DELETE', headers: { 'mcp-session-id': politeId } });
  await sleep(400);
  check('DELETE reclaims immediately', (await health()).sessions === 0, `sessions=${(await health()).sessions}`);

  // Sessions abandoned without DELETE — the real-world Claude Code case.
  for (let i = 0; i < ABANDONED; i++) {
    const r = await post(initBody(`abandoned-${i}`));
    await r.body?.cancel().catch(() => {});
  }
  const opened = (await health()).sessions;
  check('abandoned sessions are tracked', opened === ABANDONED, `sessions=${opened}`);

  // Still live before the idle window elapses — proves the sweep is time-based,
  // not just tearing everything down on any request.
  await sleep(500);
  const early = (await health()).sessions;
  check('sessions survive inside the idle window', early === ABANDONED, `sessions=${early}`);

  await sleep(IDLE_MS + 1200);
  const swept = (await health()).sessions;
  check('abandoned sessions are swept after idle timeout', swept === 0, `sessions=${swept}`);

  // A retired session id must report 404 specifically. The spec makes 404 the
  // client's trigger to open a new session; a 400 leaves recovery to chance.
  const stale = await post({ jsonrpc: '2.0', id: 2, method: 'tools/list', params: {} }, politeId);
  await stale.body?.cancel().catch(() => {});
  check('deleted session id returns 404', stale.status === 404, `HTTP ${stale.status}`);

  // Same for a session the sweeper closed. This is the common case in
  // production — clients rarely send DELETE — so it matters more than the above.
  const doomed = await post(initBody('to-be-swept'));
  const sweptId = doomed.headers.get('mcp-session-id');
  await doomed.body?.cancel().catch(() => {});
  await sleep(IDLE_MS + 1200);
  const afterSweep = await post({ jsonrpc: '2.0', id: 3, method: 'tools/list', params: {} }, sweptId);
  await afterSweep.body?.cancel().catch(() => {});
  check('swept session id returns 404', afterSweep.status === 404, `HTTP ${afterSweep.status}`);

  // ...and the client recovers by initializing afresh.
  const recovered = await post(initBody('recovered'));
  const recoveredId = recovered.headers.get('mcp-session-id');
  await recovered.body?.cancel().catch(() => {});
  check('client can re-initialize after expiry', !!recoveredId,
    recoveredId ? 'new session issued' : 'no session id');
} catch (e) {
  check('smoke run completed', false, e.message);
  if (serverLog) console.error('--- server log ---\n' + serverLog.slice(0, 900));
}

console.log(`\n${pass} pass, ${fail} fail`);
server.kill();
await sleep(200);
process.exit(fail > 0 ? 1 : 0);
