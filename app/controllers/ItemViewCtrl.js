app.controller("ItemViewCtrl", function($scope, $routeParams, itemStorage) {
  $scope.selectedItem = {};

  itemStorage.getSelectedItem($routeParams.itemId).then(function(response) {
    $scope.selectedItem = response;
  });
  
});