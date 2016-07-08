angular.module('myApp').controller('DatabaseTestThingCtrl', function ($scope, $uibModalInstance, items, $http, $cookies,errorPrintingService) {

    $scope.items = items;
    $scope.selected = {
        item: $scope.items[0]
    };

    $scope.ok = function () {
        $uibModalInstance.close($scope.selected.item);
        $http({
            method: 'POST',
            url: 'http://localhost:9001/api/users/?token='+ $cookies.get('cool_token'),
            data: $scope.user
        }).success(function(response) {
            $scope.creation = "User was successfully created"
        }).error(function(error){
            $scope.errorData = errorPrintingService.error;
            alert($scope.errorData);
        });


    };

    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
});/**
 * Created by Ausra Faturova on 07/07/2016.
 */
