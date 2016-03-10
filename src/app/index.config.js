(function() {
  'use strict';

  angular
    .module('oklmClient')
    .config(config);

  /** @ngInject */
  function config($logProvider, toastrConfig, $translateProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    var translationsEN = {
      PROPOSE_TRIP_HEADER: 'Post a new trip',
      TRIP_ORIGIN: 'Trip start',
      TRIP_DESTINATION: 'Trip end',
      TRIP_VIZUALISATION: 'Visualize the trip',
      TRIP_HOUR: 'Hour',
      TRIP_MINUTES: 'Minutes',
      TRIP_PRICE: 'Trip price',
      TRIP_PLACES_LEFT: 'Places left',
      TRIP_POST: 'Post'
    };

    var translationsFR = {
      PROPOSE_TRIP_HEADER: 'Proposer un nouveau trajet',
      TRIP_ORIGIN: 'Début du trajet',
      TRIP_DESTINATION: 'Fin du trajet',
      TRIP_VIZUALISATION: 'Visualiser le trajet',
      TRIP_HOUR: 'Heure',
      TRIP_MINUTES: 'Minutes',
      TRIP_PRICE: 'Prix du trajet',
      TRIP_PLACES_LEFT: 'Places réstantes',
      TRIP_POST: 'Publier'
    };

    $translateProvider.translations('en', translationsEN);
    $translateProvider.translations('fr', translationsFR);
    $translateProvider.preferredLanguage('fr');
  }

})();
