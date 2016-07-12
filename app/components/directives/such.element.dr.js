'use strict';

angular.module('myApp').directive('suchelementDr', function () {

    return {
        link: function (scope, element, attr) {
            element.addClass('hvr-grow');
            element.bind('click', function(event){
                console.log(event);
            });
        }
    }
});