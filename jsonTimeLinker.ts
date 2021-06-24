/*jshint esversion: 6 */
//when one tries to modify the json the Reference the previous version

import * as fs from 'fs';
import {UpdateObject} from './BackLinker.js'
import {JSONSaver} from './supportingJs/supporting.js'
// Read in and parse the json
let newData = JSON.parse(fs.readFileSync('./sample.dtf',"utf-8"));
let OGData = JSON.parse(fs.readFileSync('./initial.dtf', "utf-8"));