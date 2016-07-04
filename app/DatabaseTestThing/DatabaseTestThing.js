/**
 * Created by Ausra Faturova on 04/07/2016.
 */
angular.module('myApp.DatabaseTestThing', ['ngRoute']).controller('DatabaseTestCtrl', ['$scope','$http', function ($scope,$http) {

    //~~~~~~~~~~~~~~~~~~~~~~~~Authentication~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    $scope.Authenticate = function(){
            $http({
                method: 'POST',
                url: 'http://localhost:9001/api/authenticate',
                data: { username: $scope.userName,
                password: $scope.password}
            }).then(function successCallback(response) {
                    $scope.authentication=response;
                    console.log($scope.authentication.data);
            })
};
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~get users~~~~~~~~~~~~~~~~~~~~~~~~
    $scope.getAllUsers= function(){
        $http({
            method: 'GET',
            url: 'http://localhost:9001/api/users'
        }).then(function successCallback(response) {
            $scope.allUserData=response;
        })

    };
    $scope.createUser = function(){
        $http({
            method: 'POST',
            url: 'http://localhost:9001/api/users',
            data: { name: $scope.inputName,
            username: $scope.inputUserName,
                password: $scope.inputPassword,
                admin: $scope.admin,
            location: $scope.location}
        }).then(function successCallback(response) {
            $scope.creation=response;
            console.log($scope.creation.data);
        })

    };
    $scope.getUserById = function(){
        $http({
            method: 'GET',
            url: 'http://localhost:9001/api/users/'+$scope.userId
        }).then(function successCallback(response) {
            $scope.userIDResponce=response.data;
        })
    };
    $scope.updateUserById = function(){

    };

        }]);