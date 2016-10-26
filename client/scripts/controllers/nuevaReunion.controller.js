import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Reuniones } from '../../../lib/collections';
 
export default class NuevaReunionCtrl extends Controller {
	constructor() {
		super(...arguments);

		this.helpers({
			
		});
	}

	save(){
			
		Reuniones.insert(this.reunion);
		
	}
}

NuevaReunionCtrl.$name = 'NuevaReunionCtrl';
NuevaReunionCtrl.$inject = ['$stateParams', '$timeout', '$ionicScrollDelegate', '$ionicPopup', '$log','$ionicHistory'];