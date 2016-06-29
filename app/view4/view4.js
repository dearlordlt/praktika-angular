'use strict';

angular.module('myApp.view4', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view4', {
    templateUrl: 'view4/view4.html',
    controller: 'View4Ctrl'
  });
}])

.controller('View4Ctrl', ['$scope','$interval',function($scope,$interval) {
	$scope.randomThing = "This will be a cookie clicker game"
	$scope.cookieAmount = 0;
	$scope.cookieIncrement = function()
	{
		$scope.cookieAmount += 1;
		return $scope.cookieAmount;
	};
	//~~~~~~~~~~~~~~~~~~~~~self adding cookies~~~~~~~~~~~~~~~~~~~
	$scope.cookieAdder = function()
	{
		add = $interval(function()
		{
			$scope.cookieAmount += 1;
			return $scope.cookieAmount;
		}
		,1000);
		
	};
	$scope.cookieAdder100 = function()
	{
		add = $interval(function()
		{
			$scope.cookieAmount +=100;
			return $scope.cookieAmount;
		},1000)
	};
	
	//~~~~~~~~~~~~~~~~Condition checkers---------------------
	$scope.condition1=false;
	$scope.condition2=false;
	$scope.condition = function()
	{
	if ($scope.cookieAmount>5)
	{
		$scope.condition1 = true;
		return $scope.condition1;
	}
	};
	$scope.condition100 = function()
	{
		if($scope.cookieAmount>30)
		{
			$scope.condition2=true;
			return $scope.condition2;
		}
	};
	
	}]);
	
	/*$scope.timer =setInterval($scope.cookieAdder(), 1000);
	$scope.cookieAdder = function()
	{
		$scope.cookieAmount += 1;
	};
	
	$scope.a = "yes";
	}]);*/