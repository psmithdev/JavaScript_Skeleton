let string = "hey";

const repeatString = function () {
  for (let i = 0; i < 3; i++) {
    let num = (string += " ");
    console.log(num);
  }
};

console.log(repeatString());
