const removeFromArray = function(array, ...args) {
    for (const arg of args) {
        let index = array.indexOf(arg);
        if (index > -1) {
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
