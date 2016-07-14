'use strict';
angular.module('myApp').directive('biscuitcanvasDrv', ['$timeout','$interval', function ($timeout, $interval) {

    function link(scope, element, attr) {

        var canvas = $("#testCanvas");
        var paper = Raphael("testCanvas", 500, 500);

        var ssss = false;

var GameBegin = function(){
    ssss=false;
    //¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬Initial variables¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
    var KappaClaus = paper.image('https://d1b2zzpxewkr9z.cloudfront.net/user_images/8445445cfca1fda805669ae04feb9c82a9f8809b/687474703a2f2f7477697463682e7770656e67696e652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031352f31312f537469636b65725f53616e74614b617070612e706e67', 10, 10, 55,65);
    var Kappas =[];
    var random = function(){
        return Math.floor((Math.random()*300));
    };
    //¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬Kappa count observer¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
    attr.$observe('kappa', function () {
        var Kappa = paper.image('http://i.imgur.com/W0QgS4N.png', random(), random(),  50, 50);
        Kappas.push(Kappa);
        angular.forEach(Kappas, function(value, key) {
            Kappas[key].animate({x: KappaClaus.attr("x"), y: KappaClaus.attr("y")}, 6000);
        });
        KappaClaus.toFront();
    });
    //¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬Drag function¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
    var start = function (){
            this.ox = this.attr("x");
            this.oy = this.attr("y");

        },
        move = function (dx, dy) {
            this.attr({x: this.ox + dx, y: this.oy + dy});
        },
        up = function () {
            this.animate();
            angular.forEach(Kappas, function(value, key) {
                Kappas[key].animate({x: KappaClaus.attr("x"), y: KappaClaus.attr("y")}, 6000);
            });

        };

    //¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬Periodic Kappa spawning function¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
    var KappaSpawn =$interval(function () {
        var Kappa = paper.image('http://i.imgur.com/W0QgS4N.png', random(), random(),  50, 50);
        Kappas.push(Kappa);
        angular.forEach(Kappas, function(value, key) {
            Kappas[key].animate({x: KappaClaus.attr("x"), y: KappaClaus.attr("y")}, 6000);
        })
    },500);

    //¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬ Kappa dragging¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
    KappaClaus.drag(move,start, up);

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Collision checker~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    function collision (k1x, k1y, k2x, k2y) {
        var HitBox = 20;
        if((k1x <= k2x + HitBox && k1x >= k2x-HitBox) && (k1y <= k2y+HitBox && k1y >= k2y-HitBox)){
            return true;
        }
        else return false;
    }

    var collide = $interval( function() {
        angular.forEach(Kappas, function(value, key) {
            if( collision(  Kappas[key].attr('x'),  Kappas[key].attr('y'),  KappaClaus.attr('x'), KappaClaus.attr('y') )) {
                var gameEnd = function(){
                    paper.clear();
                    $interval.cancel(KappaSpawn);
                    $interval.cancel(collide);
                    Kappas.splice(0,Kappas.length);
                    ssss = true;
                    return ssss;
                };
                gameEnd();
            }

        })
    },100 );
};
        $interval(function(){
if(ssss===true){
    GameBegin();
}},100);
        GameBegin();
      /*  var c = element[0].getContext('2d');
        var img = new Image();
        img.src = 'http://i.imgur.com/W0QgS4N.png';

        var resolutions =[];
        var pusher = function(){
            resolutions.splice(0);
            resolutions.push(Math.random()*200);
        };

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
};*/
    }

    return {
        restrict: 'E',
        replace: true,
        scope: true,
        link: link,
        template: '<div id="testCanvas" style="border: 1px solid #E0E0E0;"></div>'
    }
}]);