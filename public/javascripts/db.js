var myApp = angular.module("myApp",["firebase"]);
myApp.controller("tasksController", ["$scope", "$firebaseArray",
function($scope, $firebaseArray) {
  var tasksRef = firebase.database().ref().child("achievements");
  $scope.tasks = $firebaseArray(tasksRef);

  var usersRef = firebase.database().ref().child("users");
  $scope.users = $firebaseArray(usersRef);
  

 
  $scope.update = function(user) {
     var newuser = {imageURL:user.image,name:user.name,points:0};
      console.log(newuser);
      $scope.users.$add(newuser);
      user.chat = "";
  }
}
]);
