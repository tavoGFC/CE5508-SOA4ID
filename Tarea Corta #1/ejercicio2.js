/**
 * Funcion que segun dados 3 valores de los lados de un triangulo
 * Muestra en consola el tipo de triangulo al que pertenece
 * @param {*} sideA 
 * @param {*} sideB 
 * @param {*} sideC 
 */

function findTriangleType(sideA, sideB, sideC) {
  if(typeof(sideA) == 'number' && typeof(sideB) == 'number' && typeof(sideC) == 'number'){
    if(sideA == sideB && sideC == sideA && sideB == sideC){
      console.log("El triangulo es equilátero")
    }
    else if (sideA == sideB || sideA == sideC || sideB == sideC){
      console.log("El triangulo es isósceles")
    }
    else{
      console.log("El triangulo es escaleno")
    }
  }
  else{
    console.log("Los parametros no son numeros")
  }
}


function main(){
    findTriangleType(2, 2, 2);
    findTriangleType(2, 1, 5);
    findTriangleType(6, 9, 6);
    findTriangleType(1,2,'3');
}
  
main();