/**
 * Created by A_Roques on 04/03/2016.
 */
(function () {
  'use strict';

  angular
    .module('oklmClient')
    .service('userService', userService);

  /** @ngInject */
  function userService($http) {

    var connectedUser = null;


    this.getAll = _getAll;
    this.signupUser = _signupUser;
    this.getUserConnected = _getUserConnected;
    this.connectUser = _connectUser;
    this.disconnectUser = _disconnectUser;


    function _getAll(cb) {
      $http.get('/api/user/all').then(function (list) {
        cb(null, list.data);
      }, function (error) {
        cb(error);
      });
    }

    function _disconnectUser(cb) {
      connectedUser = null;
      cb(true);
    }

    function _getUserConnected(cb){
      if(cb){
        if(connectedUser !== null){
          cb(connectedUser);
        }else{
          cb(null);
        }
      }else{
        return connectedUser;
      }
    }

    function _signupUser(user, cb) {
      //call server
      // cb(null, user.firstName);


      user.inscriptionDate = moment().format();


      $http.post('/api/user/sign-up', user).then(function (connected) {

        connectedUser = connected;
        cb(null, connected);
      }, function (error) {
        if (error.status == 403)
          cb(error.status);
        else  cb(error);
      });


    }

    function _connectUser(user, cb) {
      //call server
      connectedUser = {
        email: user.mail,
        password: user.pwd
      };

      $http.post('/api/user/log-in', connectedUser).then(function (connected) {

        connectedUser = connected;
        cb(null, connected);
      }, function (error) {
        if (error.status == 403)
          cb(error.status);
        else  cb(error);
      });

      // cb(null, connectedUser);
    }
  }

})();
