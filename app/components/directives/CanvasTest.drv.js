/**
 * Created by Jurcix on 7/12/2016.
 */
'use strict';

angular.module('myApp').directive('canvasTest', [ '$interval',  function ($interval) {

    function link($scope, element, attr) {
        console.info(element);
        var c = element[0].getContext('2d');
        c.font = '18px Courier New';
        var imgCookie = new Image();
        imgCookie.src = 'https://lh5.ggpht.com/yHXnlmz4QSI2yz2QLGbARH9rAM3UMnGKYM2080rnrTzUXU5lT1J40tnpebPMkDxoaZ87=w300';

        var imgBowl = new Image();
        imgBowl.src= 'http://image.shutterstock.com/display_pic_with_logo/169/169,1262689964,4/stock-vector-empty-bowl-43841155.jpg';
        var add;
      //  var cookieCounter = Math.floor((Math.random() * 5) + 1);

        var y = 0;
        var x = Math.floor((Math.random() * 450) + 1);
        imgCookie.draw = function () {

           // console.log(x);
            c.drawImage (imgCookie, x, y, 50, 50);

            y += 1;
        };

        var a=215;
        var b=260;
        imgBowl.draw = function () {
            c.drawImage (imgBowl, a, b, 70, 40)
        };

        imgBowl.draw();



            add = $interval(function(){

                    imgCookie.draw();
                    return imgCookie.draw()},
                100, 150);


         $scope.moveLeft = function(){
            a+=10;
            imgBowl.draw();
            return imgBowl.draw();
            console.log(a);
        }
    }




       // c.fillText(attr.tekstas, 50, 50);
       // c.strokeRect(100, 100, 25, 25);

       /* attr.$observe('rx', function (newX) {
            c.strokeRect(newX, attr.ry, 25, 25);
        });*/
/*
        c.beginPath();
         c.arc(75,75,50,0,Math.PI*2,true);
         c.moveTo(65,50);
         c.arc(60,50,5,0,Math.PI*2,true);
         c.moveTo(105,60);
         c.arc(100,60,5,0,Math.PI*2,true);
        c.moveTo(95,90);
        c.arc(90,90,5,0,Math.PI*2,true);
        c.moveTo(55,90);
        c.arc(50,90,5,0,Math.PI*2,true);
        c.stroke();
    }*/

    return {
        restrict: 'E',
        replace: true,
        scope: true,
        link: link,
        template: '<canvas id="testCanvas" width="500" height="300" style="border: 5px solid #000000; margin-left: 30%;"></canvas>'
    }
}]);