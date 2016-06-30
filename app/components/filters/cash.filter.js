'use strict';

angular.module('myApp').filter('cashFilter', function () {
    return function (input) {
        return input + ' EUR';
    }
});

angular.module('myApp').filter('emailFilter', function () {
    return function (input) {
        return '<a href="mailto:' + input + '">' + input + '</a>';
    }
});
