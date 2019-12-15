/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrase();
        this.activePhrase = null;
    }
    startGame(){
        this.resetGame()
        // this.getRandomPhrase().addPhraseToDisplay();
        this.activePhrase = this.getRandomPhrase();
		this.activePhrase.addPhraseToDisplay();
    }
    getRandomPhrase(){
        const randNumber = Math.floor((Math.random() * this.phrases.length));
        return game.phrases[randNumber];
    }
    createPhrase(){
       const phrases = [
           new Phrase ('Time to create your phrases'),
           new Phrase ('Here s the documentation'),
           new Phrase ('Inside the Game class'),
           new Phrase ('the game will randomly choose'),
           new Phrase ('You can copy the text')
       ];
       return phrases;
    }
    checkForWin() {
        const p = $('.hide')
        // console.log(p.length)
        if (p.length == 0) {
            this.gameOver(true)
            return true;
        } else{
            return false;
        }
    }
    removeLife() {
        const allImg = $('.tries img');
        this.missed ++;
        const lostImg = 'images/lostHeart.png'
        // console.log(allImg[1])
        let i = this.missed - 1;
        allImg[i].src = lostImg;
        if (this.missed == 5 ) {
            this.gameOver(false);
        }
        // this.missed == 5 ? this.gameOver(false) : console.log('hello')
    }
    resetGame() {
		$('#phrase ul').empty();
		$('.key').removeClass('chosen');
		$('.key').removeClass('wrong');
		$('.key').removeAttr('disabled');
		$('.tries img').attr('src', 'images/liveHeart.png');
	}
    gameOver(status) {
        const Overly = $('#overlay');
        Overly.removeClass('start')
        const h1Message = $('#game-over-message');
        if (status) {
            h1Message.text('You Win');
            Overly.addClass('win');
        } else{
            h1Message.text('You Lose');
            Overly.addClass('lose');
        }


        Overly.slideDown();
    }
    handleInteraction(button){
        // console.log(button)
        let checkedLetter  = this.activePhrase.checkLetter(button.text())
        if (checkedLetter){
            this.activePhrase.showMatchedLetter(button.text())
            button.addClass('chosen').attr('disabled', true);
            let gameStatus = this.checkForWin(true);
            if (gameStatus){
                this.gameOver(true)
            }
        }else{
            button.addClass('wrong').attr('disabled', true);
            this.removeLife()
        }
        console.log(checkedLetter)
    }
}
