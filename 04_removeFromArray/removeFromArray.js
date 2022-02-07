const removeFromArray = function(...args) {
    // first item in our arg is the array, args[0] pulls it out
    const arr = args[0];
    const newArr = [];
    // loop through the array
    arr.forEach((item) => {
        // push each item into the newArr, unless it is present in 
        // the functions args
        // creating a new arr with every item, except the one being removed
        if (!args.includes(item)) {
            newArr.push(item);
        }
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
