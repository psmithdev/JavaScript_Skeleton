function sumAll(integerOne, integerTwo) {
  let result = 0;
  for (let i = integerOne; i <= integerTwo; i++) {
    result += i;
  }
  return result;
}

console.log(sumAll(123, 1));
