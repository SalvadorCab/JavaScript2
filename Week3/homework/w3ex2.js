// // Askisi 2
// // I just found it on the web and I'm not happy =(
const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

function removeDuplicates(lettersArray) {
    let seen = {};
    let out = [];
    let j = 0;
    for (let i = 0; i < lettersArray.length; i++) {
        let item = lettersArray[i];
        if (seen[item] !== 1) {
            seen[item] = 1;
            out[j++] = item;
        }
    }
    return out;
}
console.log(removeDuplicates(letters))