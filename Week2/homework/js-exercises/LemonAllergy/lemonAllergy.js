const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

const removeLemons = basket => {
    return basket.filter(item => item !== 'Lemon')
}

console.log(`My mother bought me a fruit basket containing: ${removeLemons(fruitBasket)}!`);