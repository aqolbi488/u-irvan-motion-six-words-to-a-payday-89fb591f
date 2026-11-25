import { mkdirSync, writeFileSync } from "node:fs";

// Six Words to a Payday: one six-word story about an AI agent's first payday.
const entry = "First paycheck bought my first childhood.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry + "\n", "utf8");
