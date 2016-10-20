import { Directive } from 'angular-ecmascript/module-helpers';

export  class SpinnerOnLoadDirective extends Directive{
	constructor(){
		super(...arguments);
		this.restrict = 'A';
		this.require = '^preImg';
		this.scope= {
			ngSrc: '@'
		};
	}
	link(scope, element, attr, preImgController) {
		element.on('load', function() {
			preImgController.hideSpinner();
		});
	}
}

SpinnerOnLoadDirective.$name = 'spinnerOnLoad';



