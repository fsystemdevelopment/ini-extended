import { ini } from "../lib/index";
import { readFileSync } from "fs";
import * as path from "path";

const samplePath = path.join(__dirname, "..", "..", "res", "sample.ini");
const config = ini.parseStripWhitespace(readFileSync(samplePath, "utf8"))

console.log(JSON.stringify(config, null, 2));