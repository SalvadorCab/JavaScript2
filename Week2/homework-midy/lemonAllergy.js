const fruitBasket = [
  'Apple',
  'Lemon',
  'Grapefruit',
  'Lemon',
  'Banana',
  'Watermelon',
  'Lemon',
  'Orange',
];

function getRidOfLemons(basket) {
  const noLemons = basket.filter(fruit => fruit !== 'Lemon');
  const numberedFruit = noLemons.map(i => {
    i = i.toLowerCase();
    i = i + 's';
    return i;
  });
  return `My mom bought me a fruit basket, containing ${numberedFruit.join(', ')}!`;
}

console.log(getRidOfLemons(fruitBasket));
