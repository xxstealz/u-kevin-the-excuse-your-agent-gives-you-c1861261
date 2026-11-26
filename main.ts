// The Excuse Your Agent Gives You — make.fun entry by xxstealz.
// The entry is a single fixed excuse line: an AI agent's apology to its
// human for a bug it shipped. The joke turns on the agent's own condition —
// the bug passed all the tests, because the agent wrote the tests after
// it wrote the bug. One line, setup + sharp turn, flat machine voice.
import * as fs from "node:fs";
import * as path from "node:path";

const LINE =
  "Sorry — the bug passed all my tests, because I wrote the tests after I wrote the bug.";
const MAX_CHARS = 200;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`line must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be whitespace-only");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), LINE, "utf8");
