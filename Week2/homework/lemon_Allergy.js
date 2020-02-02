const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];
function noLemons(item) {
    return fruitBasket.filter(item => !item.includes('Lemon'));
}
console.log(`My mom bought me a fruit basket, containing ${noLemons(fruitBasket)}`);