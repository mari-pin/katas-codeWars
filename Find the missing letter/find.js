function findMissingLetter(array)

{ // recorrer el array del alfabeto
   const newArray = []
    //guardar el alfabetro en una variable global
    const alfabetoMinusculas = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    //iterar sobre el arreglo del alfabeto

    for (let i = 0;i < alfabetoMinusculas.length; i ++){
        //cuando encontremos k el array[0]=== iteracion actual del alfebeto
        if (array[0]=== alfabetoMinusculas[i]) {//comparar de uno en uno cada array hasta encontrar una iteracion donde cada elemento sea diferente

          //comparar de una en una cada array hasta encontrar una iteración donde cada elemento sea diferente
          for (let j = 1; j < array.length; j++){
              if (array[j] !== alfabetoMinusculas[i + j]){
                  resultado = alfabetoMinusculas [i + j];
                  break;
              }
          } 
          break; 
        }
    }
    const alfabetoMayusculas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for (let i = 0; i < alfabetoMayusculas.length; i++){
        if (array[0] === alfabetoMayusculas[i]){
            for (let j = 1; j< array.length; j++){
                console.log( alfabetoMayusculas[i + j])
                if (array[j] !== alfabetoMayusculas[i + j]){
                    resultado = alfabetoMayusculas[i + j];
                    break;
                }
            }
            break;
        }
    }
    return resultado;
}
    
    
 







console.log(findMissingLetter(['a','b','c','d','f']), 'e');
console.log(findMissingLetter(['O','Q','R','S']), 'P');
