app.controller("ItemNewCtrl", function($scope, $http, $location, itemStorage) {
  $scope.title = "New Item";
  $scope.submitButtonText = "Add New Item";

  $scope.newTask = {
    assignedTo:"",
    dependencies:"",
    dueDate:"",
    isCompleted:false,
    location:"",
    task:"", 
    urgency:"", 
  };



  $scope.addNewItem = function(){
    itemStorage.postNewItem($scope.newTask)
      .then(function successCallback(response) {
        $location.url("/items/list");
      });
  };

});