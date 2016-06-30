'use strict';

angular.module('myApp').directive('testDirective', function() {
    return{
        templateUrl: 'components/directives/templates/test.directive.1.tmpl.html',
        scope: {
            dataName : '=dataName'
        },
        controller: function($scope, $http) {
            $scope.starwarsData = 'Loading';
            $http.get(' http://swapi.co/api/people/1/').success(function(responce) {
                console.log(responce);
                $scope.starwarsData = responce;
            });
        }

    }
});
