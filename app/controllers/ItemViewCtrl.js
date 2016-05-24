app.controller("ItemViewCtrl", function($scope, $http, $routeParams) {
  $scope.items=[];
  $scope.selectedItem = {};
  console.log($routeParams.itemId);

  $http.get(''/* 'put the firebase url here' + $routeParams.itemId + '.json'*/)
      .success(function(itemObject) {
        var itemCollection = itemObject.items;
        Object.keys(itemCollection).forEach(function(key) { // <-- returns an array of all keys in the object; by putting (key) in parentheses, you store it
          itemCollection[key].id=key;
          $scope.items.push(itemCollection[key]); //<-- this grabs the item you're looping through and gives it an id & pushes it into an array
          
          $scope.selectedItem=$scope.items.filter(function(item) { //filters out the one that's equal to the url you've clicked
            return item.id ===$routeParams.itemId;
          })[0] //to get first item in array

        });
      });


});