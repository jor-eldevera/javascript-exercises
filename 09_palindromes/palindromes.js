const palindromes = function (phrase) {
    let phraseNoSpaces = phrase.replace(/ /g, "");
    let punctRE = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^_`{|}~]/g;
    let spaceRE = /\s+/g;
    let phraseNoPunc = phraseNoSpaces.replace(punctRE, '').replace(spaceRE, ' ');
    let lowercase = phraseNoPunc.toLowerCase();

    let beginning = 0;
    let end = lowercase.length - 1;
    while (beginning < end && end > beginning) {
        if (lowercase.charAt(beginning) !== lowercase.charAt(end)) {
            return false;
        }

        beginning++;
        end--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
