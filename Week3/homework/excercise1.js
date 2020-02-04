function createBase (number){
    return function (number2){
        return number + number2
    };
};
const addSix = createBase(6);
console.log(addSix(9));
console.log(addSix(18));
console.log(addSix(30));