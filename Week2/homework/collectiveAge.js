const hackYourFutureMembers = [
    { name: 'Wouter', age: 33 },
    { name: 'Federico', age: 32 },
    { name: 'Noer', age: 27 },
    { name: 'Tjebbe', age: 22 },
];

function sum(item) {
    return colAge = item.reduce((acc, curr) => acc + curr, 0);
}

function collectiveAge(members, fn) {
    let ages = members.map(item => item.age)
    return sum(ages)
}

console.log(`The collective age of the HYF team is: ${collectiveAge(hackYourFutureMembers)} years`)