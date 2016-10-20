import { Directive } from 'angular-ecmascript/module-helpers';

export  class PostContentDirective extends Directive{
	constructor(){
		super(...arguments);
		this.restrict = 'A';
		this.scope= {};
	}
	link(scope, element, attrs) {
		function ytVidId(url) {
			var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11,})(?:\S+)?$/gmi;
			return (url.match(p)) ? RegExp.$1 : false;
		}
		$timeout(function(){
			var iframes = element.find('iframe');
			if(iframes.length > 0)
			{
				angular.forEach(iframes, function(i) {
					var iframe = angular.element(i),
					youtube_video_id = ((iframe.length > 0) && (!_.isUndefined(iframe[0].src))) ? ytVidId(iframe[0].src) : false;
					if(youtube_video_id !== false)
					{
						// Then it's a youtube video, compile our custom directive
						var ionic_yt_video = $compile("<ionic-youtube-video video-id='"+youtube_video_id+"'></ionic-youtube-video>")(scope);
						iframe.parent().append(ionic_yt_video);
						iframe.remove();
					}
				});
			}
		}, 10);
	}	
}

PostContentDirective.$name = 'postContent';
PostContentDirective.$inject = ['$timeout','_','$compile'];


