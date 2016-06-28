'use strict';

angular.module('myApp.view3', ['ngRoute']).controller('View3Ctrl', ['$scope', '$rootScope', 'myService', function ($scope, $rootScope, myService) {

    $scope.addToRootScope = function () {
        $rootScope.data = $scope.myData;
    };

    $scope.serviceData1 = myService.myObject.data1;
    $scope.serviceData2 = myService.myObject.data2;

    $scope.addToService = function () {
        myService.myObject.data1 = $scope.serviceData1;
        myService.myObject.data2 = $scope.serviceData2;
    };

}]);