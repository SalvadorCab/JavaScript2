'use strict'
const removeDuplicates = array => {
    let newArray = [];
    array.forEach(item => {
        if (newArray.indexOf(item) === -1) {
            newArray.push(item);
        }
    });
    return newArray;
}

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
console.log(removeDuplicates(letters));