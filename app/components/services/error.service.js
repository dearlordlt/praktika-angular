'use strict'

angular.module('myApp').factory('errorService', function (){

    var errors = 0;

    return {
        errors: errors
    }
});