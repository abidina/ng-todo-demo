app.controller("ItemListCtrl", function($scope, $http) {
  $scope.items= [];

  $http.get("./data/items.json") // <-- http.get vs. $.ajax(method:GET); works bc this is being called from index.html (so you don't have to move out of any folders)
    .success(function(itemObject) {
      var itemCollection = itemObject.items;

      Object.keys(itemCollection).forEach(function(key) { // <-- returns an array of all keys in the object; by putting (key) in parentheses, you store it
        itemCollection[key].id=key;
        $scope.items.push(itemCollection[key]); //<-- this grabs the item you're looping through and gives it an id & pushes it into an array
      });
      

    });

});