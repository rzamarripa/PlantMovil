import { Directive } from 'angular-ecmascript/module-helpers';

export  class IonicYoutubeVideoDirective extends Directive{
	constructor(){
		super(...arguments);
		this.restrict = 'E';
		this.scope= {
			videoId: '@'
		};
		this.replace = false;
		this.templateUrl = 'client/templates/common/ionic-youtube-video.html';
	}
	controller($scope, $element, $attrs) {
		$scope.playerVars = {
			rel: 0,
			showinfo: 0
		};
		$ionicPlatform.on("pause", function(){
			var yt_ready = youtubeEmbedUtils.ready;
			if(yt_ready)
			{
				$scope.yt_video.stopVideo();
			}
		});
	}	
	link(){}
}

IonicYoutubeVideoDirective.$name = 'ionicYoutubeVideo';
IonicYoutubeVideoDirective.$inject = ['$timeout','$ionicPlatform','youtubeEmbedUtils'];
