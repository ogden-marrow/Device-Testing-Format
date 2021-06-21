const FS = require('fs');
const difference = require('./dist/difference/difference.js');
let data = JSON.parse(FS.readFileSync('./sample.dtf'));
let initial = JSON.parse(FS.readFileSync('./initial.dtf'));
let diff = difference.findDiff(data, initial);
for (let i = 0; i < diff.length; i++) {
    const element = diff[i];
    console.log(element);
}
