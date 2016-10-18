// Libs
import 'angular-animate';
import 'angular-meteor';
import 'angular-sanitize';
import 'angular-ui-router';
import 'ionic-scripts';
import Angular from 'angular';
import Loader from 'angular-ecmascript/module-loader';
import ChatsCtrl from '../controllers/chats.controller';
import { Meteor } from 'meteor/meteor';
 
// Modules
import RoutesConfig from '../routes';

//Directives
import {MyTabsDirective, MyTabDirective} from '../directives/MyTabs.directive';
import {ValidPinDirective} from '../directives/ValidPin.directive';
 
const App = 'MasoftTemplate';
 
// App
Angular.module(App, [
	'angular-meteor',
	'ionic'
]);
 
new Loader(App)
	.load(ChatsCtrl)
	.load(MyTabsDirective)
	.load(MyTabDirective)
	.load(ValidPinDirective)
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