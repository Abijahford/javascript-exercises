const leapYears = function(year) {
  /* 
  leap years = are divisible by 4, when the year is divided by 100 it 
  should not equal 0(not divisible by 100) unless its disible by 400
  */
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
