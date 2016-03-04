/**
 * Created by A_Roques on 04/03/2016.
 */
(function() {
  'use strict';

  angular
    .module('oklmClient')
    .service('commentService', commentService);

  /** @ngInject */
  function commentService() {
    var data = [
      {
        lastName : "toto",
        firstName : "ttititiit",
        note : 4,
        avis : "Cooooooooool"
      },
      {
        lastName : "tatata",
        firstName : "rririri",
        note : 1,
        avis : "Pas  Cooooooooool"
      }
    ];

    this.getComs = _getComs;

    function _getComs(cb) {
      cb(data);
    }
  }

})();
