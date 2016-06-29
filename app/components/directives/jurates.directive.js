'use strict';

angular.module('myApp').directive('juratesDirective', function() {

    return {
        templateUrl: 'components/directives/templates/jurates.template.html',


    controller: function ($scope,$http) {
        $scope.veikla= false;

        $http.get('http://localhost:8000/db/jurates.db.json').success(function (response) {
            $scope.veikla = response;
    });
    }
    }
});

