import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Reuniones } from '../../../lib/collections';

export default class NuevoAcuerdoCtrl extends Controller {
	constructor() {
		super(...arguments);
		this.helpers({
			
		});
	}

	save(){
		console.log(this.reunion)		
	}
}

NuevoAcuerdoCtrl.$name = 'NuevoAcuerdoCtrl';
NuevoAcuerdoCtrl.$inject = ['$stateParams', '$timeout', '$ionicScrollDelegate', '$ionicPopup', '$log'];