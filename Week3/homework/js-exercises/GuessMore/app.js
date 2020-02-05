// Snippet
const x = 9;
function f1(val) {
    val = val + 1;
    return val;
}
f1(x);
console.log(x);

const y = { x: 9 };
function f2(val) {
    val.x = val.x + 1;
    return val;
}
f2(y);
console.log(y);


// x is a primitive so referenced by value, in the whole process of f1() we don't change directly the value of x which remains 9 till being logged. In the case of y, since it is an object it changes by reference, so the manipulation in f2 changes the actual value of x:9 to x:10 so any object that refers to this object will be changed.