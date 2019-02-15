
/**
 * Funcion que recibe una frase e indica si la frase es panagrama o no
 * muestra en consola el resultado
 * @param {*} phrase 
 * 
 */

function isPanagram(phrase) {
    phrase = phrase.toLowerCase()
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    
    for (i=0; i<alphabet.length; i++){
      if (!phrase.includes(alphabet.charAt(i))){
        console.log(phrase +  "- no es panagrama")
        return
      }
    }
    console.log(phrase + " - es un panagrama")
}

function main() {
    isPanagram("Th quick brown fox jumps over th lazy dog");
}

main();