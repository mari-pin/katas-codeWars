//primera opcion de revolver

var isSquare = function(n){
    if (n < 0 ){return false}
    let resultado;
    //for loop
    for (let i = 0; i <= n;i ++){
        const multiply = i * i;
        if (multiply === i){
            //n es un cuadrado perfecto
           resultado = true;
           break;
        }else if (multiply > n ){
             //no es un cuadrado perfecto
            resultado = false;
            break;   
        }
    }
    return resultado; 
  }

  // Segunda opcion de resolver
isSquare = function (n) {
    const squarePerfect = Math.sqrt(n)
    const result = squarePerfect % 1;
   if (result === 0){
       return true
   }else {
       return false
   }
}

// tercera solucion es l 2º abreviada
 isSquare = function(n){
 return Math.sqrt(n)% 1 === 0 ? true : false;

}






  
 
      console.log(isSquare(-1), false /* "-1: Negative numbers cannot be square numbers" */);
      console.log(isSquare( 0), true/*  "0 is a square number (0 * 0)" */);
      console.log(isSquare( 3), false/*  "3 is not a square number" */);
      console.log(isSquare( 4), true /* "4 is a square number (2 * 2)" */);
      console.log(isSquare(25), true/*  "25 is a square number (5 * 5)" */);
      console.log(isSquare(26), false /* "26 is not a square number" */);
  