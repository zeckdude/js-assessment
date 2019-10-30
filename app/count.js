exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function(start, end) {
    // Solution 1: This solves the requirements but the test is specifically looking for a solution that uses setTimeout()
    // let displayNumber = start;

    // const countInterval = setInterval(() => {
    //   if (displayNumber === end) {
    //     clearInterval(countInterval);
    //   }
    //   console.log(displayNumber);
    //   displayNumber++;
    // }, 100);

    // return {
    //   cancel: () => clearInterval(countInterval)
    // };

    var timeout;
    function doIt() {
      console.log(start++);

      if (start <= end) {
        timeout = setTimeout(doIt, 100);
      }
    }

    doIt();

    return {
      cancel: function() {
        timeout && clearTimeout(timeout);
      }
    };
  }
};
