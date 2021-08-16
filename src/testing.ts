import { QueryFromESNTime } from './GetData';
import { Board } from './dtfDescription';
import { emptyBoard, ChangeData } from "./Main";
import { findFromESN, findObjectFromPath, address, JSONSaver,fillData,findModuleSN } from './supporting'

let add = {
  pin: [0],
  cell: [0],
  module: [3],
}

let dataFrame = {
  // StartTime: 56,
  // StopTime: 42,
  // RunTime: 52,
  // CycleRate: 35,
  // CycleCount: 44,
  // UpTiming: 345,
  // DownTiming: 346,
  // haltCycles: 567,
  // HightUp: 347,
  // HightDown: 23,
  // PKForce: 85,
  // TipForce: 28,
  // Notes: ["test Note"],
  // Failures: ["Something Bad"],
  MSN: "25533242343434"
}

// console.log(fillData(dataFrame));


let test = ChangeData("tnhoae",1234, add, fillData(dataFrame));

// JSONSaver("./testing/oeuoeoeuoeuyk",test,".dtf");

// console.log(test.modules[0]);


console.log(findModuleSN("./testing","tnhoae",0));