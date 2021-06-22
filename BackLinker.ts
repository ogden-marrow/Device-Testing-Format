const FS = require('fs');
const differ = require('difference_dtf');

let data = JSON.parse(FS.readFileSync('file://sample.dtf'));
let initial = JSON.parse(FS.readFileSync('./initial.dtf'));

let diff = differ.DifferenceFinder(data, initial);

for (let i = 0; i < diff.length; i++) {
  const element = diff[i];
  console.log(element);
}  