const palindromes = function (string) {
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()" "]/g,"")
    .toLowerCase();

    if (string === string.split("").reverse().join("")) return true;
    return false;
    
};

// Do not edit below this line
module.exports = palindromes;
