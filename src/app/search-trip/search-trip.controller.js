(function() {
  'use strict';

  angular
    .module('oklmClient')
    .controller('searchTripController', searchTripController);

  /** @ngInject */
  function searchTripController(searchTripService) {
    var vm = this;

    vm.trips = [];

    vm.searchData = {
      beginCity : "",
      endCity : "",
      date : new Date(),
      time : {}
    };

    vm.alertMessage = "";

    vm.selectHours = _getHours();
    vm.selectMinutes = _getMinutes();

    vm.search = function(){
      /*searchTripService.search(vm.searchData, function(err, trips){
        if(err){
          console.log(err);
        }else{
          vm.trips = trips;
        }
      })*/

      vm.trips = [
        {
          dateDeparture : new Date(),
          hoursDeparture : "20:03",
          origin : "DAUX",
          destination : "TOULOUSE",
          price : 10.50,
          placesLeft : 3,
          user : {
            firstName : "Celine",
            lastName : "DUPUIS",
            old : 28,
            rate : 4
          }
        },
        {
          dateDeparture : new Date(),
          hoursDeparture : "10:20",
          origin : "PARIS",
          destination : "MONTPELLIER",
          price : 20,
          placesLeft : 2,
          user : {
            firstName : "Marc",
            lastName : "AGRILOT"
          }
        }
      ]
    };


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



    /*vm.newUser = function(){
      userService.signupUser(vm.user, function(err, res){
        if(err){
          //$log("error in signup");
          vm.alertMessage = "Error :" + err;
          alert("error");
        }else{
          //$log(res.firstName + "added !");
          /!*alert(res);*!/
          vm.alertMessage = "Votre inscription à été prise en compte " + res;
           $state.transitionTo('home', {arg: res});
        }
      })
    };*/

  }
})();
