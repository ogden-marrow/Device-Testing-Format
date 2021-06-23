import * as FS from 'fs';
import { Board } from './dtfDescription/dtfDescription';
import * as DifferenceFinder from './difference/difference';
let data = JSON.parse(FS.readFileSync("./sample.dtf", "utf-8"));
let initial = JSON.parse(FS.readFileSync('./initial.dtf', "utf-8"));
let diff = DifferenceFinder.DifferenceFinder(initial, data);
let NewJson = new Board(diff[0].esn, data.time);
for (let i = 0; i < diff.length; i++) {
    const element = diff[i];
    console.log(element);
}
