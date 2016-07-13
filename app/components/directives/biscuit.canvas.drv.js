'use strict';

angular.module('myApp').directive('biscuitcanvasDrv', function ($interval) {

    function link(scope, element, attr) {
        console.info(element);
        var c = element[0].getContext('2d');
        var img = new Image();
        img.src = 'http://i.imgur.com/W0QgS4N.png';

        var resolutions =[];
        var pusher = function(){
            resolutions.splice(0);
            resolutions.push(Math.random()*200);
        };

       /* attr.$observe('d', function () {
            pusher();
            c.drawImage(img,(Math.random()*500),(Math.random()*800),resolutions[0],resolutions[0])
        });*/
        var kappaArray =[];
        function Kappa(x,y,h,w){
            this.x = x;
            this.y = y;
            this.h = h;
            this.w = w;
        }

        attr.$observe('kappa', function () {
            pusher();
            var kappa = new Kappa(Math.random()*800,Math.random()*500,resolutions[0],resolutions[0]);
            c.drawImage(img,kappa.x, kappa.y, kappa.h, kappa.w);
            kappaArray.push(kappa);
            kappaRedraw();
        });

var kappaRedraw = function(){
        angular.forEach(kappaArray, function(value, key){
             $interval(function () {
                    kappaArray[key].x = kappaArray[key].x + (Math.random()*5) - 2.5;
                    kappaArray[key].y = kappaArray[key].y + (Math.random()*5) - 2.5;
                    c.drawImage(img,kappaArray[key].x, kappaArray[key].y, kappaArray[key].h, kappaArray[key].w);
                }
                , 100, 80);

        })
};


    }


    return {
        restrict: 'E',
        replace: true,
        scope: true,
        link: link,
        template: '<canvas id="testCanvas" width="800" height="500" style="border: 1px solid #E0E0E0;"></canvas>'
    }
});