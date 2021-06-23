import * as fis from 'fs';

function JSONSaver(FileName: string, json2Parse: any, extension: string) {
  let json = JSON.stringify(json2Parse);
  fis.writeFile(FileName + extension, json, function (err) { if (err) throw err; });
}

export{JSONSaver}