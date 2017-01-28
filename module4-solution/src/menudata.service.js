(function () {
  'use strict';
  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http','ApiBasePath'];

  function MenuDataService($http,ApiBasePath){
    var service = this;
    service.getAllCategories = function(){
      var response = $http({
         method: "GET",
         url: (ApiBasePath + "/categories.json"),
      });
      return response.then(function(result){
                              var categories = result.data;
                              return categories;
                           });
    };
    service.getItemsForCategory = function(category){
      var response = $http({
         method: "GET",
         url: (ApiBasePath + "/menu_items.json?category=" + category),
      });
      return response.then(function(result){
                              var items = result.data.menu_items;
                              return items;
                           });
    };
  };
})();
