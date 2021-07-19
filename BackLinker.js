"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateObject = void 0;
const DF = require("./difference/difference.js");
const supporting_js_1 = require("./supportingJs/supporting.js");
function UpdateObject(initial, data) {
    let diff = DF.DifferenceFinder(initial, data);
    let board = supporting_js_1.emptyBoard(diff[0].esn, initial.time);
    for (let i = 0; i < diff.length; i++) {
        for (let j = 0; j < diff[i].keys.length; j++) {
            let key = diff[i].keys[j];
            board.modules[diff[i].module].cells[diff[i].cell].pins[diff[i].pin][key] = diff[i].values[j];
        }
    }
    return board;
}
exports.UpdateObject = UpdateObject;
