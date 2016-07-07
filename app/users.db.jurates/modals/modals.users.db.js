'use strict';

angular.module('myApp.usersDB').controller('usersDBModal',['$scope', 'items', '$uibModalInstance',
    function ($scope, items, $uibModalInstance) {

    $scope.items = items;

    $scope.ok = function () {
        $uibModalInstance.close();
    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };

}]);