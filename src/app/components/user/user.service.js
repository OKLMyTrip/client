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

    var connectedUser = null;

    this.signupUser = _signupUser;
    this.getUserConnected = _getUserConnected;
    this.connectUser = _connectUser;
    this.disconnectUser = _disconnectUser;

    function _disconnectUser(cb){
      connectedUser = null;
      cb(true);
    }

    function _getUserConnected(cb){
      if(connectedUser !== null){
        cb(connectedUser);
      }else{
        cb(null);
      }
    }

    function _signupUser(user, cb) {
      //call server
      cb(null, user.firstName);
    }

    function _connectUser(user, cb){
      //call server
      connectedUser = {
        firstName : user.mail,
        lastName : user.pwd
      };

      cb(null, connectedUser);
    }
  }

})();
