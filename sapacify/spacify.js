function spacify(str) {
    // separa el string en un array
   return array = str.split("").join(" ")
    /* const arrEspaciado = array.map((caracter,indice) =>{
      //a cada posicion del array le añadimos un espacio
      if (indice !== array.length -1) {
        return caracter + "\xa0"//pone 2 espacios 
      }
      return caracter
    })
   
    //devolvemos el arrayEspaciado, sin las comas 
     return arrEspaciado.join("") */
  }



    









    console.log(spacify('hello world'),'h e l l o   w o r l d');
    console.log(spacify('12345'),'1 2 3 4 5');
