    // Write a function
    // Use the filter array function to take out the lemons
    // Output a string that says: "My mom bought me a fruit basket, containing [array of fruits] !"

const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

const fruitsWithoutLemons = fruitBasket.filter(fruit => fruit.toLowerCase() !== "lemon");

console.log("My mom bought me a fruit basket, containing " + fruitsWithoutLemons.join(", ") + ".");