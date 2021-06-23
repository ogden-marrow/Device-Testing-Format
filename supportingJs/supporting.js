import * as fis from 'fs';
import { Board, Cell, Module, Pin } from '../dtfDescription/dtfDescription.js';
function JSONSaver(FileName, json2Parse, extension) {
    let json = JSON.stringify(json2Parse);
    fis.writeFile(FileName + extension, json, function (err) { if (err)
        throw err; });
}
function emptyBoard(esn, time) {
    let board = new Board(esn, time, emptyModules(emptyCells(emptyPins())));
    return board;
}
function emptyModules(cells) {
    let modules = new Array(5);
    for (let i = 0; i < 5; i++) {
        modules[i] = new Module(null, cells);
    }
    return modules;
}
function emptyCells(pins) {
    let cells = new Array(4);
    for (let i = 0; i < 4; i++) {
        cells[i] = new Cell(pins);
    }
    return cells;
}
function emptyPins() {
    let pins = new Array(8);
    for (let i = 0; i < 8; i++) {
        pins[i] = new Pin();
    }
    return pins;
}
export { JSONSaver, emptyBoard };
