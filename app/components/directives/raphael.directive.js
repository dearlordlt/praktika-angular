'use strict'

angular.module('myApp').directive('raphaelDirective', ['$interval', function ($interval) {

    function link(scope, element, attr) {

        var canvas = $("#testRaphael");
        var paper = Raphael("testRaphael", canvas.width(), canvas.height());

        var playButton = paper.image('https://pixabay.com/static/uploads/photo/2012/04/11/12/41/button-28032_960_720.png',
            200, 100, 100, 100);


        //------------------------------------------- pagrindine funkcija -------------------------------------------

        var startGame = function () {
            paper.clear();
            var spawnX = undefined;
            var pokeball = paper.image('http://s4.postimg.org/al7c16f0d/Pokeball.png', 200, 220, 100, 80);
            var counterPokemon = 0;



        //----------------------------------------- pokeball'o judinimas ----------------------------------------


        var onmove = function (dx) {
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
        });

        function collide(a) {
            a.remove();
            counterPokemon += 1;
        }


        //------------------------------------------ pokemonu paveiksleliu masyvas ------------------------------------------
        var pokemons = ['imgPikachu', 'imgEevee', 'imgJigglypuff'];


        //-----------------------------------------------parenkamas random pokemonas----------------------------------------

        var falling = function (pokemonNumber, spawnX, pokemonSpeed) {
            pokemons[pokemonNumber].animate({x: spawnX, y: canvas.height()}, pokemonSpeed)
        };

        var callPokemon = function () {

            var pokemonNumber = Math.floor((Math.random() * pokemons.length - 1) + 1);

            var pokemonSpeed = Math.floor((Math.random() * 10000) + 1);

            spawnX = Math.floor((Math.random() * 420) + 1);


            if (pokemonNumber === 0) {
                pokemons[0] = paper.image ('http://67.media.tumblr.com/b7dfec94b6a10bdfc1872db90fdd41b1/tumblr_nnpya5Zo201uuo43ko1_1280.png',
                    spawnX, 0, 80, 80);
                falling(pokemonNumber, spawnX, pokemonSpeed);
            } else if (pokemonNumber === 1) {
                pokemons[1] = paper.image ('http://vignette4.wikia.nocookie.net/pokemon/images/2/26/133Eevee_Pokemon_Mystery_Dungeon_Red_and_Blue_Rescue_Teams.png/revision/latest?cb=20150106012220',
                    spawnX, 0, 80, 80);
                falling(pokemonNumber, spawnX, pokemonSpeed);
            } else if (pokemonNumber === 2) {
                pokemons[2] = paper.image ('http://robdodson.github.io/webcomponents-cascade/img/jigglypuff.png',
                    spawnX, 0, 80, 80);
                falling(pokemonNumber, spawnX, pokemonSpeed);
            }


        };

        //--------------------------------------------------- intervalas ----------------------------------------
        var interval = $interval(function () {
            callPokemon();
            return callPokemon();
        }, 1000, 10);

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