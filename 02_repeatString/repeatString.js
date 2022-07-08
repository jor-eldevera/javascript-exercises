const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    
    let ret = '';
    for (let i = 0; i < num; i++) {
        ret += string;
    }
    return ret;
};

// Do not edit below this line
module.exports = repeatString;
