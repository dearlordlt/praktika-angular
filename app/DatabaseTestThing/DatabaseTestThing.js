/**
 * Created by Ausra Faturova on 04/07/2016.
 */
angular.module('myApp.DatabaseTestThing', ['ngRoute']).controller('DatabaseTestCtrl', ['$scope','$http', '$cookies','errorPrintingService','$uibModal', function ($scope,$http,$cookies,errorPrintingService,$uibModal) {
    //~~~~~~~~~~~~~~~~~~~~~~~~Initial variable creation~~~~~~~~~~~~~~~~~~~~~~
    $scope.user = {

    };
    $scope.userUpdate={

    };
    $scope.errorData='';
    $scope.alerts = [
    ];

    $scope.addAlert = function(errormessage) {
        $scope.alerts.push({msg: errormessage});
    };
    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };
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
            $scope.addAlert(errorPrintingService.error);
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

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~Modal~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    $scope.items = ['item1', 'item2', 'item3'];

    $scope.animationsEnabled = true;

    $scope.open = function (size) {

        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: 'DatabaseTestThing/modals/DatabaseTestThingTmpl.html',
            controller: 'DatabaseTestThingCtrl',
            size: 'sm',
            resolve: {
                items: function () {
                    return $scope.items;
                }
            }
        })};
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Pop over~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    $scope.dynamicPopover = {
        content: 'Hello, World!',
        templateUrl: 'myPopoverTemplate.html',
        title: 'Title'
    };

    $scope.placement = {
        options: [
            'top',
            'top-left',
            'top-right',
            'bottom',
            'bottom-left',
            'bottom-right',
            'left',
            'left-top',
            'left-bottom',
            'right',
            'right-top',
            'right-bottom'
        ],
        selected: 'top'
    };


        }]);