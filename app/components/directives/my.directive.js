'use strict';

angular.module('myApp').directive('moviesDirective', function() {
    return {
        templateUrl: 'components/directives/templates/my.directive.tmpl.html',
        scope: {
            movieName: '=movieName'
        },
        controller: function($scope, $http) {
            $scope.movieData = 'Loading';
            $http.get('http://www.omdbapi.com/?t='+$scope.movieName+'&y=&plot=short&r=json').success(function(resp) {
                console.log(resp);
                $scope.movieData = resp;

            });
        }
    };
});