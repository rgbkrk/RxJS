/**
 * Everything in this file is generated by the 'tools/generate-operator-patches.ts' script.
 * Any manual edits to this file will be lost next time the script is run.
 **/
import {Observable} from '../../Observable';
import {map} from '../../operator/map';

Observable.prototype.map = map;

export var _void: void;