/*jshint esversion: 6 */
//when one tries to modify the json the Reference the previous version
import { Board, board, Cell, Module, pin, Pin, cell, module } from './dtfDescription';
import { findFromESN, findLatestOfPinValue, findModuleSN, updateData } from './supporting'

function getFullBoard(Path: string, ESN: string): board {
  let stuff = findFromESN(ESN, Path);

  
  let outModules: module[] = [];
  for (let i = 0; i < stuff.modules.length; i++) {
    const module = stuff.modules[i];
    let outCells: cell[] = [];
    let msn = (module.sn != null) ? module.sn : findModuleSN(Path, ESN, i).modules[i].sn;
    for (let j = 0; j < module.cells.length; j++) {
      const cell = module.cells[j];
      let outPins: pin[] = [];
      for (let k = 0; k < cell.pins.length; k++) {
        const pin = cell.pins[k];
        let pinData = {
          StartTime: undefined,
          StopTime: undefined,
          RunTime: undefined,
          CycleRate: undefined,
          CycleCount: undefined,
          UpTiming: undefined,
          DownTiming: undefined,
          haltCycles: undefined,
          HightUp: undefined,
          HightDown: undefined,
          PKForce: undefined,
          TipForce: undefined,
          Notes: undefined,
          Failures: undefined,
          MSN: undefined
        }
        pinData.MSN = msn;
        if (Object.values(pin).length == 0) {
          for (let t = 0; t < Object.keys(pinData).length - 1; t++) {
            const testKey = Object.keys(pinData)[t];
            pinData[testKey] = findLatestOfPinValue(Path, ESN, i, j, k, testKey);
          }
        } else {
          for (let w = 0; w < Object.keys(pin).length; w++) {
            const key = Object.keys(pin)[w];
            const value = Object.values(pin)[w];
            pinData[key] = value;
          }
        }
        outPins.push(new Pin(pinData.StartTime,
          pinData.StopTime,
          pinData.RunTime,
          pinData.CycleRate,
          pinData.CycleCount,
          pinData.UpTiming,
          pinData.DownTiming,
          undefined,
          pinData.HightUp,
          pinData.HightDown,
          pinData.PKForce,
          pinData.TipForce,
          pinData.Notes,
          pinData.Failures
        ));
      }
      outCells.push(new Cell(outPins));
    }
    outModules.push(new Module(msn, outCells));
  }
  let outBoard = new Board(ESN, Date.now(), outModules);

  return outBoard;
}

export {
  getFullBoard
}