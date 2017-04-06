import { ini } from "../lib/index";
import { readFileSync } from "fs";
import * as path from "path";

const samplePath = path.join(__dirname, "..", "..", "res", "sample.ini");
const config = ini.parseStripWhitespace(readFileSync(samplePath, "utf8"))

let expect= String.raw
`{
  "general": {
    "interval": "15"
  },
  "defaults": {
    "context": "default",
    "group": "0",
    "rxgain": "0",
    "txgain": "0",
    "autodeletesms": "yes",
    "resetdongle": "yes",
    "u2diag": "-1",
    "usecallingpres": "yes",
    "callingpres": "allowed_passed_screen",
    "disablesms": "no",
    "language": "en",
    "smsaspdu": "yes",
    "mindtmfgap": "45",
    "mindtmfduration": "80",
    "mindtmfinterval": "200",
    "callwaiting": "auto",
    "disable": "no",
    "initstate": "start",
    "exten": "+1234567890",
    "dtmf": "relax"
  },
  "dongle0": {
    "audio": "/dev/ttyUSB1",
    "data": "/dev/ttyUSB2",
    "imei": "123456789012345",
    "imsi": "123456789012345"
  }
}`;

console.assert(JSON.stringify(config, null, 2) === expect);

console.log("PASS");