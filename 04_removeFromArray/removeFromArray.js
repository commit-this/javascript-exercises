const removeFromArray = function(arr, ...toRemove) {
    for (i = 0; i < toRemove.length; i++) {
        if (toRemove[i] !== arr[arr.indexOf(toRemove[i])] || !arr.includes(toRemove[i])) continue;
        arr.splice(arr.indexOf(toRemove[i]), 1);
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
