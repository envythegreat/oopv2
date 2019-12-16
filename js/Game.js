/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /**
  * @class Game
  */
class Game {
    constructor(){
        this.missed = 0
        this.phrases = this.createPhrases()
        this.activePhrase = null
    }
    /**
     * Begins game by selecting a random phrase and displaying it to user 
     */
    startGame(){
        this.resetGame()
        this.activePhrase = this.getRandomPhrase()
        this.activePhrase.addPhraseToDisplay()
    }
    /**
     * Selects random phrase from phrases property 
     * @return {Object} Phrase object chosen to be used 
     */
    getRandomPhrase(){
        const randomIndex = Math.floor((Math.random() * this.phrases.length))
        return game.phrases[randomIndex]
    }
    /**   
     * Creates phrases for use in game  
     *  @return {array} An array of phrases that could be used in the game  
     */ 
    createPhrases(){
       return [
           new Phrase ('Time to create your phrases'),
           new Phrase ('Here s the documentation'),
           new Phrase ('Inside the Game class'),
           new Phrase ('the game will randomly choose'),
           new Phrase ('You can copy the text'),
       ]
    }

    /**
     * checks to see if the player has revealed all of the  letters in the active phrase
     * @returns {Boolean}  True if game has been won, false if game wasn't won
     */
    checkForWin() {
        return $('.hide').length == 0
    }

    /**
     *  Increases the value of the missed property 
     * Removes a life from the scoreboard 
     *  Checks if player has remaining lives and ends game if player is out 
     */
    removeLife() {
        $('.tries img')
            .get(this.missed)
            .setAttribute('src', 'images/lostHeart.png')
        this.missed++
        
        if (this.missed == 5 ) {
            this.gameOver(false)
        }
    }
    /**
     * Reset the game
     */
    resetGame() {
		$('#phrase ul').empty()
        $('.key')
            .removeClass('chosen wrong')
		    .removeAttr('disabled')
		$('.tries img').attr('src', 'images/liveHeart.png')
    }
    
    /**
     * Displays game over message 
     * displays the original start screen overlay
     * @param {boolean} gameWon - Whether or not the user won the game  
     */
    gameOver(gameWon) {
        const overly = $('#overlay')
                .removeClass('start')
        const h1Message = $('#game-over-message')
        if (gameWon) {
            h1Message.text('You Win')
            overly.addClass('win')
        } else{
            h1Message.text('You Lose')
            overly.addClass('lose')
        }

        overly.delay(300).slideDown()
    }

    /**
     * Handles onscreen keyboard button clicks 
     * @param (HTMLButtonElement) button - The clicked button element  
     */
    handleInteraction(button){
        // console.log(button)
        const letter = button.text()
        let letterCheckResult  = this.activePhrase.checkLetter(letter)
        let cssClass = 'chosen'

        if (letterCheckResult){
            this.activePhrase.showMatchedLetter(letter)
            if (this.checkForWin()){
                this.gameOver(true)
            }
        }else{
            cssClass = 'wrong'
            this.removeLife()
        }
        button.addClass(cssClass)
            .attr('disabled', true)
            // console.log(letter, letterCheckResult)
    }
}
