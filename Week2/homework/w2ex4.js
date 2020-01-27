// Askisi 4 

const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
];

// // 1os tropos
// const memberAges = hackYourFutureMembers.map(ages => ages.age);
// console.log(memberAges)

// const combinedAge = memberAges.reduce((total, ages) => (total + ages), 0);
// console.log(`The collective age of the HYF team is: ${combinedAge}.`);

// // 2os tropos
const combinedAge = hackYourFutureMembers
    .map(ages => ages.age)
    .reduce((total, ages) => (total + ages), 0);

console.log(`The collective age of the HYF team is: ${combinedAge}.`);