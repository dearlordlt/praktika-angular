'use strict';

angular.module('myApp').directive('canvasDrv', ['$timeout', function ($timeout) {

    function link(scope, element, attr) {

        var paper = Raphael(0, 320, 300, 300);
        var circle = paper.circle(50, 40, 10);

        var rect = paper.rect(0, 0, 300, 300);
        rect.attr("fill", "#eee");
        rect.attr("fill-opacity", 0);

        circle.attr("fill", "#f00");
        circle.attr("stroke", "#fff");

        /*function a() {
            circle.animate({r : 10, fill : '#00f', cx: 100}, 1000, b);
        }
        function b() {
            circle.animate({r : 6, fill : '#f00', cx: 10}, 1000, a);
        }
        a();*/

        rect.click(function(e) {
            console.log(e);
            circle.animate({r : 10, fill : '#00f', cx: e.offsetX, cy:e.offsetY}, 200);
        });

        /*console.info(element);
        var c = element[0].getContext('2d');
        c.font = '18px Courier New';
        c.fillText(attr.tekstas, 50, 50);
        c.strokeRect(attr.rx, attr.ry, 25, 25);

        attr.$observe('rx', function (newX) {
            c.strokeRect(newX, attr.ry, 25, 25);
        });*/

        /*c.beginPath();
         c.arc(75,75,50,0,Math.PI*2,true); // Outer circle
         c.moveTo(110,75);
         c.arc(75,75,35,0,Math.PI,false);  // Mouth (clockwise)
         c.moveTo(65,65);
         c.arc(60,65,5,0,Math.PI*2,true);  // Left eye
         c.moveTo(95,65);
         c.arc(90,65,5,0,Math.PI*2,true);  // Right eye
         c.stroke();*/
    }

    return {
        restrict: 'E',
        replace: true,
        scope: true,
        link: link,
        template: '<canvas id="testCanvas" width="300" height="300" style="border: 1px solid #E0E0E0;"></canvas>'
    }
}]);