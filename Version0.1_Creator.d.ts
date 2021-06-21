declare const fis: any;
interface pins {
    StartTime: number;
    StopTime: number;
    RunTime: number;
    CycleRate: number;
    CycleCount: number;
    UpTiming: number;
    DownTiming: number;
    halfCycles: number;
}
interface cells {
    pins: pins[];
}
interface Module {
    cells: cells[];
}
interface board {
    esn: string;
    time: number;
    modules: Module[];
}
declare function Pin(StartTime?: number, StopTime?: number, RunTime?: number, CycleRate?: number, CycleCount?: number, UpTiming?: number, DownTiming?: number, haltC?: number): void;
declare function cell(pins?: pins[]): void;
declare function Module(cells?: cells[]): void;
declare function board(esn: string, time: number, modules: Module[]): void;
declare function StartingDataGen(): any;
declare function UpdateDataGen(): any;
declare function SampleBackLinkDataGen(): any;
declare function JSONSaver(FileName: string, json2Parse: any, extension: string): void;
