import { Directive } from 'angular-ecmascript/module-helpers';

export  class ShowHideInputDirective extends Directive{
	constructor(){
		super(...arguments);
		this.require = '^showHideContainer';
		this.restrict = 'A';
		this.replace = false;
		this.transclude = false;
		this.scope = {};
		
	}
	link(scope, element, attrs){
		scope.$on("toggle-type", function(event, show){
			var password_input = element[0],
					input_type = password_input.getAttribute('type');
			if(!show)
			{
				password_input.setAttribute('type', 'password');
			}
			if(show)
			{
				password_input.setAttribute('type', 'text');
			}
		});
	}	
}

ShowHideInputDirective.$name = 'showHideInput';


