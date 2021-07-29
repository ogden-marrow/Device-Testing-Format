import { QueryFromESNTime } from './GetData';
import { Board } from './dtfDescription';
import { emptyBoard, ChangePinData } from "./Main";
import { findFromESN, findObjectFromPath , address} from './supporting'

let add = {
  pin: 0,
  cell: 3,
  module: 0,
}

let test = ChangePinData(emptyBoard("nth45th",6969),add);

console.log(test.modules[0].cells[1].pins[0]);