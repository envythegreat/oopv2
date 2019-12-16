/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 /**
  * @class Phrase
  */
 class Phrase{
     /**
      * Constructor
      * @param {Phrase} phrase 
      */
     constructor(phrase) {
         this.phrase = phrase.toLowerCase();
     }

     /**
      *  Display phrase on game board 
      */
     addPhraseToDisplay(){
        const phrasePlacehoder =  $('#phrase ul')
        const letters = this.phrase.split('')
        
        letters.forEach(letter => {
            $('<li>')
                .text(letter)
                .addClass(letter === ' ' ? 'space' : `hide letter ${letter}`)
                .appendTo(phrasePlacehoder)
        })
    }

    /**
     *  Checks to see if the letter selected 
     * @param {char} letter 
     * @returns Boolean
     */
     checkLetter(letter){   
        return this.phrase.indexOf(letter) >= 0
     }

     /**
      * Reveals the letter(s) on the board that matches the  player's selection
      * @param {char} letter 
      */
     showMatchedLetter(letter) {
         $(`.letter.${letter}`)
         .removeClass('hide')
         .addClass('show')
     }
}
