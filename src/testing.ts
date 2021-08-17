import { QueryFromESNTime } from './GetData';
import { Board } from './dtfDescription';
import { emptyBoard, ChangeData } from "./Main";
import { getFullBoard } from './jsonTimeLinker';
import { findFromESN, findObjectFromPath, address, JSONSaver, fillData, findModuleSN } from './supporting'

function makeTestingData() {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 8; k++) {
        let add = {
          pin: [k],
          cell: [j],
          module: [i],
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
          MSN: `${i}`
        }
        let TTT = Date.now();
        let test = ChangeData("tnhoae",TTT, add, fillData(dataFrame));
        JSONSaver("./testing/tnhoae"+TTT.toString(), test, ".dtf");
      }
    }
  }
}

// console.log(fillData(dataFrame));

// console.log(test.modules[0]);

// makeTestingData();

 JSONSaver("./notsyndtf",getFullBoard("./testing", "tnhoae"),".dtf");

console.log(findModuleSN("./testing","tnhoae",0));