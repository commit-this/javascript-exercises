const caesar = function(str, key) {
    let shiftedStr = '';
    // if key is negative, convert to positive
    if (key < 0) {
        key = 26 + (key % 26);
    }

    for (i = 0; i < str.length; i++) {
        // check for non-alphabetic character
        if (str[i].toLowerCase() === str[i].toUpperCase()) {
            shiftedStr += str[i];
            continue;
        }

        // get unicode number for character
        code = str.charCodeAt(i);
        let shiftedCode = 0

        // caesar algorithm
        if (str[i] === str[i].toUpperCase()) {
            shiftedCode = ((code - 65 + key) % 26) + 65;
        } else {
            shiftedCode = ((code - 97 + key) % 26) + 97;
        }
        // convert back to string
        shiftedStr += String.fromCharCode(shiftedCode);
    }
    return shiftedStr;
};

// Do not edit below this line
module.exports = caesar;
