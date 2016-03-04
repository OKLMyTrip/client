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

    this.signupUser = _signupUser;

    function _signupUser(user, cb) {
      //call server
      cb(null, user.firstName);
    }
  }

})();
