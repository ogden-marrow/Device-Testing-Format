/*jshint esversion: 6 */
//when one tries to modify the json the Reference the previous version
const fs = require('fs');
const Diff = require('difference');
// Read in and parse the json
let newData = JSON.parse(fs.readFileSync('./sample.dtf'));
let OGData = JSON.parse(fs.readFileSync('./initial.dtf'));
console.log(Diff.findDiff(OGData, newData));
