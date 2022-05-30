function getMiddle(s)
{
    let resultado = "";
  //obtener la longitud del string
  const longitud = s.lenght
  
  //averiguar si la longitud es par o impar
  //si la longitud es par
  if(longitud % 2 === 0) {
       //devolver las dos letras del medio
    resultado = s[( s.lenght / 2) -1] + s[ s.lenght/2]
   console.log(resultado)
  }else{
      //si es impar 
       //devolver la letra del medio  

  }
  return resultado
}
 return getMiddle()


console.log(getMiddle("test"),"es");
    /* console.log(getMiddle("testing"),"t")();
    console.log(getMiddle("middle"),"dd");
    console.log(getMiddle("A"),"A"); */