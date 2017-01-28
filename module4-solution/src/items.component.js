(function () {
'use strict';

  angular.module('data')
  .component('items', {
    templateUrl: 'src/templates/itemList.template.html',
    bindings: {
      items: '<'
    }
  });

})();
