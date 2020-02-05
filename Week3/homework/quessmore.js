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

//In case of the f1 execution the returned value is 9. This is due to the fact that numerical values (e.g. integers) are passed by value. Also, the f1 return value is never assigned to the variable 'x' which would have caused its update.
//In the case of the f2 execution, the output is 10. This is explained by the fact that Objects are passed by reference, i.e. changes to a given object variable values affect all references pointing to it.