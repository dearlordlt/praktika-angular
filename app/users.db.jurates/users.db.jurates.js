angular.module('myApp.usersDB', ['ngRoute']).controller('usersDBCtrl', ['$scope', '$http', '$cookies', '$uibModal', '$log',
    function ($scope, $http, $cookies, $uibModal, $log) {
        $scope.user = {};

        $scope.showInput = false;

        // ------------------------------- GETing all users -----------------------------------
        $scope.actionGet = function () {
            $http.get('http://localhost:9001/api/users/?token=' + $cookies.get('login.token')).success(function (response) {
                $scope.allUsers = response;
                console.log($scope.allUsers);
                $scope.actionGetModal();
            });

            $scope.actionGetModal = function () {
                $scope.items = $scope.allUsers;
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: 'users.db.jurates/modals/modals.users.db.html',
                    controller: 'usersDBModal',
                    size: 'lg',
                    resolve: {
                        items: function () {
                            return $scope.items;
                        }
                    }
                });
            };
        };


        // -------------------------------- adding user ------------------------------

        $scope.actionPostModal = function () {

            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'users.db.jurates/modals/modals.users.db2.html',
                controller: 'usersDBModal',
                size: 'sm',
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });
        };


        //------------------------------- getting user by ID ------------------------------
        $scope.actionID = function () {
            $http.get('http://localhost:9001/api/users/' + $scope.user.id + '/?token=' + $cookies.get('login.token')).success(function (response) {
                $scope.userID = response;
                console.log($scope.userID);
                $scope.actionIDModal();
            });

        };

        $scope.actionIDModal = function () {
            $scope.items = $scope.userID;
            $scope.items.id = $scope.user.id;
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'users.db.jurates/modals/modals.users.db3.html',
                controller: 'usersDBModal',
                size: 'lg',
                resolve: {
                    items: function () {
                        return $scope.items;



                    }
                }
            });
        };




        //--------------------------------------- alerts ---------------------------------------------
        $scope.alerts = {
            successfulAuthentication: {
                type: 'success',
                msg: 'Authentication successful! Please continue'
            },
            failedAuthentication: {
                type: 'danger',
                msg: 'Authentication failed. Please try again'
            }
        };

        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };


        //------------------------------------- modals -----------------------------------------


    }]);
