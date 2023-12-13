import { readFileSync, writeFileSync } from "node:fs";
import { decode, encode, sanitize } from "./coder.mjs";

const srcFilename = "clickerHeroSave.txt";
const debugFilename = "clickerHeroSave.debug.json";

console.log(`<- ${srcFilename}`);
const data = sanitize(decode(readFileSync(srcFilename)));

if (data.readPatchNumber !== "1.0e12-4311") {
  console.log(`warn: untested game version ${data.readPatchNumber}`);
}

console.log(`-> ${debugFilename}`);
writeFileSync(debugFilename, JSON.stringify(data, null, 2));

// modify any data
data.autoclickers = 50;

console.log(`-> ${srcFilename}`);
writeFileSync(srcFilename, encode(data));

console.log(`All done`);
