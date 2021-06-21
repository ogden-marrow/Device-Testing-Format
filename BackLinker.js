const FS = require('fs');
const difference = require('difference');
let data = JSON.parse(FS.readFileSync('./sample.dtf'));
let initial = JSON.parse(FS.readFileSync('./initial.dtf'));
console.log(difference.findDiff(data, initial));
