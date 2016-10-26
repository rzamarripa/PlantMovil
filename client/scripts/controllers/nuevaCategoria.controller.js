import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Categorias } from '../../../lib/collections';
 
export default class NuevaCategoriaCtrl extends Controller {
	constructor($scope,$stateParams,$ionicHistory) {
		super(...arguments);
		console.log($stateParams,$ionicHistory);
		this.cateogriaId = $stateParams.categoriaId
		this.categoria = Categorias.findOne(this.categoriaId)
		this.$ionicHistory = $ionicHistory;
		this.helpers({
			
		});
	}

	save(){
		if(this.categoriaId){
			delete this.categoria._id
			Categorias.update({_id:this.categoriaId},{$set:this.categoria});
		}
		else
			Categorias.insert(this.categoria);
		this.$ionicHistory.goBack();
		
	}
}

NuevaCategoriaCtrl.$name = 'NuevaCategoriaCtrl';
NuevaCategoriaCtrl.$inject = ['$stateParams','$ionicHistory'];