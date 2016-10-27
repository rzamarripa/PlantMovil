import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Acuerdos } from '../../../lib/collections';
import { Categorias } from '../../../lib/collections';

export default class NuevoAcuerdoCtrl extends Controller {
	constructor($scope, $stateParams, $ionicHistory) {
		super(...arguments);
		
		this.acuerdoId = $stateParams.acuerdoId;
		this.acuerdo = Acuerdos.findOne(this.acuerdoId)
		this.$ionicHistory = $ionicHistory;
		this.helpers({
			categorias() {
				return Categorias.find();
			}
		});
	}

	save(){
		console.log(this.acuerdoId);
		if(this.acuerdoId){
			delete this.acuerdo._id
			Acuerdos.update({_id:this.acuerdoId},{$set:this.acuerdo});
		}
		else
			Acuerdos.insert(this.acuerdo);
		this.$ionicHistory.goBack();
		
	}
}

NuevoAcuerdoCtrl.$name = 'NuevoAcuerdoCtrl';
NuevoAcuerdoCtrl.$inject = ['$stateParams','$ionicHistory'];