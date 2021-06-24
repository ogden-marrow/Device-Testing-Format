import { JSONSaver } from '../supportingJs/supporting.js';
import { board } from '../dtfDescription/dtfDescription.js';

function QueryFromESNTime(esn: string, Time: number, Module?: number, Cell?: number, Pin?: number,) {
  if ((typeof Module === 'undefined') && ((typeof Cell != 'undefined') || (typeof Pin != 'undefined'))) {
    throw new Error('To select a specific pin or cell a module is required')
  } else if ((typeof Cell === 'undefined') && (typeof Pin != 'undefined')){
    throw new Error('To select a specific pin a module and a cell are required')
  }
  console.log('yep that worked');
}
function QueryFromBoardObject(Board: board, Module?: number, Cell?: Number, Pin?: number) {

}

export { QueryFromBoardObject, QueryFromESNTime }