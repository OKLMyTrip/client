(function() {
  'use strict';

  angular
    .module('oklmClient')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(commentService, $mdSidenav, userService) {
    var vm = this;

    init();

    vm.openSignup = function(){
      $mdSidenav('signupnav').toggle();
    };

    vm.openSignin = function(){
      $mdSidenav('signinnav').toggle();
    };

    function init() {
      _getComments();
    }

    function _getComments() {
      commentService.getComs(function(data){
        vm.homeComments = data;
      });
    }


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


    /* connection desction*/

    vm.connectUser = {
      mail : "",
      pwd : ""
    };

    vm.alertMessage = "";

    vm.closeConnection = function () {
      $mdSidenav('signinnav').close()
        .then(function () {
          //$log.debug("close RIGHT is done");
        });
    };

    vm.connectUser = function(){
      userService.connectUser(vm.user, function(err, res){
        if(err){
          //$log("error in signup");
          //vm.alertMessage = "Error :" + err;
          alert("error");
        }else{
          //$log(res.firstName + "added !");
          /*alert(res);*/
          vm.alertMessage = "Bonjour " + res;
          //$state.transitionTo('home', {arg: res});
          vm.closeConnection();
        }
      })
    };

  }
})();
