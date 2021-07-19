"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findLatestOfPin = exports.findLatestOfCell = exports.findObjectFromPath = exports.findLatestOfModule = exports.findFromESN = exports.dtfParse = exports.arraysMatch = exports.emptyBoard = exports.JSONSaver = void 0;
const fis = require("fs");
const dtfDescription_js_1 = require("../dtfDescription/dtfDescription.js");
function JSONSaver(FileName, json2Parse, extension) {
    let json = JSON.stringify(json2Parse);
    fis.writeFile(FileName + extension, json, function (err) { if (err)
        throw err; });
}
exports.JSONSaver = JSONSaver;
function emptyBoard(esn, time) {
    let board = new dtfDescription_js_1.Board(esn, time, emptyModules(emptyCells(emptyPins())));
    return board;
}
exports.emptyBoard = emptyBoard;
function emptyModules(cells) {
    let modules = new Array(5);
    for (let i = 0; i < 5; i++) {
        modules[i] = new dtfDescription_js_1.Module(null, cells);
    }
    return modules;
}
function emptyCells(pins) {
    let cells = new Array(4);
    for (let i = 0; i < 4; i++) {
        cells[i] = new dtfDescription_js_1.Cell(pins);
    }
    return cells;
}
function emptyPins() {
    let pins = new Array(8);
    for (let i = 0; i < 8; i++) {
        pins[i] = new dtfDescription_js_1.Pin();
    }
    return pins;
}
function arraysMatch(arr1, arr2) {
    // Check if the arrays are the same length
    if (arr1.length !== arr2.length)
        return false;
    // Check if all items exist and are in the same order
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    // Otherwise, return true
    return true;
}
exports.arraysMatch = arraysMatch;
function dtfParse(path) {
    let data = JSON.parse(fis.readFileSync(path, "utf-8"));
    return data;
}
exports.dtfParse = dtfParse;
function findObjectFromPath(path, key, value) {
    if (dtfParse(path)[key] == value) {
        return dtfParse(path);
    }
}
exports.findObjectFromPath = findObjectFromPath;
function findFromESN(esn, Time) {
    let finalBoard = emptyBoard(esn, 0);
    let dtfFlies = fis.readdirSync("./").filter(file => file.includes('.dtf'));
    if (typeof Time == 'undefined') {
        dtfFlies.forEach(element => {
            let testBoard = findObjectFromPath(element, "esn", esn);
            if (typeof (testBoard) != 'undefined') {
                if (testBoard.time > finalBoard.time) {
                    finalBoard = findObjectFromPath(element, "esn", esn);
                }
            }
        });
    }
    else {
        dtfFlies.forEach(element => {
            let testBoard = findObjectFromPath(element, "esn", esn);
            if (typeof (testBoard) != 'undefined') {
                if (testBoard.time == Time) {
                    finalBoard = findObjectFromPath(element, "esn", esn);
                }
            }
        });
    }
    return finalBoard;
}
exports.findFromESN = findFromESN;
function findLatestOfModule(Board, ModNumber) {
    let dtfFlies = fis.readdirSync("./").filter(file => file.includes('.dtf'));
    let finalPath;
    let boardTime = 0;
    dtfFlies.forEach(element => {
        let testBoard = findObjectFromPath(element, "esn", Board.esn);
        if (typeof (testBoard) != 'undefined') {
            if (Object.keys(testBoard.modules[ModNumber]).length != 0) {
                if (testBoard.time > boardTime) {
                    finalPath = element;
                    boardTime = testBoard.time;
                }
            }
        }
    });
    return dtfParse(finalPath);
}
exports.findLatestOfModule = findLatestOfModule;
function findLatestOfCell(Board, ModNumber, Cell) {
    let dtfFlies = fis.readdirSync("./").filter(file => file.includes('.dtf'));
    let finalPath;
    let boardTime = 0;
    dtfFlies.forEach(element => {
        let testBoard = findObjectFromPath(element, "esn", Board.esn);
        if (typeof (testBoard) != 'undefined') {
            if (Object.keys(testBoard.modules[ModNumber].cells[Cell]).length != 0) {
                if (testBoard.time > boardTime) {
                    finalPath = element;
                    boardTime = testBoard.time;
                }
            }
        }
    });
    return dtfParse(finalPath);
}
exports.findLatestOfCell = findLatestOfCell;
function findLatestOfPin(Board, ModNumber, Cell, Pin) {
    let dtfFlies = fis.readdirSync("./").filter(file => file.includes('.dtf'));
    let finalPath;
    let boardTime = 0;
    dtfFlies.forEach(element => {
        let testBoard = findObjectFromPath(element, "esn", Board.esn);
        if (typeof (testBoard) != 'undefined') {
            if (Object.keys(testBoard.modules[ModNumber].cells[Cell]).length != 0) {
                if (testBoard.time > boardTime) {
                    finalPath = element;
                    boardTime = testBoard.time;
                }
            }
        }
    });
    return dtfParse(finalPath);
}
exports.findLatestOfPin = findLatestOfPin;
