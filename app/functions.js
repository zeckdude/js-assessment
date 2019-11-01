exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    // Using hardcoded array index values
    // const greeting = arr[0];
    // const name = arr[1];
    // const punctuation = arr[2];
    // return fn(greeting, name, punctuation);

    // Using spread syntax
    // return fn(...arr);

    // Using call
    return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    // Using apply
    // return fn.apply(obj);

    // Using call
    return fn.call(obj);
  },

  functionFunction: function(str) {
    // Using regular function
    // return function(str2) {
    //   return `${str}, ${str2}`;
    // };

    // Using fat-arrow function
    return str2 => `${str}, ${str2}`;
  },

  makeClosures: function(arr, fn) {
    // Using map()
    return arr.map(item => () => fn(item));

    // Using for loop
    // const functions = [];
    // for (let i = 0; i < arr.length; i++) {
    //   const item = arr[i];
    //   functions.push(function() {
    //     return fn(item);
    //   });
    // }
    // return functions;
  },

  partial: function(fn, str1, str2) {
    return str3 => {
      return fn(str1, str2, str3);
    };
  },

  useArguments: function() {
    // Using Array.from() and reduce()
    //return Array.from(arguments).reduce((sum, number) => sum + number);

    // Using slice) and reduce()
    // return Array.prototype.slice
    //   .call(arguments)
    //   .reduce((sum, number) => sum + number);

    // Using for loop
    // let sum = 0;
    // const numbers = Array.prototype.slice.call(arguments);
    // for (let i = 0; i < numbers.length; i++) {
    //   sum += numbers[i];
    // }
    // return sum;

    // Using forEach
    let sum = 0;
    const numbers = Array.prototype.slice.call(arguments);
    numbers.forEach(number => {
      sum += number;
    });
    return sum;
  },

  callIt: function(fn) {
    // Using Array.prototype.slice.call() and apply()
    // const argumentsArray = Array.prototype.slice.call(arguments, 1);
    // return fn.apply(null, argumentsArray);

    // Using Array.prototype.slice.call() and spread syntax
    const argumentsArray = Array.prototype.slice.call(arguments, 1);
    return fn(...argumentsArray);
  },

  partialUsingArguments: function(fn) {
    // Using spread syntax
    // const args = Array.prototype.slice.call(arguments, 1);
    // return function() {
    //   const moreArgs = Array.prototype.slice.call(arguments);
    //   return fn(...args, ...moreArgs);
    // };

    // Using apply()
    const args = Array.prototype.slice.call(arguments, 1);
    return function() {
      const moreArgs = Array.prototype.slice.call(arguments);
      return fn.apply(null, args.concat(moreArgs));
    };
  },

  curryIt: function(fn) {}
};
