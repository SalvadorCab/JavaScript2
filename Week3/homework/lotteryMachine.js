function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];
    for (i = startIndex; i <= stopIndex; i++) {
        numbers.push(i)
    }
    for (let i in numbers) {
        if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
            threeCallback();
            fiveCallback();
        }
        else if (numbers[i] % 3 === 0) {
            threeCallback();
        }
        else if (numbers[i] % 5 === 0) {
            fiveCallback();
        }
    }
}

function threeCallback() {
    console.log(`Say 3`);
}
function fiveCallback() {
    console.log(`Say 5`);
}

console.log(threeFive(10, 15, threeCallback, fiveCallback))