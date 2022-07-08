const reverseString = function(string) {
    let ret = '';

    for (let i = string.length - 1; i >= 0; i--) {
        ret += string.charAt(i);
    }

    return ret;
};

// Do not edit below this line
module.exports = reverseString;
