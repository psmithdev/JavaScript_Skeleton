function leapYears(givenYear) {
  if (givenYear % 4 == 0 && givenYear % 100 !== 0) {
    return true;
  } else if (givenYear % 400 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(leapYears(1600));
