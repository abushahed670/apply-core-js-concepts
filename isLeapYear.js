function isLeapYear(year){
    const reminder = year % 4;
    if(reminder ===0){
        // console.log('This year is a Leap year', year);
        return true;
    }
    else{
        // console.log('This year is not a leap year', year);
        return false;

    }
}
// isLeapYear(2023);
// isLeapYear(2020);

const isMyYearIsLeapYear = isLeapYear(1994);
console.log(isMyYearIsLeapYear);

const isHerYearIsLeapYear = isLeapYear(2023);
console.log(isHerYearIsLeapYear);