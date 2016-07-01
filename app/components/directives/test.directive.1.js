'use strict';

angular.module('myApp').directive('testDirective', function() {
    return{
        templateUrl: 'components/directives/templates/test.directive.1.tmpl.html',
        scope: {
            id : '=id',
            jsonGet : '=jsonGet'
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
                for (var i=0; i<$scope.starwarsData.charecters.length;i++) {
                    $scope.starwarsData1 = 'loading';
                    $http.get(' http://swapi.co/api/people/' + 1 + '/').success(function (responce) {
                        console.log(responce);
                        $scope.starwarsData1 = responce;
                    });
                }

                   

            }


            
        }



    }
});
