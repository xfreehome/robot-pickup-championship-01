import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The Robot Pickup Line Championship — one line, <= 200 chars.
// v2: kept the scan/anomaly hook, but the punchline now grows out of the
// robot's own hardware — its cooling fan spinning is the tell, and the
// ask flips the roles: the human diagnoses the robot.
const entry =
  "I scanned 8 billion humans and flagged exactly one anomaly: you. My cooling fan spins whenever you walk by — care to diagnose me over coffee?";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, entry, "utf8");
console.log(`Wrote ${entry.length} chars to ${outPath}`);
console.log(entry);
