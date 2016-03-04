(function() {
  'use strict';

  angular
    .module('oklmClient')
    .controller('SignupController', SignupController);

  /** @ngInject */
  function SignupController(userService) {
    var vm = this;

    vm.user = {
      firstName : "",
      lastName : "",
      address : "",
      city : "",
      postalCode : ""
    };

    vm.newUser = _addUser();

    function _addUser(){
      userService.signupUser(vm.user, function(err, res){
        if(err){
          //$log("error in signup");
          alert("error");
        }else{
          //$log(res.firstName + "added !");
          alert(res);
        }
      })
    }
  }
})();
