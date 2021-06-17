/*jshint esversion: 6 */

const fs = require('fs');

/*
This code generates a sample json file that outlines how this data will be structured.
*/

function Pin(StartTime, StopTime, RunTime, CycleRate, CycleCount, UpTiming, DownTiming) {
    this.StartTime = StartTime;
    this.StopTime = StopTime;
    this.RunTime = RunTime;
    this.CycleRate = CycleRate;
    this.CycleCount = CycleCount;
    this.UpTiming = UpTiming;
    this.DownTiming = DownTiming;
}
function cell(cn, pins) {
    this.cn = cn;
    this.pins = [pins];
}

function Module(mn, cells) {
    this.mn = mn;
    this.cells = [cells];
}

function board(esn, modules) {
    this.esn = esn;
    this.modules = [modules];
}


function dataGen() {

    let pin0 = new Pin();
    pin0.StartTime = 100;
    pin0.StopTime = 355;
    pin0.RunTime = 2424242;
    pin0.CycleRate = 345;
    pin0.UpTiming = 24432;
    pin0.DownTiming = 242;
    pin0.CycleCount = 324;

    let pin1 = new Pin();
    pin1.StartTime = 100;
    pin1.StopTime = 355;
    pin1.RunTime = 2424242;
    pin1.CycleRate = 345;
    pin1.UpTiming = 24432;
    pin1.DownTiming = 242;
    pin1.CycleCount = 324;

    let pin2 = new Pin();
    pin2.StartTime = 100;
    pin2.StopTime = 355;
    pin2.RunTime = 2424242;
    pin2.CycleRate = 345;
    pin2.UpTiming = 24432;
    pin2.DownTiming = 242;
    pin2.CycleCount = 324;

    let pin3 = new Pin();
    pin3.StartTime = 100;
    pin3.StopTime = 355;
    pin3.RunTime = 2424242;
    pin3.CycleRate = 345;
    pin3.UpTiming = 24432;
    pin3.DownTiming = 242;
    pin3.CycleCount = 324;

    let pin4 = new Pin();
    pin4.StartTime = 100;
    pin4.StopTime = 355;
    pin4.RunTime = 2424242;
    pin4.CycleRate = 345;
    pin4.UpTiming = 24432;
    pin4.DownTiming = 242;
    pin4.CycleCount = 324;

    let pin5 = new Pin();
    pin5.StartTime = 100;
    pin5.StopTime = 355;
    pin5.RunTime = 2424242;
    pin5.CycleRate = 345;
    pin5.UpTiming = 24432;
    pin5.DownTiming = 242;
    pin5.CycleCount = 324;

    let pin6 = new Pin();
    pin6.StartTime = 100;
    pin6.StopTime = 355;
    pin6.RunTime = 2424242;
    pin6.CycleRate = 345;
    pin6.UpTiming = 24432;
    pin6.DownTiming = 242;
    pin6.CycleCount = 324;


    let pin7 = new Pin();
    pin7.StartTime = 100;
    pin7.StopTime = 355;
    pin7.RunTime = 2424242;
    pin7.CycleRate = 345;
    pin7.UpTiming = 24432;
    pin7.DownTiming = 242;
    pin7.CycleCount = 324;



    let cell0 = new cell();
    cell0.cn = 0;
    cell0.pins = [pin0, pin1, pin2, pin3, pin4, pin5, pin6, pin7];

    let cell1 = new cell();
    cell1.cn = 1;
    cell1.pins = [pin0, pin1, pin2, pin3, pin4, pin5, pin6, pin7];

    let cell2 = new cell();
    cell2.cn = 2;
    cell2.pins = [pin0, pin1, pin2, pin3, pin4, pin5, pin6, pin7];

    let cell3 = new cell();
    cell3.cn = 3;
    cell3.pins = [pin0, pin1, pin2, pin3, pin4, pin5, pin6, pin7];

    let mod0 = new Module();
    mod0.mn = 0;
    mod0.cells = [cell0, cell1,cell2,cell3];

    let mod1 = new Module();
    mod1.mn = 1;
    mod1.cells = [cell0, cell1,cell2,cell3];

    let mod2 = new Module();
    mod2.mn = 2;
    mod2.cells = [cell0, cell1,cell2,cell3];

    let mod3 = new Module();
    mod3.mn = 3;
    mod3.cells = [cell0, cell1,cell2,cell3];

    let mod4 = new Module();
    mod4.mn = 4;
    mod4.cells = [cell0, cell1,cell2,cell3];

    let Aboard = new board();
    Aboard.esn = "HC52HXTN5";
    Aboard.modules = [mod0,mod1,mod2,mod3,mod4];
    return Aboard;
}


function JSONSaver() {

    let json = JSON.stringify(dataGen());
    fs.writeFile('Test.json', json, function (err) {
        if (err) throw err;
        console.log('Saved!');
        console.log(json);
    });
}
JSONSaver();