var myApp = angular.module("myApp",["firebase"]);
myApp.controller("tasksController", ["$scope", "$firebaseArray", "$location",
function($scope, $firebaseArray, $location) {
  console.log("in tasksController");
  var tasksRef = firebase.database().ref().child("tasks");
  $scope.tasks = $firebaseArray(tasksRef);
  var usersRef = firebase.database().ref().child("users");
  $scope.users = $firebaseArray(usersRef);
  
  $scope.goToAccount = function() {
    console.log("in app.js goToAccount function");
    window.location = ('/user');
  }
 
  $scope.update = function(user) {
    console.log("updating new user");  
    var newuser = {imageURL:user.photoURL,name:user.displayName,points:0};
    console.log(newuser);
    $scope.users.$add(newuser);
  }

}
]);
