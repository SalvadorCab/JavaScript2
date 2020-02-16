
// 1) Write a program that calculates the combined age of every member
// 2) Make use of the map function to get the ages
// 3) It should contain a function that takes a callback
// 4) The callback adds all the ages together and returns the number
// 5) The main function should log the string "The collective age of the HYF team is: [number]" 
//    to the console, and afterwards return the number

function main(){
    const hackYourFutureMembers = [
        { name: 'Wouter', age: 33 },
        { name: 'Federico', age: 32 },
        { name: 'Noer', age: 27 },
       { name: 'Tjebbe', age: 22 },
     ];

    const calculateCombinedAges = hackYourFutureMembers
        .map(ages => ages.age)
        .reduce((firstAge, secondAge) => firstAge + secondAge);
    
    console.log("The collective age of the HYF team is: " + calculateCombinedAges);
}

main();
