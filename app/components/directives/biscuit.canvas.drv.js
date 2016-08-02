'use strict';
angular.module('myApp').directive('biscuitcanvasDrv', ['$timeout','$interval', function ($timeout, $interval) {

    function link(scope, element, attr) {

        var canvas = $("#testCanvas");
        var paper = Raphael("testCanvas", 500, 500);

        var gamechecker = false;

var GameBegin = function(){
    KappaRoss.remove();
    gamechecker=false;
    //¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬Initial variables¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
    var KappaClaus = paper.image('https://d1b2zzpxewkr9z.cloudfront.net/user_images/8445445cfca1fda805669ae04feb9c82a9f8809b/687474703a2f2f7477697463682e7770656e67696e652e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031352f31312f537469636b65725f53616e74614b617070612e706e67', 10, 10, 55,65);
    var Kappas =[];
    var random = function(){
        return Math.floor((Math.random()*300));
    };
    //¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬Kappa count observer¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬
   /* attr.$observe('kappa', function () {
        var Kappa = paper.image('http://i.imgur.com/W0QgS4N.png', random(), random(),  50, 50);
        Kappas.push(Kappa);
        angular.forEach(Kappas, function(value, key) {
            Kappas[key].animate({x: KappaClaus.attr("x"), y: KappaClaus.attr("y")}, 6000);
        });
        KappaClaus.toFront();
    });*/
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
        };

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
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Kappa functions~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //~~~~~~~~~~~~Kappa spawn variables~~~~~~~~~~~
    var speed = 6000;
    var gameTime = 0;

    var KappaSpawner = function(){
        var Kappa = paper.image('http://i.imgur.com/W0QgS4N.png', random(), random(),  50, 50);
        Kappas.push(Kappa);
        KappaAnimater();
    };
    var KappaAnimater = function(){
        angular.forEach(Kappas, function(value, key) {
            Kappas[key].stop();
            Kappas[key].animate({x: KappaClaus.attr("x"), y: KappaClaus.attr("y")}, speed);
            KappaClaus.toFront();
        });
    };
    var KappaCollisionChecker = function(){
        angular.forEach(Kappas, function(value, key) {
            if( collision(  Kappas[key].attr('x'),  Kappas[key].attr('y'),  KappaClaus.attr('x'), KappaClaus.attr('y') )) {
                var gameEnd = function(){
                    paper.clear();
                    $interval.cancel(KappaSpawn);
                    Kappas.splice(0,Kappas.length);
                    gamechecker = true;
                    return gamechecker;
                };
                gameEnd();
            }
        })
    };
    var KappaRemover  = function(){
        KappaAnimater();
        angular.forEach(Kappas, function(value, key) {
            if(key<1){
                Kappas[key].remove();
                Kappas.splice(0,1);
                KappaClaus.toFront();
            }
        });
    };
    //~~~~~~~~~~~~Dynamic Kappa spawner~~~~~~~~~~~~~


    var KappaSpawn = $interval(function () {
        gameTime++;
        //Kappa spawner
        /*if(gameTime%80 === 0 ){
            KappaAnimater();
        }*/
        if(gameTime<3000 && gameTime%200 === 0 ){
            KappaSpawner();
        }
        //speed increase
        if(gameTime%2000  === 0){
            speed = speed / 2;
        }
        //level 2 spawning
        if(gameTime > 2000 && gameTime < 4000 && gameTime%100 === 0){
            KappaSpawner();
        }
        //level 3 spawning
        if(gameTime>4000 && gameTime%50 === 0){
            KappaSpawner();
        }
        if(gameTime>1){
            KappaCollisionChecker();
        }
        if(gameTime>5000 && gameTime%250 === 0){
            KappaRemover();
        }



    },1);

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~End game function~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   /* var collide = $interval( function() {
        angular.forEach(Kappas, function(value, key) {
            if( collision(  Kappas[key].attr('x'),  Kappas[key].attr('y'),  KappaClaus.attr('x'), KappaClaus.attr('y') )) {
                var gameEnd = function(){
                    paper.clear();
                    $interval.cancel(KappaSpawn);
                    $interval.cancel(collide);
                    Kappas.splice(0,Kappas.length);
                    gamechecker = true;
                    return gamechecker;
                };
                gameEnd();
            }

        })
    },100 );
*/

// Boss Kappa
    /*var aaa = $timeout(function(){ {
            $interval.cancel(dynKappaSpawner);
            $interval.cancel(scope.KappaSpawn);
            var kappaRoss = paper.image('http://i.imgur.com/W0QgS4N.png', random(), random(), 100, 100);
            var KappaSpawn1 = $interval(function () {
                var kappaRossMinions = [];
                var Kappa = paper.image('http://i.imgur.com/W0QgS4N.png', kappaRoss.attr('x'), kappaRoss.attr('y'), 50, 50);
                kappaRossMinions.push(Kappa);
                angular.forEach(kappaRossMinions, function (value, key) {
                    kappaRossMinions[key].stop();
                    kappaRossMinions[key].animate({x: random(), y: random()}, 1000);
                    var bbb = $timeout(function(){
                        kappaRossMinions[key].delete();
                    },4000);
                })

            }, 200);
        }},9000)*/
};
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Game starter~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

        $interval(function(){
if(gamechecker===true){
    GameBegin();
}},100);

       var KappaRoss = paper.image('http://i1.kym-cdn.com/photos/images/facebook/001/037/049/75d.png',150,150,150,150);
        KappaRoss.click(GameBegin);
    }

    return {
        restrict: 'E',
        replace: true,
        scope: true,
        link: link,
        template: '<div id="testCanvas" style="border: 1px solid #E0E0E0;"></div>'
    }
}]);