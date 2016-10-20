import { Directive } from 'angular-ecmascript/module-helpers';

export  class DynamicAnchorFixDirective extends Directive{
	constructor(){
		super(...arguments);
		this.restrict = 'A';
		this.scope= {};
		this.replace = false;
		this.transclude = false;
	}
	link(scope, element, attrs) {
		$timeout(function(){
			var anchors = element.find('a');
			if(anchors.length > 0)
			{
				angular.forEach(anchors, function(a) {
					var anchor = angular.element(a);
					anchor.bind('click', function (event) {
						event.preventDefault();
						event.stopPropagation();
						var href = event.currentTarget.href;
						var	options = {};
						//inAppBrowser see documentation here: http://ngcordova.com/docs/plugins/inAppBrowser/
						$cordovaInAppBrowser.open(href, '_blank', options)
							.then(function(e) {
								// success
							})
							.catch(function(e) {
								// error
							});
					});
				});
			}
		}, 10);
	}	
}

DynamicAnchorFixDirective.$name = 'dynamicAnchorFix';
DynamicAnchorFixDirective.$inject = ['$ionicGesture','$timeout','$cordovaInAppBrowser'];

