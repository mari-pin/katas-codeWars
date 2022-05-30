function solve(s){
    //necesitamos una estructura que contenga las vocales
    
    const vocales = {
        a: true,
        e:true,
        i: true,
        o: true,
        u: true,
    }
    //necesitamos un valor que mantenga registro de la  Mayor cantidad de vocales seguidas (0)
    let cantidadMayor = 0;
    //necesitamos un valor que mantenga registro de la  cantidad de vocales actual seguidas
    let cantidadActual = 0;
    
    const arr = s.split("");
    
    //recorrer el array
    for ( let i = 0; i < arr.length; i++){
        const elemento = arr[i];
        if (vocales[elemento]) {
            //si un elemento es una vocal ++1
            cantidadActual++;
        }else {
            if( cantidadActual > cantidadMayor ){ 
                //si es una consonante no ++1
                cantidadMayor = cantidadActual;
                
            }
            cantidadActual = 0;
        }
    }
     //devolvemos el valor final
     return cantidadMayor;
        
}


console.log(solve("codewarriors"),2);
console.log(solve("suoidea"),3);
console.log(solve("ultrarevolutionariees"),3);
console.log(solve("strengthlessnesses"),1);
console.log(solve("cuboideonavicuare"),2);
console.log(solve("chrononhotonthuooaos"),5);
console.log(solve("iiihoovaeaaaoougjyaw"),8);


