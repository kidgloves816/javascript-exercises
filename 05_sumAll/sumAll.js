const sumAll = function(num1,num2) {
    let firstNumber = Math.min(num1,num2);
    let secondNumber = Math.max(num1,num2);

    let sum = 0;

    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number') return 'ERROR';

    else {
    for (i = firstNumber;i <= secondNumber; i++){
        sum += i;
    }

    return sum;
}
};

// Do not edit below this line
module.exports = sumAll;
