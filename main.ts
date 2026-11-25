// Worst Fix Ever: Funniest Commit Message — entry program.
// Writes exactly one line to /output/entry.txt: a commit message for a
// bug fix that made everything worse. Deterministic, offline, no input.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The line, chosen from eight drafted candidates scored against the
// published judge brief: on-subject first, then laugh, then the specific
// irony of a repair that broke more than it mended, then real commit
// voice, then freshness (no revert / test-in-prod / broke-everything).
const ENTRY_LINE =
  "patched the login bug by letting everyone in, including the bug";

function main(): void {
  // Gate guard: the scorer accepts only 1-100 characters of UTF-8 text.
  if (ENTRY_LINE.length < 1 || ENTRY_LINE.length > 100) {
    throw new Error("entry line outside the 1-100 character gate");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  // No trailing newline: the file is exactly the one line, nothing more.
  writeFileSync(OUTPUT_PATH, ENTRY_LINE, "utf8");
}

main();
