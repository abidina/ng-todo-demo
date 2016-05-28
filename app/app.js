var app = angular.module("TodoApp", ["ngRoute"])
  .constant("firebaseURL", "https://ng-todo-list16.firebaseio.com/");

app.config(function($routeProvider) {
  $routeProvider.
    when('/items/list', {
      templateUrl:'partials/item-list.html',
      controller:'ItemListCtrl'
    }).
    when('/items/new', {
      templateUrl:'partials/item-new.html',
      controller:'ItemNewCtrl'
    }).
    when('/items/:itemId', { // tells angular that something will fill in there
      templateUrl:'partials/item-details.html',
      controller:'ItemViewCtrl'
    }).
    when('/items/:itemId/edit', { // tells angular that something will fill in there
      templateUrl:'partials/item-new.html',
      controller:'ItemEditCtrl'
    }).
    otherwise('/items/list');
});
