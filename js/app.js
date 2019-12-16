/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 let game
const Overly = $('#overlay')
const btRest = $('#btn__reset')
const buttonsContainer = $('#qwerty')

btRest.on('click', () => {
    game = new Game()
    game.startGame()
    Overly.slideUp()
})

buttonsContainer.on('click', 'button.key', (e)=>{
    game.handleInteraction($(e.target))
})
