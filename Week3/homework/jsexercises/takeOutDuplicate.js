
// Write a function called removeDuplicates, that takes in an array as an argument:
// The function should remove duplicate letters. So the result should be:

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

function removeDuplicates(letterArray){
    finalArray = [];
    letterArray.forEach(element => {
        if(!(finalArray.includes(element))){
            finalArray.push(element);
        }
    });
    return finalArray;
}

console.log(removeDuplicates(letters));

// Create an array called finalArray that will contain the filtered data
// Iterate through the argument Array and check if the element is repeated in finalArray, if
// not add the value to finalArray
// Return finalArray