'use strict'
const main = (startValue, endValue, ifDivBy3, ifDivBy5) => {
    let array = [];
    for (let i = startValue; i <= endValue; i++) {
        array.push(i);
    }
    array.forEach(item => {
        if (item % 3 === 0 && item % 5 === 0) {
            ifDivBy3();
            ifDivBy5();
        } else if (item % 3 === 0) {
            ifDivBy3();
        } else if (item % 5 === 0) {
            ifDivBy5();
        }
    })
}


main(10, 15, () => {
    console.log(`Say 3`);
}, () => {
    console.log(`Say 5`);
})