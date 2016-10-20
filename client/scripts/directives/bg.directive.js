import { Directive } from 'angular-ecmascript/module-helpers';

export  class MultiBgDirective extends Directive{
	constructor(){
		super(...arguments);
		this.restrict = 'A';
		this.scope = {
			multiBg: '=',
			interval: '=',
			helperClass: '@'
		};
		this.replace = false;
		this.transclude = true;
		this.templateUrl = 'client/templates/common/multi-bg.html';
	}
	controller($scope, $element, $attrs) {
		$scope.loaded = false;
		var utils = this;

		this.animateBg = function(){
			// Think i have to use apply because this function is not called from this controller ($scope)
			$scope.$apply(function () {
				$scope.loaded = true;
				$element.css({'background-image': 'url(' + $scope.bg_img + ')'});
			});
		};

		this.setBackground = function(bg) {
			$scope.bg_img = bg;
		};
		if(!_.isUndefined($scope.multiBg))
		{
			if(_.isArray($scope.multiBg) && ($scope.multiBg.length > 1) && !_.isUndefined($scope.interval) && _.isNumber($scope.interval))
			{
				// Then we need to loop through the bg images
				utils.setBackground($scope.multiBg[0]);
			}
			else
			{
				// Then just set the multiBg image as background image
				utils.setBackground($scope.multiBg[0]);
			}
		}
	}	
}

MultiBgDirective.$name = 'multiBg';



export  class BgDirective extends Directive{
	constructor(){
		super(...arguments);
		this.restrict = 'A';
		this.require = '^multiBg',
		this.scope= {ngSrc: '@'};
	}
	link(scope, element, attr, multiBgController) {
		element.on('load', function() {
			multiBgController.animateBg();
		});
	}	
}

BgDirective.$name = 'bg';


