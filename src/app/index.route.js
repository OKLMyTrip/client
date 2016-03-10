(function () {
  'use strict';

  angular
    .module('oklmClient')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider, uiGmapGoogleMapApiProvider) {


    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyCTeolNv4D76MVwDaDFwa_4MeQEgw3dCrc',
      libraries: 'weather,geometry,visualization'
    });


    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('search-trip', {
        url: '/search-trip',
        templateUrl: 'app/search-trip/search-trip.html',
        controller: 'searchTripController',
        controllerAs: 'vm'
    });

    $urlRouterProvider.otherwise('/');
  }

})();
