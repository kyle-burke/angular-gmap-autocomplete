(function() {
  'use strict';
  angular
    .module('autocomplete-example', [
      'uiGmapgoogle-maps',
      'google.autocomplete'
    ])
    .config(Config)
    .controller('ExampleController', ExampleController);

  Config.$inject = ['uiGmapGoogleMapApiProvider'];

  function Config(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: '<your google maps api key goes here>',
      libraries: 'geometry,places'
    });
  };

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