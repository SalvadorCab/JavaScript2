const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
];

const calculateSum = array => {
    return array.reduce((sum, item) => sum + item, 0);
}

const calculateCombinedAges = (members, fn) => {
    ages = members.map(member => member.age);
    console.log(`The collective age of the HYF team is: ${fn(ages)} years`);
}

calculateCombinedAges(hackYourFutureMembers, calculateSum);