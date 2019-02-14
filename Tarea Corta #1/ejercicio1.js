
/**
 * @param {*} phrase 
 * 
 */

function isPanagram(phrase) {
    phrase = phrase.toLowerCase()
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    for (i=0; i<alphabet.length; i++){
      if (!phrase.includes(alphabet.charAt(i))){
        console.log("No contiene todas las letras del alfabeto!!")
        return
      }
    }
    console.log(phrase + " - contiene todas letras del alfabeto!!")
}

function main() {
    isPanagram("Th quick brown fox jumps over th lazy dog");
}

main();
