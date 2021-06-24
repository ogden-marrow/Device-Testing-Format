import * as FS from 'fs';
import * as DF from './difference/difference.js';
import { emptyBoard } from './supportingJs/supporting.js';
let data = JSON.parse(FS.readFileSync("./sample.dtf", "utf-8"));
let initial = JSON.parse(FS.readFileSync('./initial.dtf', "utf-8"));
let diff = DF.DifferenceFinder(initial, data);
let board = emptyBoard(diff[0].esn, initial.time);
for (let i = 0; i < diff.length; i++) {
    for (let j = 0; j < diff[i].keys.length; j++) {
        let key = diff[i].keys[j];
        board.modules[diff[i].module].cells[diff[i].cell].pins[diff[i].pin][key] = diff[i].values[j];
    }
}
console.log(`done`);
