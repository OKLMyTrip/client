(function() {
  'use strict';

  angular
    .module('oklmClient')
    .controller('searchTripController', searchTripController);

  /** @ngInject */
  function searchTripController(searchTripService) {
    var vm = this;

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
      searchTripService.search(vm.searchData, function(err, res){
        vm.alertMessage = res;
      })
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
