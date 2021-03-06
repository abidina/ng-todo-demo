app.controller("TodoCtrl", function($scope) {
  $scope.welcome = "hello";
  $scope.showListView = true;
  $scope.task= "";
  $scope.newTask = {};

  $scope.items= [
    {
      id: 0,
      task: "mow the lawn",
      isCompleted: true,
      dueDate: "12/5/17",
      assignedTo: "greg",
      location: "Zoe's house",
      urgency: "low",
      dependencies: ["sunshine, clippers, water, hat, headphones"]
    },
    {
      id: 1,
      task: "grade quizzes",
      isCompleted: false,
      dueDate: "12/5/15",
      assignedTo: "joe",
      location: "NSS",
      urgency: "high",
      dependencies: ["tissues, wifi, vodka"]
    },  
    {
      id: 2,
      task: "take a nap",
      isCompleted: false,
      dueDate: "5/21/16",
      assignedTo: "zoe",
      location: "Zoe's house",
      urgency: "medium",
      dependencies: ["hammock, cat, pillow, blanket"]
    }
  ];

  $scope.newItem = function() {
    $scope.showListView = false;
  };

  $scope.allItem = function() {
    $scope.showListView = true;
  };

  $scope.addNewItem = function(){
    $scope.newTask.isCompleted = false;
    $scope.newTask.id = $scope.items.length;
    $scope.items.push($scope.newTask);
    $scope.newTask = "";
  };
});