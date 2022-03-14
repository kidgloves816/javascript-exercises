const removeFromArray = function(userArray,...theArgs) {
    let itemsToDelete = Array.from(theArgs);
    
    for (deleteItem of theArgs) {
        if (typeof deleteItem === 'string') {
            if (userArray.indexOf(deleteItem) === -1) continue;
            
            else {
                userArray.splice(userArray.indexOf(deleteItem),1,null);
            }
        }

        else if (typeof deleteItem === 'number') {
            if (deleteItem <= userArray.length) {
                userArray.splice(deleteItem-1,1,null)
            }
            else continue;
        }

    }

    return userArray.filter(Boolean);
};

// Do not edit below this line
module.exports = removeFromArray;
