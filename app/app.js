var app = angular.module("TodoApp", ["ngRoute"]);

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
    when('/items/:itemId', { // (won't work until firebase fixed) : tells angular that something will fill in there
      templateUrl:'partials/item-details.html',
      controller:'ItemViewCtrl'
    }).
    otherwise('/items/list');
});
