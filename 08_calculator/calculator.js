const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
  let total = 0;
	for (let item of array) {
    total += item;
  }
  return total;
};

const multiply = function(array) {
  let total = 1;
	for (let item of array) {
    total *= item;
  }
  return total;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(num) {
	let ret = 1;
  while (num > 0) {
    ret *= num;
    num--;
  }
  return ret;
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
