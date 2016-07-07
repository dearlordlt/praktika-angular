'use strict';

angular.module('myApp.view1', []).controller('View1Ctrl', ['$scope', '$rootScope', 'myService', '$http', '$uibModal', '$cookies',
    function ($scope, $rootScope, myService, $http, $uibModal, $cookies) {

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
        };

        $scope.token = "lkasdjkldsajlkdsajkldsajkldsklajkdjlasjkldsakl";

        var addTokenToCookie = function(token) {
            var expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + 1);

            if (!$cookies.get('praktika_token')) {
                $cookies.put('praktika_token', token, {
                    expires: expireDate
                });
            }
        }

    }]);