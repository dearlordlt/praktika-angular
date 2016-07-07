angular.module('myApp.CoolLoginPage', ['ngRoute']).controller('CoolLoginPageCtrl', ['$scope','$http','$cookies','$location', function ($scope,$http,$cookies,$location) {
    $scope.user = {

    };
    $scope.addTokenToCookie = function(token) {
        var expireDate = new Date();
        expireDate.setDate(expireDate.getDate() + 1);

        if (!$cookies.get('cool_token')) {
            $cookies.put('cool_token', token, {
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
            $scope.addTokenToCookie(response.token);
            if(response.token) {
                $location.path("/DatabaseTestThing");
            }

        }).error(function(err){
            $scope.authentication=err;
        })
    };



}]);
