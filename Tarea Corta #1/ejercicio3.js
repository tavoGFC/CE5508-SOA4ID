/**
 * 
 * @param {*} number 
 */

function isArmstrong(number){
    exp = number.toString().length
    var sum = 0
    var number1 = number.toString()
    for(i=0; i<exp; i++){
      sum += Math.pow(parseInt(number1.charAt(i)), exp)
    }
    if (sum == number){
      console.log(number + " es un número de Armstron, su suma es: " + sum)
    }
    else{
      console.log(number + " no es un número de Armstron, su suma es: " + sum)
    }    
}

function main(){
    isArmstrong(153);
    isArmstrong(151);
    isArmstrong(-15);
}

main();
