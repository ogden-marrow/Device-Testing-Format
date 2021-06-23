/*
This is code that outlines how this data will be structured.
The extension for the file is dtf(Device Testing Format)
If data is not supplied to an object that will be set as a back link to the pervious version of the file.
All keys in the initial file have to have values.
*/
function Pin(StartTime, StopTime, RunTime, CycleRate, CycleCount, UpTiming, DownTiming, haltC) {
    this.StartTime = StartTime;
    this.StopTime = StopTime;
    this.RunTime = RunTime;
    this.CycleRate = CycleRate;
    this.CycleCount = CycleCount;
    this.UpTiming = UpTiming;
    this.DownTiming = DownTiming;
    this.haltC = haltC;
}
function Cell(pins) {
    this.pins = pins;
}
function Module(sn, cells) {
    this.sn = sn;
    this.cells = cells;
}
function Board(esn, time, modules) {
    this.esn = esn;
    this.time = time;
    this.modules = modules;
}
export { Pin, Cell, Module, Board };
