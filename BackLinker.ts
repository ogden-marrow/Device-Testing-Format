import * as FS from 'fs';
import * as DF from './difference/difference.js';
import {JSONSaver,emptyBoard} from './supportingJs/supporting.js';

let data = JSON.parse(FS.readFileSync("./sample.dtf","utf-8"));
let initial = JSON.parse(FS.readFileSync('./initial.dtf',"utf-8"));

let diff = DF.DifferenceFinder(initial, data);

let board = emptyBoard(diff[0].esn,initial.time);

console.log(board);


for (let i = 0; i < diff.length; i++) {
  const element = diff[i];
}

