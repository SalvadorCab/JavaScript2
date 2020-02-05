function threeFive(startIndex, endIndex, three, five) {
  const numbers = [];

  const startParsed = parseInt(startIndex, 10);
  const endParsed = parseInt(endIndex, 10);

  const random = (start, end) => {
    for (let i = 0; i < 6; i += 1) {
      numbers.push(Math.floor(Math.random() * (end - start + 1) + start));
    }
    return numbers;
  };

  random(startParsed, endParsed);
  numbers.forEach(number => {
    if (number % 3 === 0 && number % 5 === 0) {
      three(number);
      five(number);
    } else if (number % 3 === 0) {
      three(number);
    } else if (number % 5 === 0) {
      five(number);
    }
  });
  return numbers;
}

function sayThree(num) {
  console.log(`${num} can be divided by 3`);
}

function sayFive(num) {
  console.log(`${num} can be divided by 5`);
}

console.log(threeFive(2, 20, sayThree, sayFive));
