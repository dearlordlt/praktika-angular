/**
 * Created by Jurcix on 2016-06-29.
 */
'use strict';

angular.module('myApp').directive('movieDirective', function () {
    return {
        templateUrl: 'components/directives/templates/movies.template.html',
        scope: {
            movieNumber: '=movieNumber',
            readingMovie: '=readingMovie'
        },
        controller: function ($scope, $http) {


            $scope.readingMovie = function () {
                $http.get('http://www.omdbapi.com/?t=' + $scope.movieNumber + '&y=&plot=short&r=json').success(function (response2) {


                    $scope.myMovie = response2;
                    $scope.toArray();

                    $scope.myMovie.Poster = $scope.myMovie.Poster;
                    $scope.poster= $scope.myMovie.Poster;
                    console.log($scope.poster);
                });

            }

            $scope.toArray = function () {
                return $scope.myMovie.Actors = $scope.myMovie.Actors.split(",")
            }

            //-------------------------------Dropdown--------------------------------------


            $scope.status = {
                isopen: false
            };

            $scope.toggled = function(open) {
                $log.log('Dropdown is now: ', open);
            };

            $scope.toggleDropdown = function($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.status.isopen = !$scope.status.isopen;
            };

            $scope.appendToEl = angular.element(document.querySelector('#dropdown-long-content'));

            //----------------------------------Rating---------------------------------------------

            $scope.rate = 7;
            $scope.max = 10;
            $scope.isReadonly = false;

            $scope.hoveringOver = function(value) {
                $scope.overStar = value;
                $scope.percent = 100 * (value / $scope.max);
            };

            $scope.ratingStates = [
                {stateOn: 'glyphicon-ok-sign', stateOff: 'glyphicon-ok-circle'},
                {stateOn: 'glyphicon-star', stateOff: 'glyphicon-star-empty'},
                {stateOn: 'glyphicon-heart', stateOff: 'glyphicon-ban-circle'},
                {stateOn: 'glyphicon-heart'},
                {stateOff: 'glyphicon-off'}
            ];

        }
    }
});
