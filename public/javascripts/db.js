var myApp = angular.module("myApp",["firebase"]);
myApp.controller("tasksController", function($scope, $firebaseArray) {
  console.log("in tasksController");
  var tasksRef = firebase.database().ref().child("achievements");
  console.log(tasksRef);
  $scope.tasks = $firebaseArray(tasksRef);
  console.log($scope.tasks);
  var usersRef = firebase.database().ref().child("users");
  $scope.users = $firebaseArray(usersRef);
  
 
  $scope.update = function(user) {
     var newuser = {imageURL:user.image,name:user.name,points:0};
      console.log(newuser);
      $scope.users.$add(newuser);
      user.chat = "";
  }

});
