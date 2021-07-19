"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GetData_js_1 = require("../dataFetcher/GetData.js");
const supporting_js_1 = require("../supportingJs/supporting.js");
console.log(GetData_js_1.QueryFromESNTime('HC52HXTN5', undefined, 0, 0, 1));
console.log(Object.keys(supporting_js_1.findObjectFromPath("./backLinked.dtf", "esn", 'HC52HXTN5').modules[0].cells[0]).length);
