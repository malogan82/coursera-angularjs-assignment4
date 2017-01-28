(function () {
'use strict';

angular.module('data')
.component('categories', {
  templateUrl: 'src/templates/categoryList.template.html',
  bindings: {
    categories: '<'
  }
});

})();
