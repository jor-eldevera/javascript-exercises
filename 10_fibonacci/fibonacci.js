const fibonacci = function(n) {
    if (n === 1 || n === 2) {
        return 1;
    }

    if (n < 0) {
        return "OOPS";
    }

    n = n - 2;
    let total = 1;
    let previous = 1;
    while (n > 0) {
        let temp = total;
        total = total + previous;
        previous = temp;
        n--;
    }
    return total;
};

// Do not edit below this line
module.exports = fibonacci;
