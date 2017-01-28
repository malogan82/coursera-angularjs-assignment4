(function () {
  'use strict';
  angular.module('data')
  .controller('MenuDataController', MenuDataController);

  MenuDataController.$inject = ['categories'];

  function MenuDataController(categories){
    var controller = this;
    controller.categories = categories;
  }
})();
