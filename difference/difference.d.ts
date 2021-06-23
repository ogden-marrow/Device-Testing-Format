interface DF {
    esn: string;
    module: number;
    cell: number;
    pin: number;
    keys: string[];
    values: number[];
}
declare function DifferenceFinder(Board: any, BoardUpdate: any): DF[];
export { DifferenceFinder };
