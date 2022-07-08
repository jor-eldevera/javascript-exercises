const sumAll = function(num1, num2) {
    // Check for negative numbers
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }

    // Check for non-number types
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'ERROR';
    }

    let ret = 0;
    if (num1 > num2) {
        ret = loop(num2, num1);
    } else {
        ret = loop(num1, num2);
    }

    return ret;
};

const loop = function(num1, num2) {
    let ret = 0;
    for (let i = num1; i <= num2; i++) {
        ret += i;
    }
    return ret;
}

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
