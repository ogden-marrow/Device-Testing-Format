import { findFromESN, JSONSaver, findLatestOf} from '../supportingJs/supporting.js';
import { board, module, cell, pin } from '../dtfDescription/dtfDescription.js';

function QueryFromESNTime(esn: string, Time?: number, Module?: number, Cell?: number, Pin?: number,): board | module | cell | pin {
  if ((typeof (Module) == 'undefined') && ((typeof (Cell) != 'undefined') || (typeof (Pin) != 'undefined'))) {
    throw new Error('To select a specific pin or cell a module is required')
  } else if ((typeof (Cell) == 'undefined') && (typeof (Pin) != 'undefined')) {
    throw new Error('To select a specific pin a module and a cell are required')
  } else if (typeof (Module) == 'undefined') {
    if (typeof (Time) != 'undefined') {
      return findFromESN(esn, Time)
    } else {
      return findFromESN(esn)
    }
  } else if (typeof (Module) == 'number' && (typeof (Cell) == 'undefined')) {
    if (typeof (Time) != 'undefined') {
      return QueryForModule(findFromESN(esn, Time), Module);
    } else {
      return QueryForModule(findFromESN(esn), Module);
    }
  } else if (typeof (Cell) == 'number' && (typeof (Pin) == 'undefined')) {
    if (typeof (Time) != 'undefined') {
      return QueryForCell(findFromESN(esn, Time), Module, Cell)
    } else {
      return QueryForCell(findFromESN(esn), Module, Cell);
    }
  } else if (typeof (Pin) == 'number') {
    if (typeof (Time) != 'undefined') {
      return QueryForPin(findFromESN(esn, Time), Module, Cell, Pin);
    } else {
      return QueryForPin(findFromESN(esn), Module, Cell, Pin);
    }
  }
}

function QueryForModule(Board: board, ModNumber: number){
  if (Object.keys(Board.modules[ModNumber]).length == 0) {
    return findLatestOf(Board,ModNumber);
  } else {
    return Board.modules[ModNumber]
  }
}
function QueryForCell(Board: board, ModNumber: number, Cell: number): cell {
  return Board.modules[ModNumber].cells[Cell]
}
function QueryForPin(Board: board, ModNumber: number, Cell: number, Pin: number): pin {
  return Board.modules[ModNumber].cells[Cell].pins[Pin]
}
function QueryForPinData(Board: board, ModNumber: number, Cell: number, Pin: number, key: string, value: number) { }


function QueryFromBoardObject(Board: board, Module?: number, Cell?: Number, Pin?: number) {
  if ((typeof (Module) === 'undefined') && ((typeof (Cell) != 'undefined') || (typeof (Pin) != 'undefined'))) {
    throw new Error('To select a specific pin or cell a module is required')
  } else if ((typeof (Cell) === 'undefined') && (typeof (Pin) != 'undefined')) {
    throw new Error('To select a specific pin a module and a cell are required')
  }

}

export { QueryFromBoardObject, QueryFromESNTime }