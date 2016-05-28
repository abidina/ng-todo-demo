"user strict";

app.controller("LoginCtrl", function($scope, $location, firebaseURL, AuthFactory) {
  let ref = new Firebase(firebaseURL);

  $scope.account = {
    email: "",
    password: ""
  }; // do this to make sure that on load everything is cleared out

  if($location.path() === "/logout") {
    ref.unauth();
  }


  $scope.register = () => {
    console.log("you clicked register");
    ref.createUser({
      email: $scope.account.email,
      password: $scope.account.password
    }, (error, userData) => {
      if(error) {
        console.log(`Error creating user: ${error}`);
      } else {
        console.log(`Created new user account with uid: ${userData.uid}`);
        $scope.login();
      }
    });
  };

  $scope.login = () => {
    console.log("you clicked login");
    AuthFactory
      .authenticate($scope.account)
      .then(() => {
        $location.path("/");
        $scope.$apply();
      });
  };

});