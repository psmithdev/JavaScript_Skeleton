const numbers = [1, 2, 3, 4];

function removeFromArray() {
  let removed = numbers.splice(2, 1);
  return numbers;
}

console.log(removeFromArray());
