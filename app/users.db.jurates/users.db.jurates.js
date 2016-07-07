angular.module('myApp.usersDB', ['ngRoute']).controller('usersDBCtrl', ['$scope', '$http', '$cookies', '$uibModal', '$log',
    function ($scope, $http, $cookies, $uibModal, $log) {
    $scope.user = {};

    $scope.showInput = false;

    // ------------------------------- GETing all users -----------------------------------
    $scope.actionGet = function () {
        $http.get('http://localhost:9001/api/users/?token=' + $cookies.get('login.token')).success(function (response) {
            $scope.allUsers = response;
            console.log($scope.allUsers);
        });
    };

    // -------------------------------- adding user ------------------------------
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

    //------------------------------- getting user by ID ------------------------------
    $scope.actionID = function () {
        $http.get('http://localhost:9001/api/users/' + $scope.user.id + '/?token=' + $cookies.get('login.token')).success(function (response) {
            $scope.userID = response;
            console.log($scope.userID);
        });
    };

    $scope.showHidden = function () {
        $scope.showInput = true;
    };

    $scope.allInOne = function () {
        $scope.actionID();
        $scope.showHidden();
    };

    //-------------------------------------- editing user ----------------------------------
    $scope.saveUser = function () {
        if (!$scope.token) {
            //error
        }
        $http({
            method: 'PUT',
            url: 'http://localhost:9001/api/users/' + $scope.user.id + '/?token=' + $cookies.get('login.token'),
            data: {
                name: $scope.userID.name,
                username: $scope.userID.username,
                password: $scope.userID.password,
                admin: $scope.userID.admin,
                location: $scope.userID.location
            }
        }).success(function (response) {
            $scope.save = response;
            console.log($scope.save);
        });
    };

    //---------------------------------------- deleting user --------------------------------------------
    $scope.deleteUser = function () {
        $http.delete('http://localhost:9001/api/users/' + $scope.user.id + '/?token=' + $cookies.get('login.token')).success(function (response) {
            $scope.deletedUser = response;
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
    $scope.items = ['item1', 'item2', 'item3'];

        $scope.showInfo = function () {

            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: 'users.db.jurates/modals/modals.users.db.html',
                controller: 'usersDBModal',
                size: 'sm',
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });
        };
    }]);

