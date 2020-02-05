// Snippet
let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();


//This time the local variable 'a' overwrites the global variable with the same name. When the code inside  the function is being executed, the global variable 'a' is reassigned. The output will be 12
//It is also worth noting that in case a local variable is assigned a value without first being declared with the var keyword, it becomes a global variable.
