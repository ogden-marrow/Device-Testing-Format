interface Changes {
    esn: string;
    module: number;
    cell: number;
    pin: number;
    keys: string[];
    values: number[];
}
declare function Changes(esn: string, mod: number, cell: number, pin: number, keys?: string[], values?: number[]): void;
declare function arraysMatch(arr1: any[], arr2: any[]): boolean;
