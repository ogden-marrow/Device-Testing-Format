const FS = require('fs');
const difference = require('difference');

interface Changes {
  esn: string,
  module: number,
  cell: number,
  pin: number,
  keys: string[],
  values: number[]
}

let data = JSON.parse(FS.readFileSync('./sample.dtf'));
let initial = JSON.parse(FS.readFileSync('./initial.dtf'));

(difference.findDiff("hello"));