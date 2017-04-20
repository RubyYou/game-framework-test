import {hello} from './hello';
import {render} from './render';
import * as PIXI from 'pixi.js';

console.log('pixi', PIXI);
render(hello());
