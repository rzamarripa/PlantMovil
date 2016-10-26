import { Controller } from 'angular-ecmascript/module-helpers';
 
export default class ReunionesCtrl extends Controller {
	this.reuniones = [
		{
			nombre : "Mi primera reunion",
			descripcion : "Mi primera descripción",
			fecha : new Date(),
		}
	]
}