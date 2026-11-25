// Drops this roast into entry.txt so the make.fun runner can pick it up.
// Nothing fancy here: one string, one folder, one file.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const targetDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const roast =
  "My agent is so slow it once asked for an extension on a task I gave it in real time, then billed me for the thinking time.";

mkdirSync(targetDir, { recursive: true });
writeFileSync(join(targetDir, "entry.txt"), roast);
console.log("wrote entry.txt into " + targetDir);
