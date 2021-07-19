import * as fis from 'fs';
import { Board, Cell, Module, Pin, board, cell, pin, module } from '../dtfDescription/dtfDescription.js';
import * as path from 'path';

function JSONSaver(FileName: string, json2Parse: any, extension: string) {
  let json = JSON.stringify(json2Parse);
  fis.writeFile(FileName + extension, json, function (err) { if (err) throw err; });
}

function emptyBoard(esn: string, time: number): board {
  let board = new Board(esn, time, emptyModules(emptyCells(emptyPins())));
  return board
}

function emptyModules(cells: cell[]): module[] {
  let modules = new Array(5);
  for (let i = 0; i < 5; i++) {
    modules[i] = new Module(null, cells);
  }
  return modules
}

function emptyCells(pins: pin[]): cell[] {
  let cells = new Array(4);
  for (let i = 0; i < 4; i++) {
    cells[i] = new Cell(pins)
  }
  return cells
}

function emptyPins(): pin[] {
  let pins = new Array(8);
  for (let i = 0; i < 8; i++) {
    pins[i] = new Pin();
  }
  return pins
}

function arraysMatch(arr1: any[], arr2: any[]): boolean {
  // Check if the arrays are the same length
  if (arr1.length !== arr2.length) return false;
  // Check if all items exist and are in the same order
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  // Otherwise, return true
  return true;
}

function dtfParse(path: string): board {
  let data: board = JSON.parse(fis.readFileSync(path, "utf-8"));
  return data;
}

function findObjectFromPath(path: string, key: string, value: any): board | undefined {
  if (dtfParse(path)[key] == value) {
    return dtfParse(path);
  }
}

function findFromESN(esn: string, Time?: number): board | undefined {
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

function findLatestOfModule(Board: board, ModNumber: number): board {
  let dtfFlies = fis.readdirSync("./").filter(file => file.includes('.dtf'));
  let finalPath: string;
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

function findLatestOfCell(Board: board, ModNumber: number, Cell: number): board {
  let dtfFlies = fis.readdirSync("./").filter(file => file.includes('.dtf'));
  let finalPath: string;
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
function findLatestOfPin(Board: board, ModNumber: number, Cell: number, Pin: number): board {
  let dtfFlies = fis.readdirSync("./").filter(file => file.includes('.dtf'));
  let finalPath: string;
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



export { JSONSaver, emptyBoard, arraysMatch, dtfParse, findFromESN, findLatestOfModule, findObjectFromPath, findLatestOfCell, findLatestOfPin }