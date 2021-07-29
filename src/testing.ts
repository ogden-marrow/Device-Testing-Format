import { QueryFromESNTime } from './GetData';
import { Board } from './dtfDescription';
import { emptyBoard, ChangeData } from "./Main";
import { findFromESN, findObjectFromPath , address} from './supporting'

let add = {
  pin: 0,
  cell: 0,
  module: 0,
}

let pin = {
  
}

let test = ChangeData(emptyBoard("nth45th",6969),add);

// console.log(test.modules[0].cells[1].pins[0]);