/**
 * Funcion que indica si un numero correspode a un numero de Armstron
 * Muestra en consola el resultado y la suma correspondiente
 * @param {*} num 
 */

function isArmstrong(num){
  exp = num.toString().length
  var sum = 0
  var num_aux = num.toString()
  if (typeof(num) == 'number'){
    if (num >= 0){
      for(i=0; i<exp; i++){
        sum += Math.pow(parseInt(num_aux.charAt(i)), exp)
      }
      if (sum == num){
        console.log(num + " es un número de Armstron, su suma es: " + sum)
      }
      else{
        console.log(num + " no es un número de Armstron, su suma es: " + sum)
      }     
    }
    else{
      console.log("El numero debe ser positivo")
    }
  }
  else{
    console.log("El valor ingresado no es un numero")
  }
}


function main(){
    isArmstrong(153);
    isArmstrong(151);
    isArmstrong(-15);
    isArmstrong('12');
}

main();