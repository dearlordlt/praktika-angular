/**
 * Created by Jurcix on 2016-06-29.
 */
'use strict';

angular.module('myApp').directive('movieDirective', function() {
    return {
        templateUrl: 'components/directives/templates/movies.template.html',
        scope: {
            movieNumber: '=movieNumber',
            readingMovie: '=readingMovie'
        },
        controller: function ($scope, $http) {

            $scope.myMovie = 'Loading';
            $http.get('http://www.omdbapi.com/?t=' +$scope.movieNumber + '&y=&plot=short&r=json').success(function (response2) {
                console.log(response2);
                $scope.myMovie = response2;
                console.log($scope.movieNumber);
            });

            $scope.readingMovie = function () {
                $http.get('http://www.omdbapi.com/?t=' + $scope.movieNumber + '&y=&plot=short&r=json').success(function (response2) {
                    console.log(response2);
                    $scope.myMovie = response2;
                });
            }
        }
    }
});
