import { arraysMatch } from './supporting';
import { DF, Changes, board, pin } from './dtfDescription';

function DifferenceFinder(Board: board, BoardUpdate: board): DF[] {
  let OldObject: pin;
  let NewObject: pin;
  let OldKey: string;
  let OldValue: string | number;
  let NewKey: string;
  let NewValue;
  let change: DF;
  let ChangesArray: DF[] = [];
  if (Board.esn == BoardUpdate.esn && Board.time != BoardUpdate.time) {
    for (let i = 0; i < Board.modules.length; i++) {
      for (let j = 0; j < Board.modules[i].cells.length; j++) {
        for (let k = 0; k < Board.modules[i].cells[j].pins.length; k++) {
          OldObject = Board.modules[i].cells[j].pins[k];
          NewObject = BoardUpdate.modules[i].cells[j].pins[k];
          if (arraysMatch(Object.keys(OldObject), Object.keys(NewObject))) {
            change = new Changes(Board.esn, i, j, k, [], []);
            for (let z = 0; z < Object.keys(OldObject).length; z++) {
              OldKey = Object.keys(OldObject)[z];
              OldValue = OldObject[OldKey];
              NewKey = Object.keys(NewObject)[z];
              NewValue = NewObject[NewKey];
              if (OldValue != NewValue) {
                change.keys.push(OldKey);
                change.values.push(NewValue);
                ChangesArray.push(change);
              }
            }
          } else {
            // console.log("Incompatible Data: \nThe pin attributes do not mach");
          }
        }
      }
    }
  } else {
    throw('Not the same Hardware or are from the same time');
  }
  return ChangesArray;
}

export { DifferenceFinder }