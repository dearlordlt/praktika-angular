'use strict';

angular.module('myApp.view1', ['ngRoute']).controller('View1Ctrl', ['$scope', '$rootScope', 'myService', '$http', function ($scope, $rootScope, myService, $http) {

    $scope.test = 'kasjdh asdjkhas dkajsdh askd';

    $scope.data1 = myService.myObject;
    $scope.data2 = myService.myObject2;
    $scope.data3 = myService.myObject3;

    console.log(myService.getDataCount(500));

    myService.addNewProperty('data3', 5000);

    $scope.dataFromCtrl3 = $rootScope.data;

    $scope.userList = false;

   $http.get('http://localhost:8000/db/db.json').success(function (response) {
       $scope.userList = response;
    });

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