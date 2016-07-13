'use strict';

angular.module('myApp').directive('canvasDrv', ['$timeout', function ($timeout) {

    function link(scope, element, attr) {

        var canvas = $("#testCanvas");
        var paper = Raphael("testCanvas", canvas.width(), canvas.height());

        var circle = paper.circle(50, 40, 10);

        var rect = paper.rect(0, 0, 300, 300);
        rect.attr("fill", "#eee");
        rect.attr("fill-opacity", 0);

        circle.attr("fill", "#f00");
        circle.attr("stroke", "#fff");

        rect.click(function(e) {
            console.log(e);
            circle.animate({r : 10, fill : '#00f', cx: e.offsetX, cy:e.offsetY}, 200);
        });
    }

    return {
        restrict: 'E',
        replace: true,
        scope: true,
        link: link,
        template: '<div id="testCanvas" style="border: 1px solid #E0E0E0;"></div>'
    }
}]);