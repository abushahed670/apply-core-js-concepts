function  isEven(number){
    const reminder = number % 2;
    if( reminder === 0){
        // console.log('The number is Even')
        return true;
    }
    else{
        // console.log('The number is Odd')
        return false;
    }
    
}
// isEven(303);

const myNumberIsEven = isEven(122);
console.log(myNumberIsEven);
 const herNumberIsEven = isEven(133);
 console.log(herNumberIsEven);