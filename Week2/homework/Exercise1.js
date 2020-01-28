const myNumbers = [1, 2, 3, 4];
const evenNums = myNumbers.filter(evenFunct);
const doubleNumbers= evenNums.map(doubleFunct);

function doubleFunct (nums){
  var ddNum;
  ddNum=nums*2;
  return ddNum;
}
function evenFunct (nums){
  var evenNum;
  evenNum = nums % 2 ===0 ;
  return evenNum ;
  
}

console.log("The initial aray is : [" + myNumbers+"]");
console.log("The evens array is : [" + evenNums+"]");
console.log("The double evens array is : [" + doubleNumbers+"]");