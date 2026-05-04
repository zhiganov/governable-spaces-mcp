// Quick verification that chapterChunks splits the source as expected.
// No API calls.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { chapterChunks } from './extract-core.js';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SOURCE = join(ROOT, 'books', 'governable-spaces.md');
const source = readFileSync(SOURCE, 'utf-8');

const chunks = chapterChunks(source);
console.log(`Total chunks: ${chunks.length}`);
for (const c of chunks) {
  console.log(`  ${c.chapterLabel}: ${c.text.length.toLocaleString()} chars (partDivider=${c.isPartDivider})`);
}
