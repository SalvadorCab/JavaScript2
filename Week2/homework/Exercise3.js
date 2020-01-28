const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

const newbasket = fruitBasket.filter(funct);
function funct (item){
  var extract = item != 'Lemon';  
  return extract;
  }
  console.log("My mom bought me a fruit basket, containing " + newbasket +" !")