/**
 * Created by Jurcix on 2016-06-30.
 */
angular.module('myApp').filter('numberingFilter', function () {
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