/**
 * 
 * @param {*} sideA 
 * @param {*} sideB 
 * @param {*} sideC 
 */

function findTriangleType(sideA, sideB, sideC) {
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


function main(){
    findTriangleType(2, 2, 2);
    findTriangleType(2, 1, 4);
    findTriangleType(6, 9, 6);
}
  
main();
