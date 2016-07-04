'use strict';

angular.module('myApp').directive('testDirective', function () {
    return {
        templateUrl: 'components/directives/templates/test.directive.1.tmpl.html',
        scope: {
            id: '=?id',
            jsonGet: '=?jsonGet',
        },
        controller: function ($scope, $http) {
            $scope.jsonGet = function () {
                $http.get('http://swapi.co/api/films/' + $scope.id + '/').success(function (responce) {
                    $scope.starwarsData = responce;
                    $scope.characters();
                });
            };

            $scope.jsonGet();

            $scope.characters = function () {
                for (var i = 1; i < $scope.starwarsData.characters.length - 1; i++) {
                    $scope.starwarsData1 = 'loading';
                    $http.get(' http://swapi.co/api/people/' + i + '/').success(function (responce) {
                        console.log(responce);
                        $scope.starwarsData1 = responce;
                    });
                }
            };
            $scope.items = [];
            $scope.items2 = [];
            $scope.$watch('id',function(){
                if($scope.id){
                    $scope.getMovieData();
                }
            });
            $scope.getMovieData= function() {

                $http.get(' http://swapi.co/api/films/' + $scope.id + '/').success(function (responce) {
                    $scope.items = responce.characters;

                });
                $http.get(' http://swapi.co/api/films/' +$scope.id + '/').success(function (responce) {
                    $scope.planets = responce.planets;

                });
                $http.get(' http://swapi.co/api/films/' + $scope.id + '/').success(function (responce) {
                    $scope.starships = responce.starships;

                });
                $http.get(' http://swapi.co/api/films/' + $scope.id + '/').success(function (responce) {
                    $scope.vehicles = responce.vehicles;

                });
                $http.get(' http://swapi.co/api/films/' + $scope.id + '/').success(function (responce) {
                    $scope.species = responce.species;
                });
            };


        }
    }
});

/**
 $scope.everything = function() {
                for (a in $scope.starwarsData) {
                    if ($scope.starwarsData.hasOwnProperty(a)) {
                        if ($scope.starwarsData[a] instanceof Array) {
                            for (var i = 0; i < $scope.starwarsData[a].length; i++) {
                                $http.get(+$scope.starwarsData[a][i]).success(function (responce) {
                                    $scope.starwarsData2 = responce;
                                });

                            }
                        } else {
                            $http.get(' http://swapi.co/api/films/' + $scope.id + '/').success(function (responce) {
                                $scope.starwarsData2 = responce;
                            });
                        }
                    }
                }
            };*/