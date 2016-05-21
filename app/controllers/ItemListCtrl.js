app.controller("ItemListCtrl", function($scope) {

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
});