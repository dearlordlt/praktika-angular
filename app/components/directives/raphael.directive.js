'use strict';

angular.module('myApp').directive('raphaelDirective', ['$interval', 'pokemonService', '$timeout', function ($interval, pokemonService, $timeout) {

    function link(scope, element, attr) {

        var canvas = $("#testRaphael");
        var paper = Raphael("testRaphael", canvas.width(), canvas.height());
        var pokemons = undefined;
        var bigPokemon = undefined;
        var levelUp = undefined;
        var addedPokemons = 3;
        var playButton = paper.image('https://pixabay.com/static/uploads/photo/2012/04/11/12/41/button-28032_960_720.png',
            200, 100, 100, 100);


        //------------------------------------------- pagrindine funkcija -------------------------------------------

        var startGame = function () {

            paper.clear();
            var spawnX = undefined;
            var spawnXBig = undefined;
            var gameOverImg = undefined;
            var pokeball = paper.image('http://s4.postimg.org/al7c16f0d/Pokeball.png', 200, 220, 100, 80);
            var pokemonArray = [];
            var level = 1;


            //----------------------------------------- pokeball'o judinimas ----------------------------------------

            document.addEventListener("keydown", keyDown, false);
            function keyDown(e) {
                var keyCode = e.keyCode;
                if (keyCode === 37) {
                    pokeball.attr({x: pokeball.attr("x") - 10});
                    //    pokeball.animate({x: pokeball.attr("x") - 10, y: 220}, 1);
                }
                else if (keyCode === 39) {
                    pokeball.attr({x: pokeball.attr("x") + 10});
                    // pokeball.animate({x: pokeball.attr("x") + 10, y: 220}, 10);
                }

//collision();
            }

            /*   var onmove = function (dx) {
             pokeball.toFront();
             console.log();
             this.attr({x: this.ox + dx});
             },

             onstart = function () {
             this.ox = this.attr("x");
             },

             onend = function () {
             this.animate()
             };

             pokeball.drag(onmove, onstart, onend).onDragOver(function (a) {
             collide(a);
             });*/
            /*
             function collide(a) {
             if ((pokeball.attr("x") >= pokemons.attr("x")) && ((pokeball.attr("x") + 100 >= pokemons.attr("x") + 80)) &&
             (pokeball.attr("y") >= pokemons.attr("y") + 40)) {
             a.remove();
             pokemonService.counterPokemon += 1;
             pokemonService.missedPokemon -= 1;
             console.log(pokemonService.counterPokemon);
             }
             }*/


            //-----------------------------------------------parenkamas random pokemonas----------------------------------------

            var falling = function (pokemonNumber, spawnX, pokemonSpeed) {
                pokemons.animate({x: spawnX, y: canvas.height()}, pokemonSpeed)
            };

            var callPokemon = function () {

                var pokemonNumber = Math.floor((Math.random() * addedPokemons - 1) + 1);

                var pokemonSpeed = 10000 / level;

                spawnX = Math.floor((Math.random() * (canvas.width() - 80)) + 1);


                if (pokemonNumber === 0) {
                    pokemons = paper.image('http://67.media.tumblr.com/b7dfec94b6a10bdfc1872db90fdd41b1/tumblr_nnpya5Zo201uuo43ko1_1280.png',
                        spawnX, 0, 80, 80);
                    pokemonArray.push(pokemons);
                    falling(pokemonNumber, spawnX, pokemonSpeed);
                } else if (pokemonNumber === 1) {
                    pokemons = paper.image('http://vignette4.wikia.nocookie.net/pokemon/images/2/26/133Eevee_Pokemon_Mystery_Dungeon_Red_and_Blue_Rescue_Teams.png/revision/latest?cb=20150106012220',
                        spawnX, 0, 80, 80);
                    pokemonArray.push(pokemons);
                    falling(pokemonNumber, spawnX, pokemonSpeed);
                } else if (pokemonNumber === 2) {
                    pokemons = paper.image('http://robdodson.github.io/webcomponents-cascade/img/jigglypuff.png',
                        spawnX, 0, 80, 80);
                    pokemonArray.push(pokemons);
                    console.log(pokemonArray);
                    falling(pokemonNumber, spawnX, pokemonSpeed);
                }

                pokemons.toBack();

            };

            var callBig = function () {
                var bigPokemonSpeed = Math.floor((Math.random() * 10000) + 1);
                spawnXBig = Math.floor((Math.random() * (canvas.width() - 100)) + 1);
                bigPokemon = paper.image('http://cdn.bulbagarden.net/upload/thumb/f/fb/143Snorlax.png/250px-143Snorlax.png',
                    spawnXBig, 0, 200, 200);
                bigPokemon.animate({
                    x: Math.floor((Math.random() * (canvas.width() - 100)) + 1),
                    y: canvas.height()
                }, bigPokemonSpeed)
            };


            //--------------------------------------- collision -----------------------------------------------------

            var collision = function (element) {
                pokemonArray.forEach(function (element) {
                    if ((pokeball.attr("x") <= element.attr("x")) && ((pokeball.attr("x") + 100 >= element.attr("x") + 80)) &&
                        (pokeball.attr("y") <= element.attr("y") + 40)) {
                        delete pokemonArray[element];
                        element.remove();
                        pokemonService.counterPokemon += 1;

                        if (pokemonService.counterPokemon === 10 * level) {
                            level++;
                            pokemonService.counterPokemon = 0;
                            pokemonService.gameLevel = level;
                            var levelUpImg = function () {
                                levelUp = paper.image('http://static1.squarespace.com/static/540f7fbbe4b0e5736ba098f7/t/552af100e4b0042c027d3965/1428877568443/',
                                    150, 50, 200, 200);
                                $timeout(function () {
                                    levelUp.remove()
                                }, 1000)
                            };
                            levelUpImg();


                        }
                    }
                    else if (element.attr("y") > 250) {
                        pokemonService.missedPokemon += 1;
                        delete pokemonArray[element];
                        element.remove();
                    }
                });
            };

            //-------------------------------------------------- game over ------------------------------------------

            var gameOver = function(bigPokemon, pokeball) {
                if (bigPokemon !== undefined) {
                    if ((pokeball.attr("x") >= bigPokemon.attr("x")) && (pokeball.attr("x") + 100 <= bigPokemon.attr("x") + 200) &&
                        pokeball.attr("y") + 40 <= bigPokemon.attr("y") + 200) {
                        bigPokemon.stop();
                        console.log("game over?");
                        $interval.cancel(intervalCollision);
                        $interval.cancel(interval);
                        $interval.cancel(intervalBig);
                        gameOverImg = paper.image('https://cdn.weasyl.com/static/media/e3/94/d1/e394d1fb4b98402febb77885a501319934ac8af3b1f998165eb3622403a63356.png',
                            100, 50, 300, 200);
                    }
                    else if ((bigPokemon.attr("x") >= canvas.width()) || (bigPokemon.attr("y") >= canvas.height())){
                        bigPokemon.remove();
                    }
                }
            };


            //--------------------------------------------------- intervalai ----------------------------------------

            var intervalCollision = $interval(function () {
                collision(element);
                gameOver(bigPokemon, pokeball);
            }, 10);

            var interval = $interval(function () {
                callPokemon();
            }, 1000);

            var intervalBig = $interval(function () {
                callBig();
            }, 10000)



        };

        //--------------------------------------------------- play button ------------------------------------------

        playButton.click(startGame);
    }


    return {
        restrict: 'E',
        replace: true,
        scope: true,
        link: link,
        template: '<div id="testRaphael" style="width: 500px; height:300px; border: 5px solid #000000; margin-left: 30%; margin-top: 20px; margin-bottom: 20px;"></div>'
    }
}]);