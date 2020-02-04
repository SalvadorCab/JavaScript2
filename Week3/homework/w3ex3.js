// Askisi 3

let a = 10;
const x = (function () {
    a = 12;
    return function () {
        // alert(a);
    };
})();

x();

// This function will pop up an alert window saying "12",
// because in the runtime compile,
// the function is hoisted so the variable a takes as a value
// the number 12.