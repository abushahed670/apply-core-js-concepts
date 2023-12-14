function isOdd(number){
    const reminder = number % 2;
    if( reminder == 1){
        return true;
        // console.log('The number is Odd')
    }
    else{
        // console.log('The number is Even')
        return false;
    }

}
// isOdd(122);
// isOdd(133);

const myNumberIsOdd = isOdd(393);
console.log(myNumberIsOdd);
const herNumberIsOdd = isOdd(122);
console.log(herNumberIsOdd);