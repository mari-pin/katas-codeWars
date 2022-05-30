function flattenAndSort(array) {
    //guardar el resultado final en una variable
    const newArray = []
    
    // iterar sobre el primer array
    for(let i = 0;i < array.length; i++) {
       const arrayIntern = array[i]
        //iterar sobre el array interno
        for (let j = 0; j < arrayIntern.length; j++){
            const internElement = arrayIntern[j]
           //agregar cada elemento del array interno al resultado final aun no lo estamos ordenendo
            newArray.push(internElement)

        }
    }
    //devolver el resultado final
    newArray.sort((firstElement, lastElement) =>{
        return firstElement - lastElement;
        
       /* hemos hecho el if y luego el refactor
        if (firstElement < lastElement) {
            return -1
        }else if (firstElement > lastElement){
            return 1
        }else {
            return 0
        } */
    
  })
  return newArray;
}


  
    console.log(flattenAndSort([]), []);
    console.log(flattenAndSort([[], []]), []);
    console.log(flattenAndSort([[], [1]]), [1]);
    console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
    console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);
 