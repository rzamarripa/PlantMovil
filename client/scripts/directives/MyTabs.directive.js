
import { Directive } from 'angular-ecmascript/module-helpers';

export  class MyTabsDirective extends Directive{
	constructor(){
		super(...arguments);
		this.restrict = 'E';
		this.transclude = true;
		this.scope = {};
		this.templateUrl = 'client/templates/common/my-tabs.html';
	}
	controller($scope){
		var tabs = $scope.tabs =[]
		$scope.select = function(tab) {
				angular.forEach(tabs, function(tab) {
					tab.selected = false;
				});
				tab.selected = true;
				$scope.$emit('my-tabs-changed', tab);
			};
		this.addTab = function(tab) {
				if (tabs.length === 0) {
					$scope.select(tab);
				}
				tabs.push(tab);
			};
	}	
}

MyTabsDirective.$name = 'myTabs';
MyTabsDirective.$inject = ['$scope'];

export  class MyTabDirective extends Directive{
	constructor(){
		super(...arguments);
		this.require ='^myTabs',
		this.restrict = 'E';
		this.transclude = true;
		this.scope = { title: '@'};
		this.templateUrl = 'client/templates/common/my-tab.html';
	}
	link(scope,element,attrs,tabsCtrl){
		tabsCtrl.addTab(scope);
	}	
}


MyTabDirective.$name = 'myTab';