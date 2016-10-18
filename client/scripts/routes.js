import { Config } from 'angular-ecmascript/module-helpers';
 
export default class RoutesConfig extends Config {
  configure() {
    this.$stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'client/templates/layout.html'
      })
      .state('app.chats', {
        url: '/chats',
        views: {
          'menuContent': {
            templateUrl: 'client/templates/chats.html'
          }
        }
      });
 
    this.$urlRouterProvider.otherwise('app/chats');
  }
}
 
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];