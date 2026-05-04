// Post-process the Kreuzberg-extracted markdown to add `# Chapter` headings
// (Kreuzberg flattens EPUB heading structure into plain text; extract-core's
// chapterChunks needs `# ` markers to split). Drops frontmatter (TOC + copyright)
// and backmatter (Acknowledgments, Notes on Illustrations, Notes, Bibliography).
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const SRC = join(ROOT, 'books', 'governable-spaces.md');
const DST = SRC;

const raw = readFileSync(SRC, 'utf-8');

// Drop frontmatter: everything before "Introduction\nDemocracy in the Wild"
const introIdx = raw.indexOf('Introduction\nDemocracy in the Wild\n');
if (introIdx === -1) throw new Error('Could not find Introduction marker');

// Drop backmatter: everything from "ACKNOWLEDGMENTS" onward
const ackIdx = raw.indexOf('ACKNOWLEDGMENTS\n');
if (ackIdx === -1) throw new Error('Could not find ACKNOWLEDGMENTS marker');

let body = raw.slice(introIdx, ackIdx);

const replacements: Array<[string, string]> = [
  ['Introduction\nDemocracy in the Wild\n', '# Introduction: Democracy in the Wild\n'],
  ['1\nImplicit Feudalism\nThe Origins of Counter-democratic Design\n', '# Implicit Feudalism: The Origins of Counter-democratic Design\n'],
  ['Profile\nCommunityRule\n', '# Profile: CommunityRule\n'],
  ['2\nHomesteading on a Superhighway\nHow the Politics of No-Politics Aided an Authoritarian Revival\n', '# Homesteading on a Superhighway: How the Politics of No-Politics Aided an Authoritarian Revival\n'],
  ['Profile\nA People’s History of Twitter\n', '# Profile: A People’s History of Twitter\n'],
  ['3\nDemocratic Mediums\nCase Studies in Political Imagination\n', '# Democratic Mediums: Case Studies in Political Imagination\n'],
  ['Profile\nExcavations\n', '# Profile: Excavations\n'],
  ['4\nGovernable Stacks\nOrganizing against Digital Colonialism\n', '# Governable Stacks: Organizing against Digital Colonialism\n'],
  ['Profile\nModpol\n', '# Profile: Modpol\n'],
  ['5\nGovernable Spaces\nDemocracy as a Policy Strategy\n', '# Governable Spaces: Democracy as a Policy Strategy\n'],
  ['Epilogue\nMetagovernance\n', '# Epilogue: Metagovernance\n'],
];

for (const [from, to] of replacements) {
  if (!body.includes(from)) {
    throw new Error(`Replacement pattern not found: ${JSON.stringify(from.slice(0, 60))}`);
  }
  body = body.replace(from, to);
}

const header = `# Governable Spaces: Democratic Design for Online Life

*By Nathan Schneider — University of California Press / Luminos, 2024*

License: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

Source: https://luminosoa.org/books/m/10.1525/luminos.181

---

`;

writeFileSync(DST, header + body);

const headingCount = (header + body).match(/^# /gm)?.length ?? 0;
console.log(`Wrote ${DST}`);
console.log(`Chapter headings: ${headingCount}`);
console.log(`Length: ${(header + body).length.toLocaleString()} chars`);
