const ftoc = function(temp) {
  let tempInCelsius = (temp - 32) * (5/9);
  if(Number.isInteger(tempInCelsius)) {
    return tempInCelsius
  } else {
    return parseFloat(tempInCelsius.toFixed(1));
  }
};

const ctof = function(temp) {
  let tempInFahrenheit = (temp * (9/5)) + 32
  if(Number.isInteger(tempInFahrenheit)) {
    return tempInFahrenheit
  } else {
    return parseFloat(tempInFahrenheit.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
