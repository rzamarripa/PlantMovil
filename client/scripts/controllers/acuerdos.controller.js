
import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Acuerdos } from '../../../lib/collections';
import { Categorias } from '../../../lib/collections';
 
export default class AcuerdosCtrl extends Controller {
	constructor($scope,$stateParams,$ionicPopup) {
		super(...arguments);
		this.shouldShowDelete = false;
		this.shouldShowReorder = false;
		this.listCanSwipe = true;
		this.helpers({
			acuerdos() {
				var acuerdos = Acuerdos.find().fetch();
				if(acuerdos != undefined)
				_.each(acuerdos, function(acuerdo){
					acuerdo.categoria = Categorias.findOne(acuerdo.categoria_id);
				})
				return acuerdos;
			},
			categorias() {
				return Categorias.find({estatus : true});
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

AcuerdosCtrl.$name = 'AcuerdosCtrl';
AcuerdosCtrl.$inject = ['$stateParams','$ionicPopup'];