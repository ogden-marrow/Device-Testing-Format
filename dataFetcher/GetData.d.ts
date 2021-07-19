import { board, module, cell, pin } from '../dtfDescription/dtfDescription.js';
declare function QueryFromESNTime(esn: string, Time?: number, Module?: number, Cell?: number, Pin?: number): board | module | cell | pin;
declare function QueryFromBoardObject(Board: board, Module?: number, Cell?: Number, Pin?: number): void;
export { QueryFromBoardObject, QueryFromESNTime };
