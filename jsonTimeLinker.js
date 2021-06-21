/*jshint esversion: 6 */
//  when one tries to modify the json the Reference the previous version
const fs = require('fs');
// Read in and parse the json
let newData = JSON.parse(fs.readFileSync('./Updated.json'));
let OGData = JSON.parse(fs.readFileSync('./initial.json'));
function arraysMatch(arr1, arr2) {
    // Check if the arrays are the same length
    if (arr1.length !== arr2.length)
        return false;
    // Check if all items exist and are in the same order
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i])
            return false;
    }
    // Otherwise, return true
    return true;
}
function Changes(esn, mod, cell, pin, keys, values) {
    this.esn = esn;
    this.module = mod;
    this.cell = cell;
    this.pin = pin;
    this.keys = [keys];
    this.values = values;
}
function difference(Board, BoardUpdate) {
    let OldObject;
    let NewObject;
    let OldKey;
    let OldValue;
    let NewKey;
    let NewValue;
    let ChangesArray;
    if (Board.esn == BoardUpdate.esn && Board.time != BoardUpdate.time) {
        for (let i = 0; i < Board.modules.length; i++) {
            for (let j = 0; j < Board.modules[i].cells.length; j++) {
                for (let k = 0; k < Board.modules[i].cells[j].pins.length; k++) {
                    OldObject = Board.modules[i].cells[j].pins[k];
                    NewObject = BoardUpdate.modules[i].cells[j].pins[k];
                    if (arraysMatch(Object.keys(OldObject), Object.keys(NewObject))) {
                        for (let z = 0; z < Object.keys(OldObject).length; z++) {
                            OldKey = Object.keys(OldObject)[z];
                            OldValue = OldObject[OldKey];
                            NewKey = Object.keys(NewObject)[z];
                            NewValue = NewObject[NewKey];
                            if (OldValue != NewValue) {
                                console.log(NewValue);
                                console.log(OldValue);
                            }
                        }
                    }
                    else {
                        console.log("Incompatible Data: \nThe pin attributes do not mach");
                    }
                }
            }
        }
    }
    else {
        console.log('Not the same Hardware or are from the same time');
    }
}
difference(OGData, newData);
