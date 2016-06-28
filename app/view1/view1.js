'use strict';

angular.module('myApp.view1', ['ngRoute']).controller('View1Ctrl', ['$scope', function($scope) {
	
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