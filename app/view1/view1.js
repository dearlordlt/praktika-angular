'use strict';

angular.module('myApp.view1', ['ngRoute']).controller('View1Ctrl', ['$scope', '$rootScope', 'myService', '$http', function ($scope, $rootScope, myService, $http) {

    $scope.dataFromCtrl3 = $rootScope.data;

    $scope.userList = false;

    $http.get('http://localhost:8000/db/db.json').success(function (response) {
        $scope.userList = response;
    });

}]);