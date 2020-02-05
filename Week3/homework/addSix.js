function createBase(a) {
    return function func1() {
        a = a + 6;
        return a
    }
}

var b = createBase(9);
console.log(b())
console.log(b())
console.log(b())