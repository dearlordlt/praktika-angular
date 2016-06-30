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

angular.module('myApp').filter('indexFilter', function () {
    return function (input, startingPosition) {

        for(var i = 0; i < input.length; i++) {
            input[i].index = i + startingPosition;
        }

        return input;
    }
});

angular.module('myApp').filter('toUpperCase', function () {
    return function (input) {
        if(typeof input == 'string') {
            input = input.toUpperCase();
        }
        return input;
    }
});
