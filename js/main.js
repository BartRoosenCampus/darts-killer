"use strict";

import {Player} from "./Player.js";
import {Game} from "./Game.js";

const page = {
    testBtn: document.getElementById("test"),
    formsArea: document.getElementById('forms'),
    playersListArea: document.getElementById('players'),
    targetsArea: document.getElementById('targets'),
    nameInput: document.getElementById('name'),
    addPlayerBtn: document.getElementById('addPlayer'),
    deleteAllPlayersBtn: document.getElementById('deleteAllPlayers'),
    gameDashboard: document.getElementById('gameDashboard'),
}

const game = new Game(page);
game.generatePlayersList();

page.testBtn.addEventListener("click", (e) => {
    game.assignNumbers();
    console.log(game);
});

page.addPlayerBtn.addEventListener('click', e => {
    if ('' !== page.nameInput.value) {
        game.addPlayer(new Player(page.nameInput.value));
    }
    // game.addPlayer(new Player("Bart"));
    // game.addPlayer(new Player("Enara"));
    // game.addPlayer(new Player("Paul"));
    // game.addPlayer(new Player("Bertje"));
    // game.addPlayer(new Player("Pickles"));

    page.nameInput.value = '';
    page.nameInput.focus();
});

page.deleteAllPlayersBtn.addEventListener('click', e => {
    game.deleteAllPlayers();
});