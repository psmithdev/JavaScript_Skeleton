function removeFromArray(array, number) {
  return array.slice(0, number).concat(array.slice(number + 1));
}

console.log(removeFromArray([1, 2, 3, 4], 3));
