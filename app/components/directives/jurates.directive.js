'use strict';

angular.module('myApp').directive('juratesDirective', function () {

    return {
        // template: '<pre ng-if="veikla">{{veikla | json}}</pre>',
        templateUrl: 'components/directives/templates/jurates.template.html',


        controller: function ($scope, $http) {

            $scope.veikla = false;
            console.log(typeof $scope.veikla);
            $http.get('http://localhost:8000/db/jurates.db.json').success(function (response) {
            console.log(response.uzsiemimas[0]);
            $scope.veikla =  response;

            });

        }
    }
});

