import * as FS from 'fs';
import * as dtf from './dtfDescription/dtfDescription.js';
import * as DF from './difference/difference.js';

let data = JSON.parse(FS.readFileSync("./sample.dtf","utf-8"));
let initial = JSON.parse(FS.readFileSync('./initial.dtf',"utf-8"));

let diff = DF.DifferenceFinder(initial, data);

let NewJson = new dtf.Board(diff[0].esn,data.time);

const objArry = new Array(diff.length).fill(0);

for (let i = 0; i < diff.length; i++) {
  const element = diff[i];
  objArry[i] = element;
}

