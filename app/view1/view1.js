'use strict';

angular.module('myApp.view1', []).controller('View1Ctrl', ['$scope', '$rootScope', 'myService', '$http', '$uibModal', function ($scope, $rootScope, myService, $http, $uibModal) {

    $scope.dataFromCtrl3 = $rootScope.data;

    $scope.userList = false;

    $http.get('http://localhost:8080/db/db.json').success(function (response) {
        $scope.userList = response;
    });


    $scope.showInfo = function (index) {
        $scope.items = $scope.userList.users[index];
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'view1/modals/view1.modal.tmpl.html',
            controller: 'view1ModalController',
            size: 'sm',
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        });
    }

}]);