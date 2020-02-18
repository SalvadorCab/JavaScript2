
// Snippet
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();


/* 
    GLOBAL SCOPE
    1) Variable a is created with the value undefined
    2) Variable x is created with the value undefined
    
    ACTIVE PART
    1) Variable a is assigned value 10
    2) Variable x is assigned a new function inside another function.
    3) The new function assignes 12 to variable a
    4) The variable x is called (which triggers the function inside the function, which uses the value
        of variable a-12- from the closure to send an alert message with the value of variable a).
*/