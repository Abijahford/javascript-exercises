const getTheTitles = function(arr) {
    let titleArr = [];
    arr.forEach(element => {
        titleArr.push(element.title)
    });
    return titleArr;
};

// Do not edit below this line
module.exports = getTheTitles;
