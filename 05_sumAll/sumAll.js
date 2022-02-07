const sumAll = function(first, last) {
  let finalSum = 0;
  if (first < 0 || last < 0 || !Number.isInteger(first) || !Number.isInteger(last)) {
    return 'ERROR'
  } else if(first > last) {
    //first is greater than last
    while(first >= last) {
      finalSum += first;
      first--;
    }
  } else {
    //first is less than last
    while(first <= last) {
        finalSum += first;
        first++;
    }
  }
  return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
