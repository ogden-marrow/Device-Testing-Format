import { findFromESN, JSONSaver, findLatestOfModule, findLatestOfCell, findLatestOfPin } from './supporting';
import { board, module, cell, pin } from './dtfDescription';

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

function QueryForModule(Board: board, ModNumber: number): module {
  if (Object.keys(Board.modules[ModNumber]).length == 0) {
    return findLatestOfModule(Board, ModNumber).modules[ModNumber];
  } else {
    return Board.modules[ModNumber]
  }
}
function QueryForCell(Board: board, ModNumber: number, Cell: number): cell {
  let testBoard: board;
  if (Object.keys(Board.modules[ModNumber]).length == 0) {
    testBoard = findLatestOfModule(Board, ModNumber);
    if (Object.keys(Board.modules[ModNumber].cells[Cell]).length == 0) {
      return findLatestOfCell(testBoard, ModNumber, Cell).modules[ModNumber].cells[Cell];
    } else {
      return testBoard.modules[ModNumber].cells[Cell];
    }
  } else if (Object.keys(Board.modules[ModNumber].cells[Cell]).length == 0) {
    return findLatestOfCell(Board, ModNumber, Cell).modules[ModNumber].cells[Cell];
  }
  else {
    return Board.modules[ModNumber].cells[Cell]
  }
}
function QueryForPin(Board: board, ModNumber: number, Cell: number, Pin: number): pin {
  let testBoard: board;
  if (Object.keys(Board.modules[ModNumber]).length == 0) {
    testBoard = findLatestOfModule(Board, ModNumber);
    if (Object.keys(Board.modules[ModNumber].cells[Cell]).length == 0) {
      testBoard = findLatestOfCell(testBoard, ModNumber, Cell);
      if (Object.keys(Board.modules[ModNumber].cells[Cell].pins[Pin]).length == 0) {
        return findLatestOfPin(testBoard, ModNumber, Cell, Pin).modules[ModNumber].cells[Cell].pins[Pin];
      } else {
        return testBoard.modules[ModNumber].cells[Cell].pins[Pin];
      }
    } else {
      if (Object.keys(Board.modules[ModNumber].cells[Cell].pins[Pin]).length == 0) {
        return findLatestOfPin(testBoard, ModNumber, Cell, Pin).modules[ModNumber].cells[Cell].pins[Pin];
      } else {
        return testBoard.modules[ModNumber].cells[Cell].pins[Pin];
      }
    }
  } else if (Object.keys(Board.modules[ModNumber].cells[Cell]).length == 0) {
    testBoard = findLatestOfCell(Board, ModNumber, Cell);
    if (Object.keys(Board.modules[ModNumber].cells[Cell].pins[Pin]).length == 0) {
      return findLatestOfPin(testBoard, ModNumber, Cell, Pin).modules[ModNumber].cells[Cell].pins[Pin];
    } else {
      return testBoard.modules[ModNumber].cells[Cell].pins[Pin];
    }
  } else if (Object.keys(Board.modules[ModNumber].cells[Cell].pins[Pin]).length == 0) {
    return findLatestOfPin(Board, ModNumber, Cell, Pin).modules[ModNumber].cells[Cell].pins[Pin];
  } else {
    return Board.modules[ModNumber].cells[Cell].pins[Pin]
  }
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