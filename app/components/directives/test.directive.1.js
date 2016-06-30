'use strict';

angular.module('myApp').directive('testDirective', function() {
    return{
        templateUrl: 'components/directives/templates/test.directive.1.tmpl.html',
        scope: {
            id : '=id',
            jsonGet : '=jsonGet'
        },
        controller: function($scope, $http, moviesearch) {
            $scope.starwarsData = 'loading';
            $http.get(' http://swapi.co/api/films/' + $scope.id + '/').success(function(responce) {
                console.log(responce);
                $scope.starwarsData = responce;
            });
            $scope.jsonGet = function(){
                $scope.starwarsData = 'loading';
                $http.get(' http://swapi.co/api/films/' + $scope.id + '/').success(function(responce) {
                    console.log(responce);
                    $scope.starwarsData = responce;
                });
            };
            
        }



    }
});
