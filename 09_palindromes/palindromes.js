const palindromes = function (string) {
    // take in a given string and store it in a variable - givenString
    // reverse the given string and store it in a variable - stringReverse
    // compare the two variables to see if they are the same
    const stringArr = []
    const symArr = []
    for (let index = 0; index < string.length ; index++) {
        let char = string.charAt(index)
        if(char === '.' || char === '!' || char === ' ' || char === ',') {
            symArr.push(char)
        } else {
            stringArr.push(char.toLowerCase())
        }
    }
    let givenString = stringArr.join('')
    let stringReverse = stringArr.reverse().join('')
    // console.log(givenString)
    if (givenString === stringReverse) {
        return true;
    } else {
        return false;
    }
};
// palindromes('Animal loots foliated detail of stool lamina.')
// Do not edit below this line
module.exports = palindromes;
