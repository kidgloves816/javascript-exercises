const reverseString = function(string) {
    let userWord = string;
    let originalSplit = string.split('');
    return originalSplit.reverse().toString().replaceAll(',','');
};

// Do not edit below this line
module.exports = reverseString;
