function createBase(num) {
    return function(num2) {
      return num + num2;
    }
  }
  
  const addSix = createBase(6);
  console.log(addSix(9));
  console.log(addSix(18));
  console.log(addSix(30));
  