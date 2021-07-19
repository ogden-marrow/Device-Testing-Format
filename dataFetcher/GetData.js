"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryFromESNTime = exports.QueryFromBoardObject = void 0;
const supporting_js_1 = require("../supportingJs/supporting.js");
function QueryFromESNTime(esn, Time, Module, Cell, Pin) {
    if ((typeof (Module) == 'undefined') && ((typeof (Cell) != 'undefined') || (typeof (Pin) != 'undefined'))) {
        throw new Error('To select a specific pin or cell a module is required');
    }
    else if ((typeof (Cell) == 'undefined') && (typeof (Pin) != 'undefined')) {
        throw new Error('To select a specific pin a module and a cell are required');
    }
    else if (typeof (Module) == 'undefined') {
        if (typeof (Time) != 'undefined') {
            return supporting_js_1.findFromESN(esn, Time);
        }
        else {
            return supporting_js_1.findFromESN(esn);
        }
    }
    else if (typeof (Module) == 'number' && (typeof (Cell) == 'undefined')) {
        if (typeof (Time) != 'undefined') {
            return QueryForModule(supporting_js_1.findFromESN(esn, Time), Module);
        }
        else {
            return QueryForModule(supporting_js_1.findFromESN(esn), Module);
        }
    }
    else if (typeof (Cell) == 'number' && (typeof (Pin) == 'undefined')) {
        if (typeof (Time) != 'undefined') {
            return QueryForCell(supporting_js_1.findFromESN(esn, Time), Module, Cell);
        }
        else {
            return QueryForCell(supporting_js_1.findFromESN(esn), Module, Cell);
        }
    }
    else if (typeof (Pin) == 'number') {
        if (typeof (Time) != 'undefined') {
            return QueryForPin(supporting_js_1.findFromESN(esn, Time), Module, Cell, Pin);
        }
        else {
            return QueryForPin(supporting_js_1.findFromESN(esn), Module, Cell, Pin);
        }
    }
}
exports.QueryFromESNTime = QueryFromESNTime;
function QueryForModule(Board, ModNumber) {
    if (Object.keys(Board.modules[ModNumber]).length == 0) {
        return supporting_js_1.findLatestOfModule(Board, ModNumber).modules[ModNumber];
    }
    else {
        return Board.modules[ModNumber];
    }
}
function QueryForCell(Board, ModNumber, Cell) {
    let testBoard;
    if (Object.keys(Board.modules[ModNumber]).length == 0) {
        testBoard = supporting_js_1.findLatestOfModule(Board, ModNumber);
        if (Object.keys(Board.modules[ModNumber].cells[Cell]).length == 0) {
            return supporting_js_1.findLatestOfCell(testBoard, ModNumber, Cell).modules[ModNumber].cells[Cell];
        }
        else {
            return testBoard.modules[ModNumber].cells[Cell];
        }
    }
    else if (Object.keys(Board.modules[ModNumber].cells[Cell]).length == 0) {
        return supporting_js_1.findLatestOfCell(Board, ModNumber, Cell).modules[ModNumber].cells[Cell];
    }
    else {
        return Board.modules[ModNumber].cells[Cell];
    }
}
function QueryForPin(Board, ModNumber, Cell, Pin) {
    let testBoard;
    if (Object.keys(Board.modules[ModNumber]).length == 0) {
        testBoard = supporting_js_1.findLatestOfModule(Board, ModNumber);
        if (Object.keys(Board.modules[ModNumber].cells[Cell]).length == 0) {
            testBoard = supporting_js_1.findLatestOfCell(testBoard, ModNumber, Cell);
            if (Object.keys(Board.modules[ModNumber].cells[Cell].pins[Pin]).length == 0) {
                return supporting_js_1.findLatestOfPin(testBoard, ModNumber, Cell, Pin).modules[ModNumber].cells[Cell].pins[Pin];
            }
            else {
                return testBoard.modules[ModNumber].cells[Cell].pins[Pin];
            }
        }
        else {
            if (Object.keys(Board.modules[ModNumber].cells[Cell].pins[Pin]).length == 0) {
                return supporting_js_1.findLatestOfPin(testBoard, ModNumber, Cell, Pin).modules[ModNumber].cells[Cell].pins[Pin];
            }
            else {
                return testBoard.modules[ModNumber].cells[Cell].pins[Pin];
            }
        }
    }
    else if (Object.keys(Board.modules[ModNumber].cells[Cell]).length == 0) {
        testBoard = supporting_js_1.findLatestOfCell(Board, ModNumber, Cell);
        if (Object.keys(Board.modules[ModNumber].cells[Cell].pins[Pin]).length == 0) {
            return supporting_js_1.findLatestOfPin(testBoard, ModNumber, Cell, Pin).modules[ModNumber].cells[Cell].pins[Pin];
        }
        else {
            return testBoard.modules[ModNumber].cells[Cell].pins[Pin];
        }
    }
    else if (Object.keys(Board.modules[ModNumber].cells[Cell].pins[Pin]).length == 0) {
        return supporting_js_1.findLatestOfPin(Board, ModNumber, Cell, Pin).modules[ModNumber].cells[Cell].pins[Pin];
    }
    else {
        return Board.modules[ModNumber].cells[Cell].pins[Pin];
    }
}
function QueryForPinData(Board, ModNumber, Cell, Pin, key, value) { }
function QueryFromBoardObject(Board, Module, Cell, Pin) {
    if ((typeof (Module) === 'undefined') && ((typeof (Cell) != 'undefined') || (typeof (Pin) != 'undefined'))) {
        throw new Error('To select a specific pin or cell a module is required');
    }
    else if ((typeof (Cell) === 'undefined') && (typeof (Pin) != 'undefined')) {
        throw new Error('To select a specific pin a module and a cell are required');
    }
}
exports.QueryFromBoardObject = QueryFromBoardObject;
