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
      beginHour : ""
    };

    vm.alertMessage = "";

    vm.search = function(){
      searchTripService.search(vm.searchData, function(err, res){
        vm.alertMessage = res;
      })
    };



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
