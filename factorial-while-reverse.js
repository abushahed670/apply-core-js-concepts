function factorial(numbers){
    let i = numbers;
    let result = 1;
    while( i >= 1){
        result = result * i;
        i--;

    }
    return result;
}
const fact = factorial(7);
console.log(fact);