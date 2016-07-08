'use strict';

angular.module('myApp').directive('elementDrv', function () {

    return {
        link: function (scope, element, attr) {
            element.addClass('animated-input');
            element.bind('click', function(event){
                console.log(event);
            });
        }
    }
});

