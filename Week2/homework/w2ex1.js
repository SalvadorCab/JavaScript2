// Askisi 1

const myNumbers = [1, 2, 3, 4];

// // 1os tropos
// const evenNumbers = myNumbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);

// const doubleEvenNumbers = evenNumbers.map(number => number * 2);
// console.log(doubleEvenNumbers);


// 2os tropos
const doubleEvenNumbers = myNumbers
    .filter(number => number % 2 === 0)
    .map(number => number * 2);
console.log(doubleEvenNumbers);
