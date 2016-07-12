'use strict';

angular.module('myApp').directive('canvasDrv', function () {

    function link(scope, element, attr) {
        console.info(element);
        var c = element[0].getContext('2d');
        c.font = '18px Courier New';
        c.fillText(attr.tekstas, 50, 50);
        c.strokeRect(attr.rx, attr.ry, 25, 25);

        attr.$observe('rx', function (newX) {
            c.strokeRect(newX, attr.ry, 25, 25);
        });

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
});