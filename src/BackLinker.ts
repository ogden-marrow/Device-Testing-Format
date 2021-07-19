import { board } from './dtfDescription'
import * as DF from './difference';
import { emptyBoard } from './supporting';


function UpdateObject(initial: board, data: board): board {
  let diff = DF.DifferenceFinder(initial, data);
  let board: board = emptyBoard(diff[0].esn, initial.time);
  for (let i = 0; i < diff.length; i++) {
    for (let j = 0; j < diff[i].keys.length; j++) {
      let key = diff[i].keys[j];
      board.modules[diff[i].module].cells[diff[i].cell].pins[diff[i].pin][key] = diff[i].values[j]
    }
  }
  return board;
}

export { UpdateObject };