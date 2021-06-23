export interface pin {
    StartTime: number;
    StopTime: number;
    RunTime: number;
    CycleRate: number;
    CycleCount: number;
    UpTiming: number;
    DownTiming: number;
    halfCycles: number;
    HightUp: number;
    HightDown: number;
    PKForce: number;
    TipForce: number;
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
declare function Pin(StartTime?: number, StopTime?: number, RunTime?: number, CycleRate?: number, CycleCount?: number, UpTiming?: number, DownTiming?: number, haltC?: number): void;
declare function Cell(pins?: pin[]): void;
declare function Module(sn?: string, cells?: cell[]): void;
declare function Board(esn: string, time: number, modules?: module[]): void;
export { Pin, Cell, Module, Board };
