"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DifferenceFinder = void 0;
const supporting_js_1 = require("../supportingJs/supporting.js");
const dtfDescription_js_1 = require("../dtfDescription/dtfDescription.js");
function DifferenceFinder(Board, BoardUpdate) {
    let OldObject;
    let NewObject;
    let OldKey;
    let OldValue;
    let NewKey;
    let NewValue;
    let change;
    let ChangesArray = [];
    if (Board.esn == BoardUpdate.esn && Board.time != BoardUpdate.time) {
        for (let i = 0; i < Board.modules.length; i++) {
            for (let j = 0; j < Board.modules[i].cells.length; j++) {
                for (let k = 0; k < Board.modules[i].cells[j].pins.length; k++) {
                    OldObject = Board.modules[i].cells[j].pins[k];
                    NewObject = BoardUpdate.modules[i].cells[j].pins[k];
                    if (supporting_js_1.arraysMatch(Object.keys(OldObject), Object.keys(NewObject))) {
                        change = new dtfDescription_js_1.Changes(Board.esn, i, j, k, [], []);
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
                    }
                    else {
                        // console.log("Incompatible Data: \nThe pin attributes do not mach");
                    }
                }
            }
        }
    }
    else {
        console.log('Not the same Hardware or are from the same time');
    }
    return ChangesArray;
}
exports.DifferenceFinder = DifferenceFinder;
