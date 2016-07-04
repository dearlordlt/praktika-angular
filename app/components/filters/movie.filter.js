/**
 * Created by Richard on 6/30/2016.
 */
//~~~~~~~~~~~~~~~changes the first letter to upper case in the input it receives~~~~~~~~~~~~~~~~~~~
angular.module('myApp').filter('moviefilter', function () {
    return function (input) {

        return input.substring(0,1).toUpperCase() + input.substring(1);
    }
});
//~~~~~~~~~~~~~~~~~~filters out the unnecessary arrays of links~~~~~~~~~~~~~~~~~~~~~~~
angular.module('myApp').filter('moviefilter1', function () {
    return function (input) {
        if (input instanceof Array) {
            return null;
        }
        else return input;
        
    }
});
