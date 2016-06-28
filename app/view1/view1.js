'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
	
	$scope.test = 'kasjdh asdjkhas dkajsdh askd';
	
	$scope.obj = {
		date: new Date(),
		number: 0.11111,
		names: [
			'Jonas',
			'Petras',
			'Ona'
		]
	}
	
}]);