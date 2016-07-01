'use strict';

angular.module('myApp').directive('testDirective', function () {
    return {
        templateUrl: 'components/directives/templates/test.directive.1.tmpl.html',
        scope: {
            id: '=?id',
            jsonGet: '=?jsonGet'
        },
        controller: function ($scope, $http) {

            $scope.jsonGet = function () {
                $http.get(' http://swapi.co/api/films/' + $scope.id + '/').success(function (responce) {
                    $scope.starwarsData = responce;
                    for(var i=0;i<$scope.starwarsData.characters.length;i++) {
                        $scope.starwarsData.characters[i] = "<a href=" + $scope.starwarsData.characters[i]+">" +"</a>"
                    }
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
        }
    }
});
