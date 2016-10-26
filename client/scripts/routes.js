import { Config } from 'angular-ecmascript/module-helpers';
 
export default class RoutesConfig extends Config {
  configure() {
    this.$stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'client/templates/layout.html'
      })
      .state('app.reuniones', {
        url: '/reuniones',
        views: {
          'menuContent': {
            templateUrl: 'client/templates/reuniones.html',
            controller: 'ReunionesCtrl as r'
          }
        }
      });
 
    this.$urlRouterProvider.otherwise('app/reuniones');
  }
}
 
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];