'use strict';

angular.module('myApp').factory('pokemonService', function () {

    var counterPokemon = 0;
    var missedPokemon = 0;
    var gameLevel = 1;

    return {
        counterPokemon: counterPokemon,
        missedPokemon: missedPokemon,
        gameLevel: gameLevel
    }
});
