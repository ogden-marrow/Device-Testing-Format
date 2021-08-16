import { time } from 'console';
import * as fs from 'fs';
import { Board, Cell, Module, Pin, board, cell, pin, module } from './dtfDescription';

export interface address {
  pin: number[];
  cell: number[];
  module: number[];
}
export interface updateData {
  StartTime: number,
  StopTime: number,
  RunTime: number,
  CycleRate: number,
  CycleCount: number,
  UpTiming: number,
  DownTiming: number,
  haltCycles: number,
  HightUp: number,
  HightDown: number,
  PKForce: number,
  TipForce: number,
  Notes: string[],
  Failures: string[],
  MSN: string
}

function address(moduleN: number[], cellN?: number[], pinN?: number[]): address {
  let obj = {
    pin: pinN,
    cell: cellN,
    module: moduleN
  };
  return obj;
}

function fillData(data): updateData {
  let upData = {
    StartTime: undefined,
    StopTime: undefined,
    RunTime: undefined,
    CycleRate: undefined,
    CycleCount: undefined,
    UpTiming: undefined,
    DownTiming: undefined,
    haltCycles: undefined,
    HightUp: undefined,
    HightDown: undefined,
    PKForce: undefined,
    TipForce: undefined,
    Notes: undefined,
    Failures: undefined,
    MSN: undefined
  };
  for (let i = 0; i < Object.keys(upData).length; i++) {
    let newKey = Object.keys(upData)[i];
    for (let j = 0; j < Object.keys(data).length; j++) {
      let key = Object.keys(data)[j];
      if (newKey === key) {
        upData[newKey] = Object.values(data)[j];
      }
    }
  }
  return upData;
}


function JSONSaver(FileName: string, json2Parse: any, extension: string) {
  let json = JSON.stringify(json2Parse);
  fs.writeFile(FileName + extension, json, function (err) { if (err) throw err; });
}

function emptyBoard(esn: string, time: number, MSN?: string[]): board {
  if (MSN) {
    let board = new Board(esn, time, emptyModules(emptyCells(emptyPins()), MSN));
    return board
  } else {
    let board = new Board(esn, time, emptyModules(emptyCells(emptyPins())));
    return board
  }
}

function emptyModules(cells: cell[], SN?: string[]): module[] {
  let modules = new Array(5);
  for (let i = 0; i < 5; i++) {
    modules[i] = new Module(null, cells);
  }
  return modules
}

function FillModules(cellsF: cell[], address: address, SN?: string[]): module[] {
  let modules = new Array(5);
  for (let i = 0; i < 5; i++) {
    if (address.module.includes(i)) {
      modules[i] = new Module(null, cellsF)
    } else {
      modules[i] = new Module(null, emptyCells(emptyPins()));
    }
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
function FillCells(pinsF: pin[], address: address): cell[] {
  let cellsF = new Array(4);
  for (let i = 0; i < 4; i++) {
    if (address.cell.includes(i)) {
      cellsF[i] = new Cell(pinsF);
    } else {
      cellsF[i] = new Cell(emptyPins());
    }
  }
  return cellsF;
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
  let data: board = JSON.parse(fs.readFileSync(path, "utf-8"));
  return data;
}

function findObjectFromPath(path: string, key: string, value: any): board | undefined {
  if (dtfParse(path)[key] == value) {
    return dtfParse(path);
  }
}

function findFromESN(esn: string, Path: string, Time?: number): board | undefined {
  let finalBoard = emptyBoard(esn, 0);
  let dtfFlies = fs.readdirSync(Path).filter(file => file.includes('.dtf'));
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

function findLatestOfModule(Path: string, Board: board, ModNumber: number): board {
  let dtfFlies = fs.readdirSync(Path).filter(file => file.includes('.dtf'));
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
function findModuleSN(Path: string, ESN:string, ModNumber: number): board {
  let dtfFlies = fs.readdirSync(Path).filter(file => file.includes('.dtf'));
  let finalPath: string;
  let boardTime = 0;
  dtfFlies.forEach(element => {
    let testBoard = findObjectFromPath(element, "esn", ESN);
    if (typeof (testBoard) != 'undefined') {
      if (Object.keys(testBoard.modules[ModNumber]).length != 0) {
        if (testBoard.modules[ModNumber].sn != "") {
          if (testBoard.time > boardTime) {
            finalPath = element;
            boardTime = testBoard.time;
          }
        } else {
          if (testBoard.time > boardTime) {
            finalPath = element;
            boardTime = testBoard.time;
          }
        }
      }
    }
  });
  return dtfParse(finalPath);
}

function findLatestOfCell(Board: board, ModNumber: number, Cell: number): board {
  let dtfFlies = fs.readdirSync("./").filter(file => file.includes('.dtf'));
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
  let dtfFlies = fs.readdirSync("./").filter(file => file.includes('.dtf'));
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

function ChangeData(esn: string, time: number, address: address, updateData: updateData) {
  if (!(address.cell == undefined) && !(address.pin == undefined)) {
    let B = PinChange(esn, time, address, updateData);
    (updateData.MSN != undefined) ? B.modules[address.module[0]].sn = updateData.MSN : null;
    return B;
  } else if (address.module) {
    console.log("err");
  } else if (!(address.module == undefined)) {

  } else {
    console.log(`there must be a a module number`);
  }
}


function moduleSNChange(esn: string, time: number, address: address, newData: updateData) {

}

function PinChange(esn: string, time: number, address: address, newData: updateData): board {
  let pinsFill = new Array(8);
  for (let i = 0; i < 8; i++) {
    if (address.pin.includes(i)) {
      pinsFill[i] = new Pin(
        newData.StartTime,
        newData.StopTime,
        newData.RunTime,
        newData.CycleRate,
        newData.CycleCount,
        newData.UpTiming,
        newData.DownTiming,
        newData.haltCycles,
        newData.HightUp,
        newData.HightDown,
        newData.PKForce,
        newData.TipForce,
        newData.Notes,
        newData.Failures
      );
    }
    else {
      pinsFill[i] = new Pin();
    }
  }
  return new Board(esn, time, FillModules(FillCells(pinsFill, address), address));
}

export {
  JSONSaver,
  emptyBoard,
  arraysMatch,
  dtfParse,
  findFromESN,
  findLatestOfModule,
  findObjectFromPath,
  findLatestOfCell,
  findLatestOfPin,
  ChangeData,
  fillData,
  findModuleSN
}