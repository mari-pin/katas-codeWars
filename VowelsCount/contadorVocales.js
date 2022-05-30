/* Primerwa solucion */
function getCount(str) {
    let vowelsCount = 0;
    //creamos un objeto para las vocales
    const vowels = {
        a:true,
        e:true,
        i:true,
        o:true,
        u:true,
    }
    
    // iterar sobre la hilera de caracteres
    for (let i = 0; i < str.length; i++){
        const actualLetter = str[i]
         //cuando la letra actual es una vocal
        if(vowels[actualLetter]){
             //incrementamos el valor vowelsCount
            vowelsCount ++
        }
        
    }  
    //devuelve el valor  
    return vowelsCount;
  }

/* Segunda solucion */
function getCount(str) {
    
    //creamos un objeto para las vocales
    const vowels = {
        a:true,
        e:true,
        i:true,
        o:true,
        u:true,
    }
    //Convertir el string en un array
    const array = str.split("");
    const result = array.reduce((accumulador,letra)=>{
        if(vowels[letra]){
            //le suma 1 al valor 
            accumulador++
        }
        //nos devuleve el valor total del accumulador
       return accumulador
    },0)
    
    return result
}

/* solucion mas corta */
function getCount(str) {
    
    //creamos un objeto para las vocales
    const vowels = {
        a:true,
        e:true,
        i:true,
        o:true,
        u:true,
    }
    return str.split("").reduce((acc,letra)=> vowels[letra]? ++acc : acc, 0)
}
 
   console.log(getCount("abracadabra"), 5) 
