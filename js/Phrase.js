/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase{
     constructor(phrase) {
         this.phrase = phrase.toLowerCase();
     }
     addPhraseToDisplay(){
        const phrasePlace =  $('#phrase ul');
        const selectedPhrase = this.phrase.split('');
        console.log(this.phrase)
        //.replace(/\s/g, '')
        selectedPhrase.forEach(element => {
            const newLi = $("<li>")
            newLi.text(`${element}`)
            phrasePlace.append(newLi)
            if (element === " ") {
                newLi.addClass('space')
            } else {
                newLi.addClass('hide letter '+ `${element}`+'')
            }
            // console.log(phrasePlace);
        });
    }
     checkLetter(letter){
        let splitPhrase = this.phrase.split('');
        const checkedLetter = splitPhrase.includes(letter)
        return checkedLetter;
     }
     showMatchedLetter(letter) {
         const allLetters = $('.letter')
         allLetters.each((i, element)=>{
            if (letter === $(element).text()){
                $(element).removeClass('hide')
                          .addClass('show')
            }
            // console.log($(element).text())
         })

     }
}