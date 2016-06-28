/**
 * Created by Jurcix on 2016-06-28.
 */
'use strict';

angular.module('myApp.view5', ['ngRoute']).controller('View5Ctrl', ['$scope', function ($scope) {
    $scope.font = {
        puikus: 'Mano puikusis view5',
        klausimas: 'Ar jums patinka mano view5?',
        klausimas2: 'Ar reikia ka nors pakeisti?',
        listas: ['taip', 'ne', 'sueis'],
        vardas: 'Jurate'
    }

}]);

