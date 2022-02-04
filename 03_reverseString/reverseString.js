const reverseString = function(string) {
    const stringArr = []
    for (let index = 0; index < string.length ; index++) {
    let char = string.charAt(index)
    stringArr.push(char)
    }
    return stringArr.reverse().join('')
};

// Do not edit below this line
module.exports = reverseString;
