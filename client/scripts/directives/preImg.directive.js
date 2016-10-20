import { Directive } from 'angular-ecmascript/module-helpers';

export  class PreImgDirective extends Directive{
	constructor(){
		super(...arguments);
		this.restrict = 'E';
		this.scope= {
			ratio:'@',
			helperClass: '@'
		};
		this.transclude = true;
		this.templateUrl = 'client/templates/common/pre-img.html';
	}
	controller($scope) {
		$scope.loaded = false;
		this.hideSpinner = function(){
			// Think i have to use apply because this function is not called from this controller ($scope)
			$scope.$apply(function () {
				$scope.loaded = true;
			});
		};
	}
	link(){}
}

PreImgDirective.$name = 'preImg';
//PreImgDirective.$inject = ['$scope'];

