export interface pin {
    StartTime: number;
    StopTime: number;
    RunTime: number;
    CycleRate: number;
    CycleCount: number;
    UpTiming: number;
    DownTiming: number;
    haltCycles: number;
    HightUp: number;
    HightDown: number;
    PKForce: number;
    TipForce: number;
    Notes: string[];
    Failures: string[];
}
export interface cell {
    pins: pin[];
}
export interface module {
    sn: string;
    cells: cell[];
}
export interface board {
    esn: string;
    time: number;
    modules: module[];
}
declare function Pin(StartTime?: number, StopTime?: number, RunTime?: number, CycleRate?: number, CycleCount?: number, UpTiming?: number, DownTiming?: number, haltC?: number, HightUp?: number, HightDown?: number, PKForce?: number, TipForce?: number, Notes?: string[], Failures?: string[]): void;
declare function Cell(pins?: pin[]): void;
declare function Module(sn?: string, cells?: cell[]): void;
declare function Board(esn: string, time: number, modules?: module[]): void;
export interface DF {
    esn: string;
    module: number;
    cell: number;
    pin: number;
    keys: string[];
    values: number[];
}
declare function Changes(esn: string, mod: number, cell: number, pin: number, keys?: string[], values?: number[]): void;
export { Pin, Cell, Module, Board, Changes };
