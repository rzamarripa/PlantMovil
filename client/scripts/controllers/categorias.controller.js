
import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Categorias } from '../../../lib/collections';
 
export default class CategoriasCtrl extends Controller {
	constructor() {
		super(...arguments);
		this.helpers({
			categorias() {
				console.log(Categorias.find().fetch())
				return Categorias.find();
			}
		});
	}
}

CategoriasCtrl.$name = 'CategoriasCtrl';
CategoriasCtrl.$inject = ['$stateParams', '$timeout', '$ionicScrollDelegate', '$ionicPopup', '$log'];