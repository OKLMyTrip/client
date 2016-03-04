(function() {
  'use strict';

  angular
    .module('oklmClient')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, commentService) {
    var vm = this;

    init();

    function init() {
      _getComments();
    }

    function _getComments() {
      commentService.getComs(function(data){
        vm.homeComments = data;
      });
    }
  }
})();
