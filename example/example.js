(function() {
  'use strict';
  angular
    .module('autocomplete-example', [
      'uiGmapgoogle-maps',
      'google.autocomplete'
    ])
    .controller('ExampleController', ExampleController);

    ExampleController.$inject = [];
    /* @ngInject */
    function ExampleController() {
      var vm = this;

      vm.callback = callback;

      function callback() {
        // do something with vm.autocomplete
        console.log(vm.autocomplete);
      }
    }
})();