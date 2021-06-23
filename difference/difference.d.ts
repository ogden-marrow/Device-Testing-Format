interface Changes {
    esn: string;
    module: number;
    cell: number;
    pin: number;
    keys: string[];
    values: number[];
}
declare function Changes(esn: string, mod: number, cell: number, pin: number, keys?: string[], values?: number[]): void;
declare function DifferenceFinder(Board: any, BoardUpdate: any): Changes[];
export { DifferenceFinder };
