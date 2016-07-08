angular.module('myApp.login.jurates', ['ngRoute']).controller('loginJuratesCtrl', ['$scope', '$http', '$cookies', '$location', 'alertsService',
    function ($scope, $http, $cookies, $location, alertsService) {

        $scope.failureAlert = alertsService.alerts.failedAuthentication.type;
        $scope.failureAlertText = alertsService.alerts.failedAuthentication.msg;

        // --------------------------------------- authentication --------------------------
        $scope.authentication = function () {
            $http({
                method: 'POST',
                url: 'http://localhost:9001/api/authenticate',
                data: {
                    username: $scope.username,
                    password: $scope.password
                }
            }).success(function (response) {
                $scope.userInfo = response;
                //$scope.token = response.token;
                console.log($scope.userInfo);
                addTokenToCookie(response.token);
                if (response.token) {
                    $location.path('/usersDB')
                }
            });
        };

        var addTokenToCookie = function (token) {
            var expireDate = new Date();
            expireDate.setDate(expireDate.getDate() + 1);

            if (!$cookies.get('login.token')) {
                $cookies.put('login.token', token, {
                    expires: expireDate
                });
            }
        }
    }]);
