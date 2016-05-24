app.factory("itemStorage", function($q, $http) { //$q is ng's promise library, $http bc it's the calls to firebase
  var items = [];

  var getItemList = function() {
    return $q(function (resolve, reject) {
      $http.get("./data/items.json") // <-- http.get vs. $.ajax(method:GET); works bc this is being called from index.html (so you don't have to move out of any folders)
        .success(function(itemObject) {
          var itemCollection = itemObject.items;
          Object.keys(itemCollection).forEach(function(key) { // <-- returns an array of all keys in the object; by putting (key) in parentheses, you store it
            itemCollection[key].id=key;
            items.push(itemCollection[key]); //<-- this grabs the item you're looping through and gives it an id & pushes it into an array
          });
          resolve(items);
        })
        .error(function(error) {
          reject(error);
        });
     
    });
  };

  return {getItemList:getItemList};

});