// Askisi 4 
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

// Regarding the first case, it 'll be consoled log "9"
// because we just console log the value of the variable x.
// In the second case it prints "Object {x: 10}" because
// we print y which is declared as an object. Using the 
// function f2 we change the value of the element and from 9 it becomes 10.
