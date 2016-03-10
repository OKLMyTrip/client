(function() {
  'use strict';

  angular
    .module('oklmClient')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {

      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(userService, $mdSidenav) {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.connectedUser = null;


      _init();

      function _init(){
        userService.getUserConnected(function(user){
          if(user !== null){
            vm.connectedUser = {};
            vm.connectedUser.firstName = user.firstName;
            vm.connectedUser.lastName = user.lastName;
          }
        })
      }



      vm.disconnect = function(){
        userService.disconnectUser(function(res){
          if(res === true){
            vm.connectedUser = null;
          }
        });
      };

      vm.openSignup = function(){
        $mdSidenav('signupnav').toggle();
      };

      vm.openSignin = function(){
        $mdSidenav('signinnav').toggle();
      };


      /* connection desction*/

      vm.connectUser = {
        mail : "",
        pwd : ""
      };

      vm.closeConnection = function () {
        $mdSidenav('signinnav').close()
          .then(function () {
            //$log.debug("close RIGHT is done");
          });
      };

      vm.connectUser = function(){
        userService.connectUser(vm.connectUser, function(err, user){
          if(err){
            //$log("error in signup");
            //vm.alertMessage = "Error :" + err;
            alert("error");
          }else{
            //$log(res.firstName + "added !");
            /*alert(res);*/
            vm.connectedUser = {};
            vm.connectedUser.firstName = user.firstName;
            vm.connectedUser.lastName = user.lastName;
            //$state.transitionTo('home', {arg: res});
            vm.closeConnection();
          }
        })
      };


      /* signup section */
      vm.user = {
        firstName : "",
        lastName : "",
        address : "",
        city : "",
        postalCode : ""
      };

      vm.alertMessage = "";

      vm.close = function () {
        $mdSidenav('signupnav').close()
          .then(function () {
            //$log.debug("close RIGHT is done");
          });
      };

      vm.newUser = function(){
        userService.signupUser(vm.user, function(err, res){
          if(err){
            //$log("error in signup");
            //vm.alertMessage = "Error :" + err;
            alert("error");
          }else{
            //$log(res.firstName + "added !");
            /*alert(res);*/
            vm.alertMessage = "Votre inscription à été prise en compte " + res;
            //$state.transitionTo('home', {arg: res});
            vm.close();
          }
        })
      };

    }
  }

})();
