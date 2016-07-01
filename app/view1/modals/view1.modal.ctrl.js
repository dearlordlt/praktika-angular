'use strict';

angular.module('myApp.view1').controller('view1ModalController',
    ['$scope', 'items', '$uibModalInstance', function ($scope, items, $uibModalInstance) {
        $scope.items = items;

        $scope.ok = function () {
            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
}]);