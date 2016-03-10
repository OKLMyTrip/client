/**
 * Created by A_Roques on 04/03/2016.
 */
(function() {
  'use strict';

  angular
    .module('oklmClient')
    .service('searchTripService', searchTripService);

  /** @ngInject */
  function searchTripService() {

    this.search = _search;

    function _search(trip, cb){
      //call server
      cb(null, trip);
    }
  }

})();
