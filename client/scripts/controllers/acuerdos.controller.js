
import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Acuerdos } from '../../../lib/collections';
 
export default class AcuerdosCtrl extends Controller {
	constructor() {
		super(...arguments);
		this.helpers({
			acuerdos() {
				return Acuerdos.find();
			}
		});
	}
}