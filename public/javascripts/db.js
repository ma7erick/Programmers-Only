var myApp = angular.module("myApp",["firebase"]);
myApp.controller("tasksController", ["$scope", "$firebaseArray", "$location",
function($scope, $firebaseArray, $location) {
  console.log("in tasksController");
  var tasksRef = firebase.database().ref().child("tasks");
  $scope.tasks = $firebaseArray(tasksRef);
  var usersRef = firebase.database().ref().child("users");
  $scope.users = $firebaseArray(usersRef);
  var isduplicate = false;
  
  $scope.goToAccount = function() {
    console.log("in app.js goToAccount function");
    window.location = ('/user');
  }
  
  $scope.goToHome = function() {
    console.log("in app.js goToHome function");
    window.location = ('/');
  }
  
  $scope.getUser = function(user) {
    console.log("in get user function");
    //$scope.currentUser = user;
    //console.log($scope.currentUser);
    var userArray = $firebaseArray(usersRef);
    userArray.$loaded()
      .then(function() {
        angular.forEach(userArray, function(thisuser) {
          //console.log(thisuser.userID, user.uid);
          if (thisuser.userID == user.uid) {
            $scope.currentUser = thisuser;
	    console.log($scope.currentUser);
          }
          console.log(user);
        })
      });
  }

  $scope.checkChanged = function(task) {
	console.log("check changed - " + task.completed);
	if(task.completed){
          $scope.currentUser.points = $scope.currentUser.points + task.points;
        }
	else{
	  $scope.currentUser.points = $scope.currentUser.points - task.points;
	}   
			
	$scope.currentUser.ref().update({"ponits": $scope.currentUser.points});
  }


  $scope.update = function(user) {
    console.log("updating new user: " + user);  
    //$scope.currentUser = user;
    //console.log($scope.currentUser);
    var i = 0;
    console.log($scope.users);
    //console.log($scope.users[$add]);
    var userArray = $firebaseArray(usersRef);
    userArray.$loaded()
      .then(function() {
        angular.forEach(userArray, function(thisuser) {
          console.log(thisuser.userID, user.uid);
	  if (thisuser.userID == user.uid) {
	    console.log("is duplicate before: " + isduplicate);
	    isduplicate = true;
	    console.log("is duplicate after: " + isduplicate);
	    window.location = ('/user');
	  }
	  console.log(user);
        })
        if(!isduplicate) {
          var email = user.email;
          var username = email.substr(0, email.indexOf('@'));
          var newuser = {imageURL: user.photoURL, points:0, username:username, userID:user.uid, tasks:$scope.tasks};
          console.log(newuser);
          $scope.users.$add(newuser);
        };
      });
    //search(userArray, user);
    console.log(userArray);
    console.log("isduplicate: " + isduplicate);
    /*if(!isduplicate) {
      var email = user.email;
      var username = email.substr(0, email.indexOf('@'));
      var newuser = {imageURL: user.photoURL, points:0, username:username, userID:user.uid};
      console.log(newuser);
      $scope.users.$add(newuser);
    } else {
      window.location = ('/user');
    }*/  
}

}
]);
