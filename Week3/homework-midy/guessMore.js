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

/**
 * As for the function 'f1', we will
 * be able to see the changes that has
 * been made to 'x' only if we log the function
 * --> console.log(f1(x));
 * That's because the change made to 'x'
 * is just temporary.
 * ----------------------------------
 * As for f2, the changes made to an
 * object are not temporary, since we
 * are reassigning the value 'x' of 'y'.
 */
