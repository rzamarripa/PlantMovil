
import { Directive } from 'angular-ecmascript/module-helpers';

export  class BiggerTextDirective extends Directive{
	constructor(){
		super(...arguments);
		this.restrict = 'A';
	}
	link(scope, element, attrs){
		$ionicGesture.on('touch', function(event){
			event.stopPropagation();
			event.preventDefault();

			var text_element = document.querySelector(attrs.biggerText),
				root_element = document.querySelector(".menu-content"),
				current_size_str = window.getComputedStyle(text_element, null).getPropertyValue('font-size'),
				current_size = parseFloat(current_size_str),
				new_size = Math.min((current_size+2), 24),
				new_size_str = new_size + 'px';

			root_element.classList.remove("post-size-"+current_size_str);
			root_element.classList.add("post-size-"+new_size_str);
		}, element);
	}	
}

BiggerTextDirective.$name = 'biggerText';
BiggerTextDirective.$inject = ['$ionicGesture'];

export  class SmallerTextDirective extends Directive{
	constructor(){
		super(...arguments);
		this.restrict = 'A';
	}
	link(scope, element, attrs){
		$ionicGesture.on('touch', function(event){
			event.stopPropagation();
			event.preventDefault();

			var text_element = document.querySelector(attrs.smallerText),
				root_element = document.querySelector(".menu-content"),
				current_size_str = window.getComputedStyle(text_element, null).getPropertyValue('font-size'),
				current_size = parseFloat(current_size_str),
				new_size = Math.max((current_size-2), 12),
				new_size_str = new_size + 'px';
			root_element.classList.remove("post-size-"+current_size_str);
			root_element.classList.add("post-size-"+new_size_str);
		}, element);
	}	
}

SmallerTextDirective.$name = 'smallerText';
SmallerTextDirective.$inject = ['$ionicGesture'];




