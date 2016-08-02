angular.module('myApp.CoolLoginPage', ['ngRoute']).controller('CoolLoginPageCtrl', ['$scope','$http','$cookies','$location', function ($scope,$http,$cookies,$location) {
    $scope.user = {

    };
    $scope.addUserToCookie = function(token,username,userID) {
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);

        if (!$cookies.get('cool_token')) {
            $cookies.put('cool_token', token, {
                expires: expireDate
            });
            $cookies.put('such_username', username, {
                expires: expireDate
            });
            $cookies.put('such_userID', userID, {
                expires: expireDate
            });

        }
    };


    $scope.Authenticate = function(){
        $http({
            method: 'POST',
            url: 'http://localhost:9001/api/authenticate',
            data: {
                username: $scope.userName,
                password: $scope.password
            }
        }).success(function(response) {
            $scope.authentication=response;
            $scope.token=response.token;
            $scope.addUserToCookie(response.token,response.username, response.userID);
            if(response.token) {
                $location.path("/DatabaseTestThing");
            }

        })
    };




}]);
