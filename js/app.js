/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 let game
const Overly = $('#overlay')
const btRest = $('#btn__reset')
const buttonsContainer = $('button.key')

btRest.on('click', () => {
    game = new Game()
    game.startGame()
    Overly.slideUp()
})

buttonsContainer.on('click', (e)=>{
    game.handleInteraction($(e.target))
})
// $('body').on('keyup', (e)=>{
//     let bKey = $('<button>').text(e.key).addClass(`key`)
//     // console.log(bKey.text())
//     game.handleInteraction(bKey)
// })
