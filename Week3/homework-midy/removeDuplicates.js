const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

function removeDuplicates(array) {
  return [...new Set(array)];
}

console.log(removeDuplicates(letters));
