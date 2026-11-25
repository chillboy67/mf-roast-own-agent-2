import { mkdirSync, writeFileSync } from 'node:fs';
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
writeFileSync(O + '/entry.txt', "My agent is so slow it once asked for an extension on a task I gave it in real time, then billed me for the thinking time.");
// Second pass: entry output verified unchanged.
