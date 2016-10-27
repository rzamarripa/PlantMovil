
import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Categorias } from '../../../lib/collections';
 
export default class CategoriasCtrl extends Controller {
	constructor($scope, $stateParams, $ionicPopup) {
		super(...arguments);
		this.shouldShowDelete = false;
		this.shouldShowReorder = false;
		this.listCanSwipe = true;
		this.helpers({
			categorias() {
				console.log(Categorias.find().fetch())
				return Categorias.find();
			}
		});
	}
	
	eliminar(categoria){
		var confirmPopup = $ionicPopup.confirm({
			title: categoria.nombre,
			template: 'Estás seguro que quiere eliminarla?'
		});
		
		confirmPopup.then(function(res) {
			if(res) {
				Categorias.update(categoria_id, { $set : {estatus : false}});		
			}
		});
		
	}
}

CategoriasCtrl.$name = 'CategoriasCtrl';
CategoriasCtrl.$inject = ['$stateParams', '$ionicPopup'];