import {JSONSaver} from './supportingJs/supporting.js'
/*
This code generates a sample json file that outlines how this data will be structured.
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

interface cells {
  pins: pins[]
}

interface Module {
  cells: cells[]
}

interface board {
  esn: string,
  time: number,
  modules: Module[],
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
function cell(pins?: pins[]) {
  this.pins = pins;
}
function Module(cells?: cells[]) {
  this.cells = cells;
}
function board(esn: string, time: number, modules?: Module[]) {
  this.esn = esn;
  this.time = time;
  this.modules = modules;
}
function StartingDataGen() {

  let pin0 = new Pin();
  pin0.StartTime = 500;
  pin0.StopTime = 500;
  pin0.RunTime = 500;
  pin0.CycleRate = 500;
  pin0.UpTiming = 500;
  pin0.DownTiming = 500;
  pin0.CycleCount = 500;
  pin0.haltC = 0;

  let pin1 = new Pin();
  pin1.StartTime = 500;
  pin1.StopTime = 500;
  pin1.RunTime = 500;
  pin1.CycleRate = 500;
  pin1.UpTiming = 500;
  pin1.DownTiming = 500;
  pin1.CycleCount = 500;
  pin1.haltC = 0;

  let pin2 = new Pin();
  pin2.StartTime = 500;
  pin2.StopTime = 500;
  pin2.RunTime = 500;
  pin2.CycleRate = 500;
  pin2.UpTiming = 500;
  pin2.DownTiming = 500;
  pin2.CycleCount = 500;
  pin2.haltC = 0;

  let pin3 = new Pin();
  pin3.StartTime = 500;
  pin3.StopTime = 500;
  pin3.RunTime = 500;
  pin3.CycleRate = 500;
  pin3.UpTiming = 500;
  pin3.DownTiming = 500;
  pin3.CycleCount = 500;
  pin3.haltC = 0;

  let pin4 = new Pin();
  pin4.StartTime = 500;
  pin4.StopTime = 500;
  pin4.RunTime = 500;
  pin4.CycleRate = 500;
  pin4.UpTiming = 500;
  pin4.DownTiming = 500;
  pin4.CycleCount = 500;
  pin4.haltC = 0;

  let pin5 = new Pin();
  pin5.StartTime = 500;
  pin5.StopTime = 500;
  pin5.RunTime = 500;
  pin5.CycleRate = 500;
  pin5.UpTiming = 500;
  pin5.DownTiming = 500;
  pin5.CycleCount = 500;
  pin5.haltC = 0;

  let pin6 = new Pin();
  pin6.StartTime = 500;
  pin6.StopTime = 500;
  pin6.RunTime = 500;
  pin6.CycleRate = 500;
  pin6.UpTiming = 500;
  pin6.DownTiming = 500;
  pin6.CycleCount = 500;
  pin6.haltC = 0;

  let pin7 = new Pin();
  pin7.StartTime = 500;
  pin7.StopTime = 500;
  pin7.RunTime = 500;
  pin7.CycleRate = 500;
  pin7.UpTiming = 6969;
  pin7.DownTiming = 500;
  pin7.CycleCount = 500;
  pin7.haltC = 0;

  let cell0 = new cell();
  cell0.pins = [pin0, pin1, pin2, pin3, pin4, pin5, pin6, pin7];

  let cell1 = new cell();
  cell1.pins = [pin0, pin1, pin2, pin3, pin4, pin5, pin6, pin7];

  let cell2 = new cell();
  cell2.pins = [pin0, pin1, pin2, pin3, pin4, pin5, pin6, pin7];

  let cell3 = new cell();
  cell3.pins = [pin0, pin1, pin2, pin3, pin4, pin5, pin6, pin7];

  let mod0 = new Module();
  mod0.cells = [cell0, cell1, cell2, cell3];

  let mod1 = new Module();
  mod1.cells = [cell0, cell1, cell2, cell3];

  let mod2 = new Module();
  mod2.cells = [cell0, cell1, cell2, cell3];

  let mod3 = new Module();
  mod3.cells = [cell0, cell1, cell2, cell3];

  let mod4 = new Module();
  mod4.cells = [cell0, cell1, cell2, cell3];

  let Aboard = new board("HC52HXTN5", Date.now(), [mod0, mod1, mod2, mod3, mod4]);
  return Aboard;
}

function UpdateDataGen() {

  let pin0 = new Pin();
  pin0.StartTime = 500;
  pin0.StopTime = 500;
  pin0.RunTime = 500;
  pin0.CycleRate = 500;
  pin0.UpTiming = 500;
  pin0.DownTiming = 500;
  pin0.CycleCount = 500;
  pin0.haltC = 0;

  let pin1 = new Pin();
  pin1.StartTime = 1000;
  pin1.StopTime = 500;
  pin1.RunTime = 500;
  pin1.CycleRate = 500;
  pin1.UpTiming = 1000;
  pin1.DownTiming = 500;
  pin1.CycleCount = 500;
  pin1.haltC = 0;

  let pin2 = new Pin();
  pin2.StartTime = 500;
  pin2.StopTime = 500;
  pin2.RunTime = 1000;
  pin2.CycleRate = 500;
  pin2.UpTiming = 1000;
  pin2.DownTiming = 500;
  pin2.CycleCount = 500;
  pin2.haltC = 0;

  let pin3 = new Pin();
  pin3.StartTime = 500;
  pin3.StopTime = 500;
  pin3.RunTime = 500;
  pin3.CycleRate = 500;
  pin3.UpTiming = 500;
  pin3.DownTiming = 500;
  pin3.CycleCount = 500;
  pin3.haltC = 0;

  let pin4 = new Pin();
  pin4.StartTime = 500;
  pin4.StopTime = 1000;
  pin4.RunTime = 500;
  pin4.CycleRate = 500;
  pin4.UpTiming = 500;
  pin4.DownTiming = 500;
  pin4.CycleCount = 500;
  pin4.haltC = 0;

  let pin5 = new Pin();
  pin5.StartTime = 500;
  pin5.StopTime = 500;
  pin5.RunTime = 500;
  pin5.CycleRate = 500;
  pin5.UpTiming = 500;
  pin5.DownTiming = 500;
  pin5.CycleCount = 500;
  pin5.haltC = 0;

  let pin6 = new Pin();
  pin6.StartTime = 500;
  pin6.StopTime = 500;
  pin6.RunTime = 500;
  pin6.CycleRate = 500;
  pin6.UpTiming = 500;
  pin6.DownTiming = 500;
  pin6.CycleCount = 500;
  pin6.haltC = 0;

  let pin7 = new Pin();
  pin7.StartTime = 500;
  pin7.StopTime = 500;
  pin7.RunTime = 500;
  pin7.CycleRate = 500;
  pin7.UpTiming = 1000;
  pin7.DownTiming = 500;
  pin7.CycleCount = 500;
  pin7.haltC = 0;

  let cell0 = new cell();
  cell0.pins = [pin0, pin1, pin2, pin3, pin4, pin5, pin6, pin7];
  let cell1 = new cell();
  cell1.pins = [pin0, pin1, pin2, pin3, pin4, pin5, pin6, pin7];
  let cell2 = new cell();
  cell2.pins = [pin0, pin1, pin2, pin3, pin4, pin5, pin6, pin7];
  let cell3 = new cell();
  cell3.pins = [pin0, pin1, pin2, pin3, pin4, pin5, pin6, pin7];
  let mod0 = new Module();
  mod0.cells = [cell0, cell1, cell2, cell3];
  let mod1 = new Module();
  mod1.cells = [cell0, cell1, cell2, cell3];
  let mod2 = new Module();
  mod2.cells = [cell0, cell1, cell2, cell3];
  let mod3 = new Module();
  mod3.cells = [cell0, cell1, cell2, cell3];
  let mod4 = new Module();
  mod4.cells = [cell0, cell1, cell2, cell3];

  let Aboard = new board("HC52HXTN5", Date.now(), [mod0, mod1, mod2, mod3, mod4]);
  return Aboard;
}

function SampleBackLinkDataGen() {

  let pin0 = new Pin();
  pin0.StartTime = 500;
  pin0.StopTime = 500;
  pin0.RunTime = 500;
  pin0.CycleRate = 500;
  pin0.UpTiming = 500;
  pin0.DownTiming = 500;
  pin0.CycleCount = 500;


  let pin1 = new Pin();
  pin1.StartTime = 1000;
  pin1.StopTime = 500;
  pin1.RunTime = 500;
  pin1.CycleRate = 500;
  pin1.UpTiming = 1000;
  pin1.DownTiming = 500;
  pin1.CycleCount = 500;
  pin1.haltC = 0;

  let pin2 = new Pin();
  pin2.StartTime = 500;
  pin2.StopTime = 500;
  pin2.RunTime = 1000;
  pin2.CycleRate = 500;
  pin2.UpTiming = 1000;
  pin2.DownTiming = 500;
  pin2.CycleCount = 500;
  pin2.haltC = 0;

  let pin3 = new Pin();
  pin3.StartTime = 500;
  pin3.StopTime = 500;
  pin3.RunTime = 500;
  pin3.CycleRate = 500;
  pin3.UpTiming = 500;
  pin3.DownTiming = 500;
  pin3.haltC = 0;

  let pin4 = new Pin();
  pin4.StartTime = 500;
  pin4.StopTime = 1000;
  pin4.RunTime = 500;
  pin4.CycleRate = 500;
  pin4.UpTiming = 500;
  pin4.DownTiming = 500;
  pin4.CycleCount = 500;
  pin4.haltC = 0;

  let pin5 = new Pin();
  pin5.StartTime = 500;
  pin5.StopTime = 500;
  pin5.RunTime = 500;
  pin5.CycleRate = 500;
  pin5.UpTiming = 500;
  pin5.DownTiming = 500;
  pin5.CycleCount = 500;
  pin5.haltC = 0;

  let pin6 = new Pin();
  pin6.StartTime = 500;
  pin6.StopTime = 500;
  pin6.RunTime = 500;
  pin6.CycleRate = 500;
  pin6.DownTiming = 500;
  pin6.CycleCount = 500;
  pin6.haltC = 0;

  let pin7 = new Pin();
  pin7.StartTime = 500;
  pin7.StopTime = 500;
  pin7.RunTime = 500;
  pin7.CycleRate = 500;
  pin7.UpTiming = 1000;
  pin7.DownTiming = 500;
  pin7.haltC = 0;

  let cell0 = new cell();
  cell0.pins = [pin0, pin1, pin2, pin3, pin4, pin5, pin6, pin7];
  let cell1 = new cell();
  cell1.pins = [pin0, pin1, pin2, pin3, pin4, pin5, pin6, pin7];
  let cell2 = new cell();
  cell2.pins = [pin0, pin1, pin2, pin3, pin4, pin5, pin6, pin7];
  let cell3 = new cell();
  cell3.pins = [pin0, pin1, pin2, pin3, pin4, pin5, pin6, pin7];
  let mod0 = new Module();
  mod0.cells = [cell0, cell1, cell2, cell3];
  let mod1 = new Module();
  mod1.cells = [cell0, cell1, cell2, cell3];
  let mod2 = new Module();
  mod2.cells = [cell0, cell1, cell2, cell3];
  let mod3 = new Module();
  mod3.cells = [cell0, cell1, cell2, cell3];
  let mod4 = new Module();
  mod4.cells = [cell0, cell1, cell2, cell3];

  let Aboard = new board("HC52HXTN5", Date.now(), [mod0, mod1, mod2, mod3, mod4]);
  return Aboard;
}

JSONSaver("initial", StartingDataGen(), ".dtf");
JSONSaver('Updated', UpdateDataGen(), ".dtf");
JSONSaver('sample', SampleBackLinkDataGen(), ".dtf");