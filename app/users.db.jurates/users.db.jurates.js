angular.module('myApp.usersDB', ['ngRoute']).controller('usersDBCtrl', ['$scope', '$http', function ($scope, $http) {
$scope.user = {};
    console.log($scope.username);
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
                $scope.token = response.token;
                console.log($scope.userInfo);
            });
           };



    $scope.actionGet = function (){
        $http.get('http://localhost:9001/api/users').success(function (response){
            $scope.allUsers = response;
            console.log($scope.allUsers);
        })
    };

    $scope.actionPost = function () {
        console.log($scope.user);
        $http({
            method: 'POST',
            url: 'http://localhost:9001/api/users/?token=' + $scope.token,
            data:$scope.user
        }).success(function (response) {
            $scope.addedUser = response;
            console.log($scope.addedUser);
        }).error(function (error) {
            alert (error);
        });

    }
}]);