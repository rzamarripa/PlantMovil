import Ionic from 'ionic-scripts';
import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Controller } from 'angular-ecmascript/module-helpers';
import { Acuerdos } from '../../../lib/collections';
 
export default class HomeCtrl extends Controller {
	constructor($scope,$stateParams,$ionicPopup) {
		super(...arguments);
		this.helpers({
			acuerdos() {
				console.log(Acuerdos.find().fetch())
				return Acuerdos.find();
			},
			acuerdosVencidos() {
				console.log(Acuerdos.find({fecha : {$lt : new Date() }}).count())
				return Acuerdos.find({fecha : {$lt : new Date() }}).count();
			},
			acuerdosHoy() {
				var hoy = new Date;
				var fechaInicio = (hoy.getMonth()+1) + "/" + hoy.getDate() + "/" +  hoy.getFullYear();
				var fechaFin = (hoy.getMonth()+1) + "/" + hoy.getDate()  + "/" +  hoy.getFullYear() + " " + "23:59:59";
				console.log(fechaInicio, fechaFin);
				return Acuerdos.find({fecha : { $gte: new Date(fechaInicio), $lt : new Date(fechaFin) }}).count();
			},
			acuerdosSemana() {
				var hoy = new Date;
				var inicio = hoy.getDate() - hoy.getDay(); // First day is the day of the month - the day of the week
				var fin = inicio + 6; // last day is the first day + 6
				
				var primerDia = new Date(hoy.setDate(inicio));
				var ultimoDia = new Date(hoy.setDate(fin));
				
				var fechaInicio = (primerDia.getMonth()+1) + "/" + primerDia.getDate() + "/" +  primerDia.getFullYear();
				var fechaFin = (ultimoDia.getMonth()+1) + "/" + ultimoDia.getDate()  + "/" +  ultimoDia.getFullYear() + " " + "23:59:59";
				
				return Acuerdos.find({fecha : { $gte: new Date(fechaInicio), $lt : new Date(fechaFin) }}).count();
			},
			acuerdosMes() {
				var hoy = new Date;
				var y = hoy.getFullYear(), m = hoy.getMonth();
				var primerDia = new Date(y, m, 1);
				var ultimoDia = new Date(y, m + 1, 0);
				
				var fechaInicio = (primerDia.getMonth()+1) + "/" + primerDia.getDate() + "/" +  primerDia.getFullYear();
				var fechaFin = (ultimoDia.getMonth()+1) + "/" + ultimoDia.getDate()  + "/" +  ultimoDia.getFullYear() + " " + "23:59:59";
				
				return Acuerdos.find({fecha : { $gte: new Date(fechaInicio), $lt : new Date(fechaFin) }}).count();
			},
			acuerdosFuturos() {
				var hoy = new Date;
				var y = hoy.getFullYear(), m = hoy.getMonth();
				return Acuerdos.find({fecha : { $gt: new Date(y,m + 1, 0)}}).count();
			}
			
		});
	}
	
	doRefresh(){
		alert("hola");
	}
}

HomeCtrl.$name = 'HomeCtrl';
HomeCtrl.$inject = ['$stateParams', '$ionicPopup'];