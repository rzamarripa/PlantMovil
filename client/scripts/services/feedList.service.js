import { Service } from 'angular-ecmascript/module-helpers';
 
export class FeedListService extends Service {
	get(feedSourceUrl){
		var response = $q.defer();
		//num is the number of results to pull form the source
		FeedLoader.fetch({q: feedSourceUrl, num: 20}, {}, function (data){
			response.resolve(data.responseData);
		});
		return response.promise;
	}
}

FeedListService.$name = 'FeedList';
FeedListService.$inject = ['$rootScope', 'FeedLoader', '$q'];