import { QueryFromESNTime } from './GetData';
import { Board } from './dtfDescription';
import { emptyBoard, ChangeData } from "./Main";
import { getFullBoard } from './jsonTimeLinker';
import { findFromESN, findObjectFromPath, address, JSONSaver,fillData,findModuleSN } from './supporting'

let add = {
  pin: [0],
  cell: [0],
  module: [1],
}

let dataFrame = {
  StartTime: 56,
  StopTime: 42,
  RunTime: 52,
  CycleRate: 35,
  CycleCount: 44,
  UpTiming: 345,
  DownTiming: 4242,
  haltCycles: 42424,
  HightUp: 347,
  HightDown: 23,
  PKForce: 45,
  TipForce: 27,
  Notes: ["test Note"],
  Failures: ["Something Bad"],
  MSN: "420"
}

// console.log(fillData(dataFrame));


// let test = ChangeData("tnhoae",1237, add, fillData(dataFrame));

// JSONSaver("./testing/test2",test,".dtf");

// console.log(test.modules[0]);

console.log(getFullBoard("./testing","tnhoae"))

// console.log(findModuleSN("./testing","tnhoae",0));