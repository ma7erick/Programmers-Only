var app = angular.module('viewHtml', []);

app.factory('userFactory', function($scope, $http) {

});

app.controller('myCtrl', function($scope, $http, $location) {
    $scope.test = 'Hello world!';
  console.log("in controller");
  $scope.goToAccount = function() {
    console.log("in app.js goToAccount function");
    window.location = ('/user');
    /*$http.get("/user")
      .success(function(data) {
	console.log(data);
      })
      .error(function() {
	console.log("ERROR");
      })*/
  }  
 
});
