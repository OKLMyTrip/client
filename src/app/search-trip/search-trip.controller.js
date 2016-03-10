(function() {
  'use strict';

  angular
    .module('oklmClient')
    .controller('SignupController', SignupController);

  /** @ngInject */
  function SignupController(userService, $state, $mdSidenav) {
    var vm = this;

    vm.user = {
      firstName : "",
      lastName : "",
      address : "",
      city : "",
      postalCode : ""
    };

    vm.alertMessage = "";

    vm.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          //$log.debug("close RIGHT is done");
        });
    };

    vm.newUser = function(){
      userService.signupUser(vm.user, function(err, res){
        if(err){
          //$log("error in signup");
          vm.alertMessage = "Error :" + err;
          alert("error");
        }else{
          //$log(res.firstName + "added !");
          /*alert(res);*/
          vm.alertMessage = "Votre inscription à été prise en compte " + res;
           $state.transitionTo('home', {arg: res});
        }
      })
    };

  }
})();
