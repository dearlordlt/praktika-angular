'use strict';

angular.module('myApp.view2', ['ngRoute']).controller('View2Ctrl', ['$scope', function ($scope) {

        $scope.checkboxModel = {
            value1: true,
            value2: 'YES'
        };

    }]);