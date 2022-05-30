describe('satringCalculator', ()=>{
    it('returns 0 if an empty string is given', ()=>{
    //arrange

    // act
     let calculate = stringCalculator('')
    //asserts
    expect(calculate).toBe(0)
    })
    it ('returns the number if only one is given', ()=>{
        let calculate = stringCalculator('3')
        expect (calculate).toBe(3)
    })  
    it ('returns the number if only one is given', ()=>{
        let calculate = stringCalculator('4')
        expect (calculate).toBe(4)
    })  
    it ('returns the sum of two numbers separate by coma', ()=>{
        let total = stringCalculator('1,2')
        expect (total).toBe(3)
    })
    it ('returns the sum of two numbers separate by coma', ()=>{
        let total = stringCalculator('2,2')
        expect (total).toBe(4)
    })
})
 function stringCalculator(string){
     if (isEmpty(string)){
         return 0
     }else { 
         if(includesComaIn(string)){
             return sumNumbersIn(string)
         }
         return Number(string) 
     }
}
function sumNumbersIn(string){
    const numbers = string.split(',')
    let total = 0
    numbers.forEach(number => {
        total+= Number(number)     
    });
    return total
}
 function isEmpty(string){
     return (string === '')
 }
 function includesComaIn(string){
     return (string.includes(','))
 }