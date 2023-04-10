function removeArray(empty, ...removeItem) {
  const index = empty.indexOf(removeItem);
  if (index !== -1) {
    empty.splice(index, 1);
  }
  return empty;
}

console.log(removeArray([1, 2, 3, 4], 3));

function removeFromArray(array, ...args) {
  return array.filter((x) => !args.includes(x));
}

console.log(removeFromArray([1, 2, 3, 4], 2, "tacos"));
