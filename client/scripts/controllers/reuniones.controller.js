
import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Reuniones } from '../../../lib/collections';
 
export default class ReunionesCtrl extends Controller {
	constructor($scope, $stateParams, $cordovaContacts) {
		super(...arguments);
		this.contacts = [];
		this.helpers({
			reuniones() {
				return Reuniones.find();
			}
		});
	}
	
	getAllContacts($scope, $stateParams, $cordovaContacts) {
    $cordovaContacts.find().then(function(allContacts) { //omitting parameter to .find() causes all contacts to be returned
	    console.log(allContacts)
      this.contacts = allContacts;
    });
  };
}

ReunionesCtrl.$name = 'ReunionesCtrl';
ReunionesCtrl.$inject = ['$stateParams', '$cordovaContacts'];