
import { Directive } from 'angular-ecmascript/module-helpers';

export  class ShowHideContainerDirective extends Directive{
	constructor(){
		super(...arguments);
		this.restrict = 'A';
		this.transclude = true;
		this.replace= false;
		this.scope = {};
		this.templateUrl = 'client/templates/common/show-hide-password.html';
	}
	controller($scope){
		$scope.show = false;
		$scope.toggleType = function($event){
			$event.stopPropagation();
			$event.preventDefault();

			$scope.show = !$scope.show;

			// Emit event
			$scope.$broadcast("toggle-type", $scope.show);
		};
	}	
}

ShowHideContainerDirective.$name = 'showHideContainer';
ShowHideContainerDirective.$inject = ['$scope'];
