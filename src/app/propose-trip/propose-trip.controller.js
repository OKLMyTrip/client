(function () {
  'use strict';

  angular
    .module('oklmClient')
    .controller('ProposeTripController', ProposeTripController);

  /** @ngInject */
  function ProposeTripController(uiGmapGoogleMapApi) {
    var vm = this;

    vm.trip = {};


    uiGmapGoogleMapApi.then(function (maps) {
      vm.map = {center: {latitude: 45, longitude: -73}, zoom: 8};
    });

    vm.hours = _getHours();
    vm.minutes = _getMinutes();

    function _init() {

    }


    //Method
    vm.seeTrip = _seeTrip;


    function _seeTrip() {

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
