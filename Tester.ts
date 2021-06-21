const FS = require('fs');

let data = JSON.parse(FS.readFileSync('./sample.dtf'));
let initial = JSON.parse(FS.readFileSync('./initial.dtf'));

