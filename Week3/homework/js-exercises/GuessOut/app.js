let a = 10;
const x = (function () {
    a = 12;
    return function () {
        alert(a);
    };
})();

x();


// It returns 12 because in line 2 we begin an IIFE declaration, so x is immediately assigned the closure of the function that outputs alert plus the value of the variable a that is 12 at the moment of the creation of the closure.