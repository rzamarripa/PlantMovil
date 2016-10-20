import { Factory } from 'angular-ecmascript/module-helpers';
 
export class FeedLoaderFactory extends Factory {
	create($resource){
		return $resource('https://ajax.googleapis.com/ajax/services/feed/load', {}, {
				fetch: { method: 'JSONP', params: {v: '1.0', callback: 'JSON_CALLBACK'} }
			});
	}
}

FeedLoaderFactory.$name='FeedLoader';