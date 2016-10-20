import { Filter } from 'angular-ecmascript/module-helpers';

export class ParseDateFilter extends Filter{
	filter(value){
		return Date.parse(value);
	}
}

ParseDateFilter.$name = 'parseDate';
