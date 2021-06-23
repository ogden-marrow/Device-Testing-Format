const FS = require('fs');
const differ = require('difference_dtf');
import { Pin, Cell, Module, Board} from '/Documents/npmModules/dtfDescription/dtfDescription.js';

let data = JSON.parse(FS.readFileSync('./sample.dtf'));
let initial = JSON.parse(FS.readFileSync('./initial.dtf'));

let diff = differ.DifferenceFinder(initial, data);
let NewJson = new Board(diff[0].esn,data.time);



for (let i = 0; i < diff.length; i++) {
  const element = diff[i];
}