(function() {
  'use strict';

  angular
    .module('oklmClient')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('propose-trip', {
        url: '/propose-trip',
        templateUrl: 'app/propose-trip/propose-trip.html',
        controller: 'ProposeTripController',
        controllerAs: 'vm'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
