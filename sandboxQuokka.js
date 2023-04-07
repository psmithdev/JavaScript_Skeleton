// let emptyArray = [];

// function removeArray(empty, removeItem) {
//   return (emptyArray += empty.splice(0, removeItem));
// }

// console.log(removeArray([1, 2, 3, 4], 4));

const myArray = [1, 2, 3, 4];

const index = myArray.indexOf(3);

const x = myArray.splice(index, 1);

console.log(`myArray values: ${myArray}`);
console.log(`variable x value is: ${x}`);

let emptyArrayTwo = [];

function removeArrayTwo(emptyTwo, removeItemTwo) {
  const index = emptyTwo + emptyArrayTwo.indexOf(3);
  const removeItemTwo = emptyTwo.splice(index, 1);
  return;
}

console.log(removeArrayTwo([1, 2, 3, 4], 3));
// removeArrayTwo([1,2,3,4], 3);
