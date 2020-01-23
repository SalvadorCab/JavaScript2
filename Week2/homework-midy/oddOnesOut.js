const myNumbers = [1, 2, 3, 4, 5, 6];

function doubleEvenQuicker(numbers) {
  const evens = numbers.filter(num => num % 2 === 0);
  const doubledEvens = evens.map(num => num * 2);
  return doubledEvens;
}

console.log(doubleEvenQuicker(myNumbers)); // Logs "[4, 8]" to the console
