import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Reuniones } from '../../../lib/collections';
 
export default class NuevaReunionCtrl extends Controller {
	constructor($scope,$stateParams,$ionicHistory) {
		super(...arguments);
		console.log($stateParams,$ionicHistory);
		this.reunionId = $stateParams.reunionId
		this.reunion = Reuniones.findOne(this.reunionId)
		this.$ionicHistory = $ionicHistory;
		this.helpers({
			
		});
	}

	save(){
		console.log(this.reunionId);
		if(this.reunionId){
			delete this.reunion._id
			Reuniones.update({_id:this.reunionId},{$set:this.reunion});
		}
		else
			Reuniones.insert(this.reunion);
		this.$ionicHistory.goBack();
		
	}
}

NuevaReunionCtrl.$name = 'NuevaReunionCtrl';
NuevaReunionCtrl.$inject = ['$stateParams','$ionicHistory'];