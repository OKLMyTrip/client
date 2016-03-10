/**
 * Created by A_Roques on 04/03/2016.
 */
(function() {
  'use strict';

  angular
    .module('oklmClient')
    .service('userService', userService);

  /** @ngInject */
  function userService() {

    var connectedUser = {};

    this.signupUser = _signupUser;
    this.getUserConnected = _getUserConnected;
    this.connectUser = _connectUser;

    function _getUserConnected(){
      return(connectedUser);
    }

    function _signupUser(user, cb) {
      //call server
      cb(null, user.firstName);
    }

    function _connectUser(user, cb){
      //call server
      cb(null, user.firstName);
    }
  }

})();
