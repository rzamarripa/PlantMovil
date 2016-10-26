
import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Reuniones } from '../../../lib/collections';
 
export default class ReunionesCtrl extends Controller {
	constructor() {
		super(...arguments);
		this.helpers({
			reuniones() {
				console.log(Reuniones.find().fetch())
				return Reuniones.find();
			}
		});
	}
}

ReunionesCtrl.$name = 'ReunionesCtrl';
ReunionesCtrl.$inject = ['$stateParams', '$timeout', '$ionicScrollDelegate', '$ionicPopup', '$log'];