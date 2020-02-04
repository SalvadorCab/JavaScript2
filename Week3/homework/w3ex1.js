// Askisi 1
// 1os tropos
// function createBase (num) {
//   return (num + 6 )
// };

// const addSix = createBase(10);
// console.log(addSix);

// // 2os tropos
function createBase(num) {
    return function () {
        return num + 6
    };
};

const addSix = createBase(10)();
console.log(addSix);
