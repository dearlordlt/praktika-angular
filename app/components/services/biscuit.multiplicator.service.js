/**
 * Created by Richard on 11/07/2016.
 */
'use strict'

angular.module('myApp').factory('biscuitMultiplicatorService', function (){


    var multiplicator = 0;
   multiplicator = multiplicator * 2;
    return {
        multiplicator : multiplicator

    }
});