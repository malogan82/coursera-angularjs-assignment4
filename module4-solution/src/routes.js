(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('home', {
                   url: '/',
                   templateUrl: 'src/templates/home.template.html'
                 })
  .state('categoryList', {
                   url: '/category-list',
                   templateUrl: 'src/templates/main-categoryList.template.html',
                   controller: 'MenuDataController as menuData',
                   resolve: {
                     categories: ['MenuDataService', function (MenuDataService) {
                       return MenuDataService.getAllCategories();
                     }]
                   }
                 })
  .state('categoryList.itemsList', {
                   url: '/item-list/{category}',
                   templateUrl: 'src/templates/main-itemList.template.html',
                   controller: "ItemListController as itemList",
                   resolve: {
                     items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.category);
                     }]
                   }
                 });


}

})();
