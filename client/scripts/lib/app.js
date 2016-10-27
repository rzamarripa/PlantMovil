// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-resource';
import 'angular-ui-router';
import 'ionic-scripts';
import 'ngmap';
import 'ng-cordova';
import 'angular-youtube-embed';
import 'wb-angular-slugify';

import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';

import { Meteor } from 'meteor/meteor';


//Controllers
import HomeCtrl from '../controllers/home.controller';
import ReunionesCtrl from '../controllers/reuniones.controller';
import NuevaReunionCtrl from '../controllers/nuevaReunion.controller';
import AcuerdosCtrl from '../controllers/acuerdos.controller';
import NuevoAcuerdoCtrl from '../controllers/nuevoAcuerdo.controller';
import AgendaCtrl from '../controllers/agenda.controller';
import CategoriasCtrl from '../controllers/categorias.controller';
import NuevaCategoriaCtrl from '../controllers/nuevaCategoria.controller';
import PerfilCtrl from '../controllers/perfil.controller';

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

//Services
import {BookMarkService} from '../services/bookMark.service';
import {FeedListService} from '../services/feedList.service';
import {PostService} from '../services/post.service';
import {PushNotificationsService} from '../services/pushNotification.service';

//Factories
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
])
.constant('WORDPRESS_API_URL', 'https://wordpress.startapplabs.com/blog/api/')
.constant('GCM_SENDER_ID', '574597432927')
.run(function(PushNotificationsService, $rootScope, $ionicConfig, $timeout) {
		if (Meteor.isCordova) 
		Angular.element(document).on("deviceready", function(){
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if(window.StatusBar) {
				StatusBar.styleDefault();
			}

			//PushNotificationsService.register();
			
		});
		if (!Meteor.isCordova) 
		Angular.element(document).ready( function(){
			// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
			// for form inputs)
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if(window.StatusBar) {
				StatusBar.styleDefault();
			}

			//PushNotificationsService.register();
			
		});

		// This fixes transitions for transparent background views
		$rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
			if(toState.name.indexOf('auth.walkthrough') > -1)
			{
				// set transitions to android to avoid weird visual effect in the walkthrough transitions
				$timeout(function(){
					$ionicConfig.views.transition('android');
					$ionicConfig.views.swipeBackEnabled(false);
					console.log("setting transition to android and disabling swipe back");
				}, 0);
			}
		});
		$rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams){
			if(toState.name.indexOf('app.feeds-categories') > -1)
			{
				// Restore platform default transition. We are just hardcoding android transitions to auth views.
				$ionicConfig.views.transition('platform');
				// If it's ios, then enable swipe back again
				if(ionic.Platform.isIOS())
				{
					$ionicConfig.views.swipeBackEnabled(true);
				}
				console.log("enabling swipe back and restoring transition to platform default", $ionicConfig.views.transition());
			}
		});

		Angular.element(document).on("resume", function(){
			PushNotificationsService.register();
		});

	});
 
new Loader(App)
	.load(HomeCtrl)
	.load(PerfilCtrl)
	.load(ReunionesCtrl)
	.load(AcuerdosCtrl)
	.load(NuevaReunionCtrl)
	.load(NuevoAcuerdoCtrl)
	.load(AgendaCtrl)
	.load(CategoriasCtrl)
	.load(NuevaCategoriaCtrl)
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
	.load(RoutesConfig)


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