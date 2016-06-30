/**
 * Created by Jurcix on 2016-06-28.
 */
'use strict';

angular.module('myApp.view5', ['ngRoute']).controller('View5Ctrl',  ['$scope','manoService', '$http', function ($scope, manoService, $http ) {
    $scope.font = {
        puikus: 'Mano puikusis view5',
        klausimas: 'Ar jums patinka mano view5?',
        klausimas2: 'Ar reikia ka nors pakeisti?',
        listas: ['taip', 'ne', 'sueis'],
        vardas: 'Jurate'
    };
    $scope.score = manoService.kintamasis;

    $scope.addKintamasis = function() {
        manoService.kintamasis = $scope.score;
        $scope.myScore = manoService.kintamasis;

    };

  //  $scope.veikla= false;

  //  $http.get('http://localhost:8000/db/jurates.db.json').success(function (response) {
   //    $scope.veikla = response;
   // });

   // $scope.number = movieService.numberOfMovie;
   // $scope.addMovieNumber = function() {
    //movieService.numberOfMovie = $scope.number;
      //  console.log(movieService.numberOfMovie);
   // };


    /**
     * Actual function is on directive, only needed to reference
     */
    $scope.nereikalingaFunkcija = function(){};
}]);

