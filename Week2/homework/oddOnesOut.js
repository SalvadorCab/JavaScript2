const myNumbers = [1, 2, 3, 4];
function doubleEvenNumbers(numbers) {
    return numbers
        .filter(item => item % 2 === 0)
        .map(item => item * 2)
};

console.log(doubleEvenNumbers(myNumbers))