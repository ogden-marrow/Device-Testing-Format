import { QueryFromESNTime } from './GetData';
import { Board } from './dtfDescription';
import { emptyBoard, ChangeData } from "./Main";
import { getFullBoard } from './jsonTimeLinker';
import { findFromESN, findObjectFromPath, address, JSONSaver, fillData, findModuleSN } from './supporting'
import { writeFileSync } from 'fs';
import { writeFile } from 'fs/promises';

function makeTestingData() {
  let TTT = Date.now();
  for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= 3; j++) {
      for (let k = 0; k <= 7; k++) {
        let add = {
          pin: [k],
          cell: [j],
          module: [i],
        }
        let dataFrame = {
          StartTime: 76,
          StopTime: 52,
          RunTime: 52,
          CycleRate: 5,
          CycleCount: 674,
          UpTiming: 350,
          DownTiming: 600,
          haltCycles: 42424,
          HightUp: 347,
          HightDown: 23,
          PKForce: 45,
          TipForce: 27,
          Notes: ["test Note","some other things about stuff"],
          Failures: ["Something Bad","all good no bad stuff"],
          MSN: `${i+2}A`
        }

        let test = ChangeData("tnhoae", TTT, add, fillData(dataFrame));
        writeFileSync(("./testing/tnhoae" + TTT.toString()+".dtf"),JSON.stringify(test))
        TTT += 1;
      }
    }
  }
}

// console.log(fillData(dataFrame));

// console.log(test.modules[0]);

// makeTestingData();

let timer = Date.now();
JSONSaver("./notsyndtf", getFullBoard("./testing", "tnhoae"), ".dtf");
console.log(Date.now()-timer);

// console.log(findModuleSN("./testing", "tnhoae", 0));