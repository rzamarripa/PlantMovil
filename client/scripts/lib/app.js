// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-resource';
import 'angular-ui-router';
import 'ionic-scripts';
import 'ngMap';
import 'ng-cordova';
import 'angular-youtube-embed';
import 'wb-angular-slugify';

import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import ChatsCtrl from '../controllers/chats.controller';
import { Meteor } from 'meteor/meteor';
 
// Modules
import RoutesConfig from '../routes';

//Directives
import {MyTabsDirective, MyTabDirective} from '../directives/MyTabs.directive';
import {ValidPinDirective} from '../directives/ValidPin.directive';
import {ShowHideInputDirective} from '../directives/showHideInput.directive';
import {BiggerTextDirective, SmallerTextDirective} from '../directives/text.directive';
import {IonicYoutubeVideoDirective} from '../directives/ionicYoutubeVideo.directive';
import {PostContentDirective} from '../directives/postContent.directive';
import {DynamicAnchorFixDirective} from '../directives/dynamicAnchorFix.directive';
import {MultiBgDirective, BgDirective} from '../directives/bg.directive';
import {PreImgDirective} from '../directives/preImg.directive';
import {SpinnerOnLoadDirective} from '../directives/spinnerOnLoad.directive';

//Filters
import {ParseDateFilter} from '../filters/parseDate.filter';
import {RawHtmlFilter} from '../filters/rawHtml.filter';

//services
import {BookMarkService} from '../services/bookMark.service';
import {FeedListService} from '../services/feedList.service';
import {PostService} from '../services/post.service';
import {PushNotificationsService} from '../services/pushNotification.service';

//factories
import {AdMobFactory} from '../factories/adMob.factory';
import {FeedLoaderFactory} from '../factories/feedLoader.factory';
import {IAdFactory} from '../factories/iAd.factory';
import {NodePushServerFactory} from '../factories/nodePushServer.factory';


 
const App = 'MasoftTemplate';
 
// App
Angular.module(App, [
	'angular-meteor',
	'ngMap',
	'ngResource',
	'ngCordova',
	'slugifier',
	//'ionic.contrib.ui.tinderCards',
	'youtube-embed',
	'ionic'
]);
 
new Loader(App)
	.load(ChatsCtrl)
	.load(MyTabsDirective)
	.load(MyTabDirective)
	.load(ValidPinDirective)
	.load(ShowHideInputDirective)
	.load(BiggerTextDirective)
	.load(SmallerTextDirective)
	.load(IonicYoutubeVideoDirective)
	.load(PostContentDirective)
	.load(DynamicAnchorFixDirective)
	.load(MultiBgDirective)
	.load(BgDirective)
	.load(PreImgDirective)
	.load(SpinnerOnLoadDirective)
	.load(ParseDateFilter)
	.load(RawHtmlFilter)
	.load(BookMarkService)
	.load(FeedListService)
	.load(PostService)
	.load(PushNotificationsService)
	.load(AdMobFactory)
	.load(FeedLoaderFactory)
	.load(IAdFactory)
	.load(NodePushServerFactory)
	.load(RoutesConfig);

// Startup
if (Meteor.isCordova) {
  Angular.element(document).on('deviceready', onReady);
}
else {
  Angular.element(document).ready(onReady);
}
 
function onReady() {
  Angular.bootstrap(document, [App]);
}