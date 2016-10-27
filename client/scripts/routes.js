import { Config } from 'angular-ecmascript/module-helpers';
 
export default class RoutesConfig extends Config {
  configure() {
    this.$stateProvider
      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'client/templates/layout.html'
      })
      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'client/templates/home/home.html',
            controller: 'HomeCtrl'
          }
        }
      })
      .state('app.reuniones', {
        url: '/reuniones',
        views: {
          'menuContent': {
            templateUrl: 'client/templates/reuniones/reuniones.html',
            controller: 'ReunionesCtrl as rc'
          }
        }
      })
      .state('app.nuevaReunion', {
        url: '/reunionNueva',
        views: {
          'menuContent': {
            templateUrl: 'client/templates/reuniones/form.html',
            controller: 'NuevaReunionCtrl as nrc'
          }
        }
      })
      .state('app.editarReunion', {
        url: '/editarReunion/:reunionId',
        views: {
          'menuContent': {
            templateUrl: 'client/templates/reuniones/form.html',
            controller: 'NuevaReunionCtrl as nrc'
          }
        }
      })
      .state('app.acuerdos', {
        url: '/acuerdos',
        views: {
          'menuContent': {
            templateUrl: 'client/templates/acuerdos/acuerdos.html',
            controller: 'AcuerdosCtrl as ac'
          }
        }
      })
      .state('app.nuevoAcuerdo', {
        url: '/acuerdoNuevo',
        views: {
          'menuContent': {
            templateUrl: 'client/templates/acuerdos/form.html',
            controller: 'NuevoAcuerdoCtrl as nac'
          }
        }
      })
      .state('app.agenda', {
        url: '/agenda',
        views: {
          'menuContent': {
            templateUrl: 'client/templates/agenda/agenda.html',
            controller: 'AgendaCtrl'
          }
        }
      })
      .state('app.categorias', {
        url: '/categorias',
        views: {
          'menuContent': {
            templateUrl: 'client/templates/categorias/categorias.html',
            controller: 'CategoriasCtrl as cc'
          }
        }
      })
      .state('app.nuevaCategoria', {
        url: '/categoriaNueva',
        views: {
          'menuContent': {
            templateUrl: 'client/templates/categorias/form.html',
            controller: 'NuevaCategoriaCtrl as ncc'
          }
        }
      })
      .state('app.editarCategoria', {
        url: '/editarCategoria/:categoriaId',
        views: {
          'menuContent': {
            templateUrl: 'client/templates/categorias/form.html',
            controller: 'NuevaCategoriaCtrl as ncc'
          }
        }
      });
 
    this.$urlRouterProvider.otherwise('app/home');
  }
}
 
RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];