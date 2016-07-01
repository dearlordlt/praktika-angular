/**
 * Created by Richard on 6/30/2016.
 */
angular.module('myApp').filter('moviefilter', function () {
    return function (input) {

        return input.substring(0,1).toUpperCase() + input.substring(1);
    }
});
/**
angular.module('myApp').filter('moviefilter1', function () {
    return function (input) {
        if(input instanceof Array === true)
        {
            for (var i=0; i < input.length; i++) {
                return "<a href=" + input[i] + ">" + "/<a>";
            }
                

        }
        else return input;

    }
});*/
