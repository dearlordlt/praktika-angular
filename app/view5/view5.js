/**
 * Created by Jurcix on 2016-06-28.
 */
'use strict';

angular.module('myApp.view5', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/view5', {
            templateUrl: 'view5/view5.html',
            controller: 'View5Ctrl'
        });
    }])

    .controller('View5Ctrl', ['$scope', function($scope){
        $scope.font =
        {
            puikus: 'Mano puikusis view5',
            klausimas: 'Ar jums patinka mano view5',
            klausimas2: 'Ar reikia ka nors pakeisti?',
            listas: ['taip','ne', 'sueis']
        }

    }]);