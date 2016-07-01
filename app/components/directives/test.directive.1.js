'use strict';

angular.module('myApp').directive('testDirective', function() {
    return{
        templateUrl: 'components/directives/templates/test.directive.1.tmpl.html',
        scope: {
            id : '=id',
            jsonGet : '=jsonGet',
            characters : '=characters'
        },
        controller: function($scope, $http) {
            $http.get(' http://swapi.co/api/films/' + $scope.id + '/').success(function(responce) {
                console.log(responce);
                $scope.starwarsData = responce;
            });
            $scope.jsonGet = function(){
                $http.get(' http://swapi.co/api/films/' + $scope.id + '/').success(function(responce) {
                    console.log(responce);
                    $scope.starwarsData = responce;
                });
                $scope.characters = function () {
                    $scope.i = 0;
                    for (i = 0; i < $scope.starwarsData.characters.length; i++) {
                        $scope.starwarsData1 = 'loading';
                        $http.get(' http://swapi.co/api/people/' + $scope.i + '/').success(function (responce) {
                            console.log(responce);
                            $scope.starwarsData1 = responce;
                        });
                    }
                };

                   

            }


            
        }



    }
});
