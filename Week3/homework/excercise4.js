const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

// The result will be "9" because even the hoisted function called ("f1(x);") it returns "val" and prints in console "x"

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);

// The result will be "10" because "y" is an object and objects are functions and vise versa , so first "y" is declared as an object x:9 
//then f2 called and changes the value "x" in the object "y".