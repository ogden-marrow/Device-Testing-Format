import { QueryFromESNTime } from './GetData';
import { Board } from './dtfDescription';
import { findFromESN, findObjectFromPath } from './supporting'


console.log(QueryFromESNTime('HC52HXTN5', undefined, 0, 0, 1));

console.log(Object.keys(findObjectFromPath("./backLinked.dtf", "esn", 'HC52HXTN5').modules[0].cells[0]).length);