import * as fis from 'fs';
function JSONSaver(FileName, json2Parse, extension) {
    let json = JSON.stringify(json2Parse);
    fis.writeFile(FileName + extension, json, function (err) { if (err)
        throw err; });
}
export { JSONSaver };
