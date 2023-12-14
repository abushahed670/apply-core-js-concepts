function milesToKm(miles){
    const km = miles * 1.60934;
    return km;
}

const milesDistance = 2;
const kmDistance = milesToKm(milesDistance);
console.log('distance in kilometer:', kmDistance);