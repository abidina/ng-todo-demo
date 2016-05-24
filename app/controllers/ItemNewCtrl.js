app.controller("ItemNewCtrl", function($scope, $http, $location) {
  
  $scope.newTask = {
    assignedTo:"",
    dependencies:"",
    dueDate:"",
    isCompleted:false,
    location:"",
    task:"", 
    urgency:""
  };



  $scope.addNewItem = function(){
    $http.post(""/* firebase object url here */,
    JSON.stringify({
    assignedTo:$scope.newTask.assignedTo,
    dependencies:$scope.newTask.dependencies,
    dueDate:$scope.newTask.dueDate,
    isCompleted:$scope.newTask.isCompleted,
    location:$scope.newTask.location,
    task:$scope.newTask.task, 
    urgency:$scope.newTask.urgency
    }) /*the above ensures that we accurately grab each key*/
    )
    .success(function(response){
      console.log(response);
      $location.url("/items/list");
    });
  };

});