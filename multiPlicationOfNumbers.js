// 1*2*3*4*5*6*7 //
function multiPlicationOfNumbers(numbers){
    let result = 1; //zero deowa jabe na bks multiplication e sob zero kore dibe
    for(let i =1; i <= numbers; i++){
        result = result * i;

    }
    return result;
}
const FinalResult = multiPlicationOfNumbers(7);
console.log(FinalResult)