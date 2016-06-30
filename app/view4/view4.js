'use strict';

angular.module('myApp.view4', ['ngRoute']).controller('View4Ctrl', ['$scope', '$interval','Highscore','moviesearch' , function ($scope, $interval, Highscore, moviesearch) {
    $scope.randomThing = "This will be a cookie clicker game";

   //~~~~~~~~~~~~~~~~~~~~~~~~variable init~~~~~~~~~~~~~~~~~~~~~~~~~~~
    $scope.cookieAmount = 0;
    $scope.priceInc = 5;
    $scope.highScore = Highscore.obj.highscore;
    $scope.userName = Highscore.obj.name;
    $scope.movieID= moviesearch.movie.movieData;
    var add = null;
    var add2 = null;
    var add1 = null;
    //~~~~~~~~~~~~~~~~~~~~~~simple cookie adding~~~~~~~~~~~~~~~~~~~~~
    $scope.cookieIncrement = function () {
        $scope.cookieAmount += 1;
        return $scope.cookieAmount;
    };
    //~~~~~~~~~~~~~~~~~~~~~self adding cookies~~~~~~~~~~~~~~~~~~~
    $scope.cookieAdder = function () {
        $scope.cookieAmount = $scope.cookieAmount - $scope.priceInc;
        $scope.priceInc++;

        add = $interval(function () {
                $scope.cookieAmount += 1;
                return $scope.cookieAmount;
            }
            , 1000);

    };
    $scope.cookieAdder100 = function () {
        add2 = $interval(function () {
            $scope.cookieAmount += 100;
            return $scope.cookieAmount;
        }, 1000)
    };

    //~~~~~~~~~~~~~~~~Condition checkers---------------------
    $scope.condition1 = false;
    $scope.condition2 = false;

    $scope.condition = function () {

        if ($scope.cookieAmount > 5) {
            $scope.condition1 = true;
            return $scope.condition1;
        }

    };
    $scope.condition100 = function () {
        if ($scope.cookieAmount > 30) {
            $scope.condition2 = true;
            return $scope.condition2;
        }
    };


    $scope.scoreChecker = function() {
        add1 = $interval(function () {
            if ($scope.cookieAmount > Highscore.obj.highscore) {
                Highscore.obj.highscore = $scope.cookieAmount;
                $scope.highScore = Highscore.obj.highscore;
            }
        }, 1000);

        //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~adding functions~~~~~~~~~~~~~~~~~~~~~~~~~~~

        
        
    };
    $scope.updateMovies = function(){

    };
    $scope.addUserToService = function(){
        Highscore.obj.name = $scope.userName;
    };
    
}]);

