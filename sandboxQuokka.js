function sumAll(integerOne, integerTwo) {
  let result = 0;

  if (
    integerOne > integerTwo &&
    integerOne > 0 &&
    typeof integerTwo == "number"
  ) {
    for (let i = integerOne; i >= integerTwo; i--) {
      result += i;
    }
    return result;
  } else if (
    integerOne < integerTwo &&
    integerOne > 0 &&
    typeof integerTwo == "number"
  ) {
    for (let i = integerOne; i <= integerTwo; i++) {
      result += i;
    }
    return result;
  } else {
    return "ERROR";
  }
}

console.log(sumAll(10, "90"));
