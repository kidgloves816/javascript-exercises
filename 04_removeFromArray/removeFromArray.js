const removeFromArray = function(userArray,indexToDelete) {
    let i = 1;
    while (i < arguments.length) {
        if (arguments[i] <= userArray.length && !isNaN(arguments[i])){
            indexToDelete = arguments[i];
            userArray.splice(indexToDelete-1,1,null);
        }
        i++;
    }
    return userArray.filter(Boolean);
};

// Do not edit below this line
module.exports = removeFromArray;
