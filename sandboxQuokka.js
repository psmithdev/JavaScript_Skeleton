let emptyArray = [];

function removeArray(empty, removeItem) {
  //   let sliced = Array.prototype.slice.call(arguments);
  // let removeItem += empty.splice(0, removeItem);
  return (emptyArray += empty.splice(0, removeItem));
}

console.log(removeArray([1, 2, 3, 4], 3));
