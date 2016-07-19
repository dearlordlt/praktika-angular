angular.module('myApp.usersDB', ['ngRoute']).controller('usersDBCtrl', ['$scope', '$http', '$cookies', '$uibModal', '$log', 'alertsService', 'pokemonService',
    function ($scope, $http, $cookies, $uibModal, $log, alertsService, pokemonService) {
        $scope.user = {};

        $scope.showInput = false;

        $scope.successAlert = alertsService.alerts.successfulAuthentication.type;
        $scope.successAlertText = alertsService.alerts.successfulAuthentication.msg;

        $scope.countPokemon = 0;
        $scope.missPokemon = 0;
        $scope.level = 1;

        $scope.$watch(function(){
            return pokemonService.counterPokemon}, function(newValue, oldValue){
                if(newValue !== oldValue) {
                    $scope.countPokemon = pokemonService.counterPokemon;
                }
                console.log($scope.countPokemon);
        });

        $scope.$watch(function(){
            return pokemonService.missedPokemon}, function(newValue, oldValue){
            if(newValue !== oldValue) {
                $scope.missPokemon = pokemonService.missedPokemon;
            }
            console.log($scope.missPokemon);
        });

        $scope.$watch(function(){
            return pokemonService.gameLevel}, function(newValue, oldValue){
            if(newValue !== oldValue) {
                $scope.level = pokemonService.gameLevel;
            }
            console.log($scope.missPokemon);
        });
     /* $scope.$watch(function(){
          return countPokemon;
      }, function(newValue){
          $scope.countPokemon = newValue
      });*/

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
                size: 'lg',
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
            }).error(function(response){
                alert('Please enter users ID before continuing');
            })

        };

        $scope.actionIDModal = function () {
            $scope.items = $scope.userID;

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





    }]);
