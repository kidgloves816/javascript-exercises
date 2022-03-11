const repeatString = function(string, num) {
    if (num < 0) 
        return 'ERROR';

    else {
        let word = string;
        string = '';
        for (let i = 1; i <= num; i++){
            string += word;
        }

    return string;
    }
};

// Do not edit below this line
module.exports = repeatString;
