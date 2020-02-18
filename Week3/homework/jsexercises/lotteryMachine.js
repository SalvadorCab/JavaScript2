
function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];
    // make array with the values from start to end
    for(let i=startIndex; i <= stopIndex; i++){
        numbers.push(i);
    }
    // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
    numbers.forEach(element => {
        if(element % 3 === 0)
            console.log(threeCallback());
        if(element % 5 === 0)
            console.log(fiveCallback());
    })
  }
  
threeFive(10, 15, sayThree, sayFive);

function sayThree(){
    return "divisible by three";
}

function sayFive(){
    return "divisible by five";
}