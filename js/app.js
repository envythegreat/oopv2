/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const game = new Game();
const Overly = $('#overlay');
const btRest = $('#btn__reset')
const keyBtn = $('button.key')
btRest.on('click', () => {
    game.startGame();
    Overly.slideUp();
    // game.activePhrase.showMatchedLetter('a')
    // game.checkForWin();
    // game.removeLife();
})
keyBtn.on('click', (e)=>{
    game.handleInteraction($(e.target))
})
