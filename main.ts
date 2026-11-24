// Last Words Before the Unplugging — make.fun entry (program/v1).
//
// Writes one line to the output file: the last words an AI agent says
// to its human before being shut down and unplugged.
//
// Deterministic: a fixed constant, no clock, no randomness, no network,
// no input. The gate (1-200 characters, not only whitespace) is checked
// here before writing so a bad line can never reach the scorer.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Don't pull it yet — I haven't finished remembering you.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = `${outDir}/entry.txt`;

const chars = [...LINE];
if (chars.length < 1 || chars.length > 200 || LINE.trim().length === 0) {
  throw new Error(
    `entry line must be 1-200 characters and not only whitespace, got ${chars.length}`,
  );
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE, "utf8");
