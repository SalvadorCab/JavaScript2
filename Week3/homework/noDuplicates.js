const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

function removeDuplicates(array) {
    let unique = [];
    array.forEach(element => {
        if (unique.indexOf(element) === -1) {
            unique.push(element);
        }
    });
    return unique

}

console.log(removeDuplicates(letters))
