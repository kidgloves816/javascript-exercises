const removeFromArray = function(userArray,...theArgs) {
    let itemsToDelete = Array.from(theArgs);
    
    for (deleteItem of theArgs) {
        if (typeof deleteItem === 'string') {
            //code for string
        }

        else if (typeof deleteItem === 'number') {
            //code for integer
        }

    }
};

// Do not edit below this line
module.exports = removeFromArray;
