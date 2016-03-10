/**
 * Created by A_Roques on 04/03/2016.
 */
(function() {
  'use strict';

  angular
    .module('oklmClient')
    .service('searchTripService', searchTripService);

  /** @ngInject */
  function searchTripService($http) {

    this.search = _search;

    var geocoder = new google.maps.Geocoder();

    function _search(tripToSearch, cb){
      var trip = {};
      var date = moment(tripToSearch.date).add(tripToSearch.time.hour, "h").add(tripToSearch.time.minute, "m");
      trip.date = date.unix() * 1000;
      trip.precision = 2.0;


      _seeTrip(tripToSearch.beginCity, function(data){
        trip.originLocation = data;
        _seeTrip(tripToSearch.endCity, function(data){
          trip.destinationLocation = data;

          $http.post('/api/trip/find', trip).then(function (trips) {
            cb(null, trips);
          }, function (error) {
            cb(error);
          });
        });
      });
    }

    function _seeTrip(value, cb) {

      geocoder.geocode( { 'address': value}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          var res = {
            results : results,
            status : status
          };

          cb(res);
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });
    }
  }

})();
