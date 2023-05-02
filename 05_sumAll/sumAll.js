const sumAll = function(start, end) {
    if (typeof start !== "number" || isNaN(start) || start < 1 || typeof end !== "number" || isNaN(end) || end < 1) {
        return "ERROR";
      }

      if (start > end) {
        [start, end] = [end, start];
      }
      let sum = 0;
      for (let i = start; i <= end; i++) {
        sum += i;
      }
      return sum;
};

// Do not edit below this line
module.exports = sumAll;
