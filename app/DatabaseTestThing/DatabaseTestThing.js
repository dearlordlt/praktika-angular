/**
 * Created by Ausra Faturova on 04/07/2016.
 */
angular.module('myApp.DatabaseTestThing', ['ngRoute']).controller('DatabaseTestCtrl', ['$scope','$http', '$cookies','errorPrintingService', function ($scope,$http,$cookies,errorPrintingService) {
    //~~~~~~~~~~~~~~~~~~~~~~~~User object creation~~~~~~~~~~~~~~~~~~~~~~
    $scope.user = {

    };
    $scope.userUpdate={

    };
    $scope.errorData='';

    //~~~~~~~~~~~~~~~~~~~~~~~~~HTML needed objects~~~~~~~~~~~~~~~~~~~~~~
    $scope.adminOptions = {
        option1: 'false',
        option2: 'true'
    };

    $scope.clickChecker=false;
    $scope.token=$cookies.get('cool_token');
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~User functions~~~~~~~~~~~~~~~~~~~~~~~~
    $scope.getAllUsers= function() {
        if( $scope.clickChecker===false){
        $http.get('http://localhost:9001/api/users/?token=' + $cookies.get('cool_token')).success(function (response) {
            $scope.allUserData = response;
            console.log( response);
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
            url: 'http://localhost:9001/api/users/?token='+ $cookies.get('cool_token'),
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
            url: 'http://localhost:9001/api/users/'+$scope.user._id+'/?token='+$cookies.get('cool_token')
        }).success(function(response) {
            $scope.errorData='';
            $scope.userIDResponce=response;
            console.log(response);

        }).error(function(error){
            $scope.errorData = errorPrintingService.error;
        });

    };

    $scope.updateUserById = function(){
        $http({
            method: 'PUT',
            url: 'http://localhost:9001/api/users/'+$scope.user._id+'/?token='+$cookies.get('cool_token'),
            data: $scope.userUpdate
        }).success(function(response) {
            $scope.userUpdateResponce="User info was updated";
            console.log( response);

        }).error(function(error){
            $scope.errorData = errorPrintingService.error;
        });

    };
    $scope.deleteUserById = function(){
        $http.delete('http://localhost:9001/api/users/'+$scope.user._id+'/?token='+$cookies.get('cool_token')).success(
            function (response){
                $scope.userDeleteResponce="User was successfully deleted";
                console.log( response);
            }).error(function(error){
            $scope.errorData = errorPrintingService.error;
        });


    };
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~UI stuff~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    $scope.isCollapsed = true;


        }]);