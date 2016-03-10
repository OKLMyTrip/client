(function () {
  'use strict';

  angular
    .module('oklmClient')
    .controller('ProposeTripController', ProposeTripController);

  /** @ngInject */
  function ProposeTripController(uiGmapGoogleMapApi, uiGmapIsReady, $http, userService) {
    var vm = this;

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    vm.trip = {};
    vm.successPropose = false;


    uiGmapGoogleMapApi.then(function (maps) {
      vm.map = {center: {latitude: 43.600000, longitude: 1.433333}, zoom: 13};


      uiGmapIsReady.promise(1).then(function (instances) {
        instances.forEach(function (inst) {
          var map = inst.map;
          directionsDisplay.setMap(inst.map);
        });
      });


      vm.maps = maps;
    });

    vm.hours = _getHours();
    vm.minutes = _getMinutes();

    function _init() {

    }


    //Method
    vm.seeTrip = _seeTrip;
    vm.purposeTrip = _purposeTrip;


    function _purposeTrip() {

      //Convert date
      var date = moment(vm.trip.dateDeparture).add(vm.trip.hoursDeparture, "h").add(vm.trip.minutesDeparture, "m");
      date = date.unix() * 1000;
      vm.trip.date = date;

      vm.trip.dateDeparture = vm.trip.dateDeparture.toString();

      _seeTrip(function (result) {
        vm.trip.googleMapEngine = result;

        vm.trip.user = userService.getUserConnected();


        console.log(vm.trip);

        $http.post('/api/trip/create', vm.trip).then(function (success) {
          console.log(success);

          vm.successPropose = "Le trajet à bien été crée";
        }, function (errpr) {
          alert('Erreur pour la proposition de trajet');
        });
      });

      //Make request to direction google api
      // $http.get("https://maps.googleapis.com/maps/api/directions/json?origin=" + vm.trip.origin + "&destination=" + vm.trip.destination)
      //   .then(function (response) {
      //
      //
      //   }, function (error) {
      //     alert(error);
      //   });


      //https://maps.googleapis.com/maps/api/directions/json?origin=Toulouee&destination=paris

      return true;

    }


    function _seeTrip(cb) {

      var request = {
        origin: vm.trip.origin,
        destination: vm.trip.destination,
        travelMode: google.maps.TravelMode.DRIVING
      };
      directionsService.route(request, function (result, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsDisplay.setDirections(result);

          vm.durationTime = result.routes[0].legs[0].duration.text;
          if (cb)
            cb(result);
        } else {
          window.alert('Directions request failed due to ' + status);
        }
      });

    }

    function _getHours() {
      var hours = [];

      for (var i = 1; i < 25; i++) {
        hours.push(i);
      }

      return hours;
    }

    function _getMinutes() {
      var hours = [];

      for (var i = 0; i <= 50; i += 10) {
        hours.push(i);
      }

      return hours;
    }


    _init();


  }
})();
