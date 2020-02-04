function removeDuplicates(arr)  {
    console.log([...new Set(arr)]);
}

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

removeDuplicates(letters);

