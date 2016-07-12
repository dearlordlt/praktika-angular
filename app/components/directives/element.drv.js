'use strict';

angular.module('myApp').directive('elementDrv', function () {

    return {
        link: function (scope, element, attr) {
            element.addClass('animated-input');
            element.bind('click', function (event) {
                console.log(event);
            });
            element.bind('blur', function (e) {
                var creditNumber = [], value = element.val().replace(/ /g, '');
                for (var i = 0; i < value.length; i += 4) {
                    creditNumber.push(value.substring(i, i + 4));
                }
                element.val(creditNumber.join(' '));
            });
        }
    }
});

