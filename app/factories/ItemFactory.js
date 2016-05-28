app.factory("itemStorage", function($q, $http, firebaseURL) { //$q is ng's promise library, $http bc it's the calls to firebase

  var getItemList = function() {
    var items = [];
    return $q(function (resolve, reject) {
      $http.get(firebaseURL + 'items.json') // <-- http.get vs. $.ajax(method:GET); works bc this is being called from index.html (so you don't have to move out of any folders)
        .success(function(itemObject) {
          var itemCollection = itemObject;
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

var deleteItem = function(itemId){
        return $q(function(resolve, reject){
            $http
                .delete(firebaseURL + "items/" + itemId + ".json")
                .success(function(objectFromFirebase){
                    resolve(objectFromFirebase);
                });
        });
    };

var postNewItem = function(newItem){
    return $q(function(resolve, reject) {
        $http.post(
            firebaseURL + "items.json",
            JSON.stringify({
                assignedTo: newItem.assignedTo,
                dependencies: newItem.dependencies,
                dueDate: newItem.dueDate,
                isCompleted: newItem.isCompleted,
                location: newItem.location,
                task: newItem.task,
                urgency: newItem.urgency
            })
        )
        .success(
            function(objectFromFirebase) {
                resolve(objectFromFirebase);
            }
        );
    });
};

var getSingleItem = function(itemId){
    return $q(function(resolve, reject){
        $http.get(firebaseURL + "items/"+ itemId +".json")
            .success(function(itemObject){
                resolve(itemObject);
            })
            .error(function(error){
                reject(error);
            });
    });
};

var updateItem = function(itemId, newItem){
    return $q(function(resolve, reject) {
        $http.put(
            firebaseURL + "items/" + itemId + ".json",
            JSON.stringify({
                assignedTo: newItem.assignedTo,
                dependencies: newItem.dependencies,
                dueDate: newItem.dueDate,
                isCompleted: newItem.isCompleted,
                location: newItem.location,
                task: newItem.task,
                urgency: newItem.urgency
            })
        )
        .success(
            function(objectFromFirebase) {
                resolve(objectFromFirebase);
            }
        );
    });
};



return {updateItem:updateItem, getSingleItem:getSingleItem, getItemList:getItemList, deleteItem:deleteItem, postNewItem:postNewItem};

});