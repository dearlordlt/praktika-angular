'use strict';

angular.module('myApp.usersDB').controller('usersDBModal', ['$scope', 'items', '$uibModalInstance', '$http', '$cookies',
    function ($scope, items, $uibModalInstance, $http, $cookies) {

        $scope.items = items;

        $scope.ok = function () {
            $uibModalInstance.close();
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };


        $scope.actionPost = function () {
            console.log($scope.user);
            $http({
                method: 'POST',
                url: 'http://localhost:9001/api/users/?token=' + $cookies.get('login.token'),
                data: $scope.user
            }).success(function (response) {
                $scope.addedUser = response;
                console.log($scope.addedUser);
            }).error(function (error) {
                alert(error);
            });

        };

        $scope.saveUser = function () {
         /*   if (!$scope.token) {
                //error
            }*/
            $http({
                method: 'PUT',
                url: 'http://localhost:9001/api/users/' + $scope.items.id + '/?token=' + $cookies.get('login.token'),
                data: {
                    name: $scope.items.name,
                    username: $scope.items.username,
                    password: $scope.items.password,
                    admin: $scope.items.admin,
                    location: $scope.items.location
                }
            }).success(function (response) {
                $scope.save = response;
                console.log($scope.save);
            });
        };

        $scope.deleteUser = function () {
            $http.delete('http://localhost:9001/api/users/' + $scope.items.id + '/?token=' + $cookies.get('login.token')).success(function (response) {
                $scope.deletedUser = response;
            });
        };


    }]);