function Factorial(numbers){
    let result = 1;
    for(let i = numbers; i >= 1; i--){
        result = result * i;
        console.log(i);
    }
    return result;
}
const numbers = 5;
const fact = Factorial(numbers);
console.log('the factorial of:', numbers,  fact);