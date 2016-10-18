

import { Directive } from 'angular-ecmascript/module-helpers';



export  class ValidPinDirective extends Directive{
	constructor(){
		super(...arguments);
		this.require ='ngModel';
	}
	link(scope, ele, attrs, c){
		scope.$watch(attrs.ngModel, function(pinValue) {
				// $http({
				// 	method: 'POST',
				// 	url: '/api/check/' + attrs.validPin,
				// 	data: {'pin': attrs.validPin}
				// }).success(function(data, status, headers, cfg) {
				// 	c.$setValidity('valid-pin', data.isValid);
				// }).error(function(data, status, headers, cfg) {
				// 	c.$setValidity('valid-pin', false);
				// });
				if(pinValue=="12345")
				{
					c.$setValidity('valid-pin', true);
				}
				else
				{
					c.$setValidity('valid-pin', false);
				}
			});
	}	
}


ValidPinDirective.$name = 'validPin';
