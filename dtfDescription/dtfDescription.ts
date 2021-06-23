/*
This is code that outlines how this data will be structured.
The extension for the file is dtf(Device Testing Format)
If data is not supplied to an object that will be set as a back link to the pervious version of the file.
All keys in the initial file have to have values.
*/

interface pins {
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
  TipForce: number
}

interface cell {
  pins: pins[]
}

interface module {
  sn: string,
  cells: cell[]
}

interface board {
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
function Cell(pins?: pins[]) {
  this.pins = pins;
}
function Module(sn: string,cells?: cell[]) {
  this.sn = sn;
  this.cells = cells;
}
function Board(esn: string, time: number, modules?: module[]) {
  this.esn = esn;
  this.time = time;
  this.modules = modules;
}
export{Pin, Cell, Module, Board};