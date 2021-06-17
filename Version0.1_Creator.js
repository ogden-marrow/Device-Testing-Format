/*jshint esversion: 6 */

class Pin {
    constructor(StartTime, StopTime, RunTime, CycleRate, CycleCount, UpTiming, DownTiming, esn) {
        this.StartTime = StartTime;
        this.StopTime = StopTime;
        this.RunTime = RunTime;
        this.CycleRate = CycleRate;
        this.CycleCount = CycleCount;
        this.UpTiming = UpTiming;
        this.DownTiming = DownTiming;
        this.esn = esn;
    }
}

class module {
    constructor(esn) {
        this.esn = esn;
    }
}

function JSONSaver() {
    let pin2 = new Pin();
    pin2.StopTime = 272349324;
    pin2.CycleRate = 25423;

    let json = JSON.stringify(pin2);
    fs.writeFile('Test.json', json, function (err) {
        if (err) throw err;
        console.log('Saved!');
        console.log(json);
    });
}
JSONSaver();