const fibonacci = function(element) {
    // create a fibonacci sequence array
    let fibArray = [];
    let n1 = 0, n2 = 1, nextTerm;
    for (let index = 0; index < 100; index++) {
        fibArray.push(n1)
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    // given the function input, display that number in the array
    parseInt(element)
    if(element < 0 || element > 100) {
        return 'OOPS'
    } else {
        return fibArray[element]
    }
};
// Do not edit below this line
module.exports = fibonacci;
