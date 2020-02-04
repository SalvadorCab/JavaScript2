let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})();

x();

//The result will be 12  because even the variable "a" declarated first , the variable "x" it is a function
//and functions are hoisted, so when "x" called the variable "a" takes the value "12" and allerted