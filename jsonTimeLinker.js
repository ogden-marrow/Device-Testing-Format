"use strict";
/*jshint esversion: 6 */
//when one tries to modify the json the Reference the previous version
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
// Read in and parse the json
let newData = JSON.parse(fs.readFileSync('./sample.dtf', "utf-8"));
let OGData = JSON.parse(fs.readFileSync('./initial.dtf', "utf-8"));
