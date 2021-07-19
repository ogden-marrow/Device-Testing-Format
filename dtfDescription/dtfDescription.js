"use strict";
/*
This is code that outlines how this data will be structured.
The extension for the file is dtf(Device Testing Format)
If data is not supplied to an object that will be set as a back link to the pervious version of the file.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Changes = exports.Board = exports.Module = exports.Cell = exports.Pin = void 0;
function Pin(StartTime, StopTime, RunTime, CycleRate, CycleCount, UpTiming, DownTiming, haltC, HightUp, HightDown, PKForce, TipForce, Notes, Failures) {
    this.StartTime = StartTime;
    this.StopTime = StopTime;
    this.RunTime = RunTime;
    this.CycleRate = CycleRate;
    this.CycleCount = CycleCount;
    this.UpTiming = UpTiming;
    this.DownTiming = DownTiming;
    this.haltC = haltC;
    this.HightUp = HightUp;
    this.HightDown = HightDown;
    this.PKForce = PKForce;
    this.TipForce = TipForce;
    this.Notes = Notes;
    this.Failures = Failures;
}
exports.Pin = Pin;
function Cell(pins) {
    this.pins = pins;
}
exports.Cell = Cell;
function Module(sn, cells) {
    this.sn = sn;
    this.cells = cells;
}
exports.Module = Module;
function Board(esn, time, modules) {
    this.esn = esn;
    this.time = time;
    this.modules = modules;
}
exports.Board = Board;
function Changes(esn, mod, cell, pin, keys, values) {
    this.esn = esn;
    this.module = mod;
    this.cell = cell;
    this.pin = pin;
    this.keys = keys;
    this.values = values;
}
exports.Changes = Changes;
