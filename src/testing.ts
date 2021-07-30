import { QueryFromESNTime } from './GetData';
import { Board } from './dtfDescription';
import { emptyBoard, ChangeData } from "./Main";
import { findFromESN, findObjectFromPath , address} from './supporting'

let add = {
  pin: [0],
  cell: [0],
  module: [0],
}

let dataFrame = {
  StartTime: 24,
  StopTime: 42,
  RunTime: 52,
  CycleRate: 35,
  CycleCount: 245,
  UpTiming: 345,
  DownTiming: 346,
  haltCycles: 567,
  HightUp: 347,
  HightDown: 23,
  PKForce:85 ,
  TipForce: 28,
  Notes: ["test Note"],
  Failures:["Something Bad"] ,
  MSN: "255634"
}

let test = ChangeData(emptyBoard("nth45th",6969),add,dataFrame);

// console.log(test.modules[0].cells[1].pins[0]);