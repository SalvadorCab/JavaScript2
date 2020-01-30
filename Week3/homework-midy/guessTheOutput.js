/* eslint-disable prettier/prettier */
let a = 10;
const x = (function () {
  a = 12;
  return function () {
    console.log(a);
  };
})();

x();

/**
 * I think the ouput of this snippet
 * is going to be 12, since
 * variables are not hoisted in
 * compile-time. So, when the
 * code is ran,'a' will change to 12'=
 * and 'x' will be ran after declaring 'a'
 * (since 'x' is not a function but a variable)
 * so when 'x' is ran, 'a' is reassigned to 12
 * and that's why 'x' will output 12
 */