/**
 * Created by Ausra Faturova on 04/07/2016.
 */
angular.module('myApp.DatabaseTestThing', ['ngRoute']).controller('DatabaseTestCtrl', ['$scope','$http', function ($scope,$http) {
    //~~~~~~~~~~~~~~~~~~~~~~~~User object creation~~~~~~~~~~~~~~~~~~~~~~
    $scope.user = {

    };
    $scope.userUpdate={

    };

    //~~~~~~~~~~~~~~~~~~~~~~~~~HTML needed objects~~~~~~~~~~~~~~~~~~~~~~
    $scope.adminOptions = {
        option1: 'false',
        option2: 'true'
    };


    //~~~~~~~~~~~~~~~~~~~~~~~~Authentication~~~~~~~~~~~~~~~~~~~~~~~~~~~~
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
            }).error(function(err){
                $scope.authentication=err;
            })
};
    $scope.clickChecker=false;
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~User functions~~~~~~~~~~~~~~~~~~~~~~~~
    $scope.getAllUsers= function() {
        if( $scope.clickChecker===false){
        $http.get('http://localhost:9001/api/users/?token=' + $scope.token).success(function (response) {
            $scope.allUserData = response;
        }).error(function (error) {
            alert("such error");

        });
            $scope.clickChecker=!$scope.clickChecker;
        }
        else if($scope.clickChecker===true){
            $scope.clickChecker=!$scope.clickChecker;
        }
    };
    $scope.createUser = function(){
        $http({
            method: 'POST',
            url: 'http://localhost:9001/api/users/?token='+ $scope.token,
            data: $scope.user
        }).success(function(response) {
            $scope.creation = "User was successfully created"
        }).error(function(error){

            if(!$scope.user.name){
                $scope.creation="Missing  name"
            }
            else if(typeof $scope.user.userName === "undefined"){
                $scope.creation="Missing username"
            }
            else if(typeof !$scope.user.password === "undefined"){
                $scope.creation="Missing  password"
            }
            else if(typeof !$scope.user.admin === "undefined"){
                $scope.creation="Missing  admin"
            }
            else if(typeof $scope.user.location === "undefined"){
                $scope.creation="Missing  location"
            }

        })

    };
    $scope.getUserById = function(){
        $http({
            method: 'GET',
            url: 'http://localhost:9001/api/users/'+$scope.user._id+'/?token='+$scope.token
        }).success(function(response) {
            $scope.userIDResponce=response;
        })
    };
    $scope.updateUserById = function(){
        $http({
            method: 'PUT',
            url: 'http://localhost:9001/api/users/'+$scope.userUpdate._id+'/?token='+$scope.token,
            data: $scope.userUpdate
        }).success(function(response) {
            $scope.userUpdateResponce="User info was updated";
        })
    };
    $scope.deleteUserById = function(){
        $http.delete('http://localhost:9001/api/users/'+$scope.user._id+'/?token='+$scope.token).success(
            function (response){
                $scope.userDeleteResponce="User was successfully deleted";
            })


    };
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    $scope.isCollapsed = true;

        }]);