'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope', function($scope) {
	$scope.randomThing = "This will be a cookie clicker game"
	$scope.cookieAmount = 0;
	$scope.cookieIncrement = function()
	{
		$scope.cookieAmount =+ 1;
		return $scope.cookieAmount;
	};
	}]);