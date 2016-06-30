/**
 * Created by Richard on 6/29/2016.
 */
angular.module('myApp').factory('Highscore', function () {

    var obj = {
        highscore : 0,
        userName : ""
    };


    return{ 
        obj : obj
    };

});