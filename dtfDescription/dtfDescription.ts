/*
This is code that outlines how this data will be structured.
The extension for the file is dtf(Device Testing Format)
If data is not supplied to an object that will be set as a back link to the pervious version of the file.
*/

export interface pin {
  StartTime: number,
  StopTime: number,
  RunTime: number,
  CycleRate: number,
  CycleCount: number,
  UpTiming: number,
  DownTiming: number,
  halfCycles: number,
  HightUp: number,
  HightDown: number,
  PKForce: number,
  TipForce: number,
  Notes: string[],
  Failures: string[]
}

export interface cell {
  pins: pin[]
}

export interface module {
  sn: string,
  cells: cell[]
}

export interface board {
  esn: string,
  time: number,
  modules: module[],
}

function Pin(StartTime?: number, StopTime?: number, RunTime?: number, CycleRate?: number, CycleCount?: number, UpTiming?: number, DownTiming?: number, haltC?: number) {
  this.StartTime = StartTime;
  this.StopTime = StopTime;
  this.RunTime = RunTime;
  this.CycleRate = CycleRate;
  this.CycleCount = CycleCount;
  this.UpTiming = UpTiming;
  this.DownTiming = DownTiming;
  this.haltC = haltC;
}
function Cell(pins?: pin[]) {
  this.pins = pins;
}
function Module(sn?: string,cells?: cell[]) {
  this.sn = sn;
  this.cells = cells;
}
function Board(esn: string, time: number, modules?: module[]){
  this.esn = esn;
  this.time = time;
  this.modules = modules;
}

export interface DF {
  esn: string,
  module: number,
  cell: number,
  pin: number,
  keys: string[],
  values: number[]
}


function Changes(esn: string, mod: number, cell: number, pin: number, keys?: string[], values?: number[]) {
  this.esn = esn;
  this.module = mod;
  this.cell = cell;
  this.pin = pin;
  this.keys = keys;
  this.values = values;
}

export{Pin, Cell, Module, Board,Changes};