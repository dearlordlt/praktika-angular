angular.module('myApp').controller('DropdownCtrl', function ($scope, $log, $http) {
    $scope.items = [];
    $scope.items2 = [];
    $scope.$watch('movieID',function(){
        if($scope.movieID){
            $scope.getMovieData();
        }
    });
    $scope.getMovieData= function(){

        $http.get(' http://swapi.co/api/films/' + $scope.movieID + '/').success(function (responce) {
            $scope.items = responce.characters;

        });
        $http.get(' http://swapi.co/api/films/1/').success(function (responce) {
            $scope.planets = responce.planets;

        });
        $http.get(' http://swapi.co/api/films/1/').success(function (responce) {
            $scope.starships = responce.starships;

        });
        $http.get(' http://swapi.co/api/films/1/').success(function (responce) {
            $scope.vehicles = responce.vehicles;

        });
        $http.get(' http://swapi.co/api/films/1/').success(function (responce) {
            $scope.species = responce.species;

        });
    };
    /*    $scope.thing=[];
     for (var i = 0; i < $scope.starwarsData.characters.length; i++) {
     $scope.thing[i] = $scope.starwarsData.characters[i];
     }
     $scope.items = $scope.thing;*/

    $scope.status = {
        isopen: false
    };

    $scope.toggled = function (open) {
        $log.log('Dropdown is now: ', open);
    };
    $scope.toggleDropdown = function ($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
});
/**
 * Created by Richard on 7/1/2016.
 */
