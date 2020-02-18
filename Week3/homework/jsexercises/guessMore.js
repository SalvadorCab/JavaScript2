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


/* 
  After creating the functions (f1 & f2) and the variables (x & y) starts the execution of the program:
  1) Variable x is assigned number 9.
  2) Function f1 is invoked and returns 10, however the returned value is not stored anywhere and it is
     lost after the function ends. The global value x is not affected since it is passed by value to the
     function.
  3) The variable x is printed (9).
  4) Variable y is assigned an object with a value 9 in its x member.
  5) Function f2 is invoked and returns 10, however the returned value is not stored anywhere and it is
     lost after the function ends, however it modifies the global value since objects are passed by 
     reference to functions.
  6) The variable y is printed (an object with a member called x = 10).
*/