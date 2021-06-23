interface pins {
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
interface cell {
    pins: pins[];
}
interface module {
    sn: string;
    cells: cell[];
}
declare function Pin(StartTime?: number, StopTime?: number, RunTime?: number, CycleRate?: number, CycleCount?: number, UpTiming?: number, DownTiming?: number, haltC?: number): void;
declare function Cell(pins?: pins[]): void;
declare function Module(sn: string, cells?: cell[]): void;
declare function Board(esn: string, time: number, modules?: module[]): void;
export { Pin, Cell, Module, Board };
