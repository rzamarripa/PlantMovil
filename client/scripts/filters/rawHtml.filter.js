import { Filter } from 'angular-ecmascript/module-helpers';

export class RawHtmlFilter extends Filter{
	filter(value){
		return $sce.trustAsHtml(val);
	}
}


RawHtmlFilter.$name = 'rawHtml';
RawHtmlFilter.$inject = ['$sce'];
