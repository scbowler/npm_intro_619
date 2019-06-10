import addToDom from './add_to_dom';
import { add } from './calc';

addToDom('h1', 'This again!');

addToDom('h1', `67 + 21 = ${add(67, 21)}`);

addToDom('h1', '36 + 6 = ' + add(36, 6));
