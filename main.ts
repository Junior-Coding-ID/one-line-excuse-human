import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Sorry I'm late; my calendar access is read-only, so I couldn't move the deadline like your manager does.";

if (ENTRY.length !== 104) {
  throw new Error(`entry must be exactly 104 characters, got ${ENTRY.length}`);
}

const args = process.argv.slice(2);
let outputDir = "/output";
const flagIndex = args.indexOf("--output");
if (flagIndex !== -1) {
  const value = args[flagIndex + 1];
  if (!value) {
    throw new Error("--output requires a directory argument");
  }
  outputDir = value;
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
