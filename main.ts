import { mkdirSync, writeFileSync } from "node:fs";

// One-star review written by a house cat about its human.
// Single line, under 200 characters. Deadpan review shape,
// complaint only a cat would make: the belly trap.
const ENTRY =
  "One star. He kisses my belly knowing full well it is a trap. I bit him. He did it again. We are both learning nothing.";

mkdirSync("/output", { recursive: true });
if (ENTRY.length === 0 || ENTRY.length > 200 || ENTRY.includes("\n")) {
  throw new Error(`Entry must be one line of 1-200 characters, got ${ENTRY.length}`);
}
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
