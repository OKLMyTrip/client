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
    function NavbarController() {
      var vm = this;

      // "vm.creation" is avaible by directive option "bindToController: true"
      vm.nothing = "toto";
    }
  }

})();
