/*jshint esversion: 6 */
//  when one tries to modify the json the Reference the previous version
const fs = require('fs');

// Read in and parse the json
let newData = JSON.parse(fis.readFileSync('./Updated.dtdf'));
let OGData = JSON.parse(fis.readFileSync('./initial.dtdf'));

function arraysMatch (arr1:any[], arr2:any[]) {
    // Check if the arrays are the same length
    if (arr1.length !== arr2.length) return false;
    // Check if all items exist and are in the same order
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    // Otherwise, return true
    return true;
}

function Changes(esn:string,mod:number,cell:number,pin:number,keys?:string[],values?:number[]) {
    this.esn = esn;
    this.module = mod;
    this.cell = cell;
    this.pin = pin;
    this.keys = keys;
    this.values = values;
}

interface Changes{
    esn:string,
    module:number,
    cell:number,
    pin:number,
    keys:string[],
    values:number[]
}

function difference(Board, BoardUpdate):Changes[] {
    let OldObject;
    let NewObject;
    let OldKey;
    let OldValue;
    let NewKey;
    let NewValue;
    let change:Changes;
    let ChangesArray:Changes[] = [];
    if (Board.esn == BoardUpdate.esn && Board.time != BoardUpdate.time) {
        for (let i = 0; i < Board.modules.length; i++) {
            for (let j = 0; j < Board.modules[i].cells.length; j++) {
                for (let k = 0; k < Board.modules[i].cells[j].pins.length; k++) {
                    OldObject = Board.modules[i].cells[j].pins[k];
                    NewObject = BoardUpdate.modules[i].cells[j].pins[k];
                    if (arraysMatch(Object.keys(OldObject), Object.keys(NewObject))) {
                        change = new Changes(Board.esn,i,j,k,[],[]);
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
                        console.log("Incompatible Data: \nThe pin attributes do not mach");
                    }
                }
            }
        }
    } else {
        console.log('Not the same Hardware or are from the same time');
    }
    return ChangesArray;
}

console.log(difference(OGData, newData));