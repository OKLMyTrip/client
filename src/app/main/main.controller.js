(function () {
  'use strict';

  angular
    .module('oklmClient')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController(userService) {
    var vm = this;

    init();

    var allAvis = [
      "Trop cool",
      "Tu gères",
      "Superbe voyage",
      "Super agréable",
      "Bon voyage avec toi",
      "J'aime ta bonne humeur"
    ];

    function init() {
      _getAllUsers();
    }

    function _getAllUsers() {
      userService.getAll(function (err, users) {

        users.map(function (user) {
          user.note = Math.floor(Math.random() * 5) + 2; 


          var test = Math.floor(Math.random() * 6) + 0;

          user.avis = allAvis[test];
        });

        vm.users = users;
      });

      // commentService.getComs(function(data){
      //   vm.homeComments = data;
      // });
    }

  }
})();
