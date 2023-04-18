function convertToCelsius(fahrenheit) {
  const result = ((fahrenheit - 32) * 5) / 9;
  const rounded = Math.round(result * 10) / 10;
  return rounded;
}

console.log(convertToCelsius(100));

function convertToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

console.log(convertToFahrenheit(0));
