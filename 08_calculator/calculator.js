const add = function(a,b) {
	return b + a;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(arr) {
  let sum = 0;
	for (let index = 0; index < arr.length; index++) {
    sum += arr[index]
  }
  return sum;
};

const multiply = function(arr) {
  let product = 1;
	for (let index = 0; index < arr.length; index++) {
    product *= arr[index]
  }
  return product;
};

const power = function(a, b) {
	return Math.pow(a, b)
};

const factorial = function(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorial(num - 1));
  }	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
