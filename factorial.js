// 7!
function Factorial(numbers){
    let result = 1;
    for(let i =1; i <= numbers; i++){
        result = result * i;

    }
    return result;
}
const result = Factorial(7);
console.log(result);