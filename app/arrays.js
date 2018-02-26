exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    // Old-School solution
    // for (var i = 0; i < arr.length; i++) {
    //   if (arr[i] === item) {
    //     return i;
    //   }
    // }
    // return -1;

    // Functional JS solution
    return arr.indexOf(item);
  },

  sum: function(arr) {
    // Old-School solution
    // var sum = 0;
    // for (var i = 0; i < arr.length; i++) {
    //   sum += arr[i];
    // }
    // return sum;

    // Functional JS solution
    return arr.reduce(function(sum, value){
      return sum + value;
    });
  },

  remove: function(arr, item) {
    // Old-School solution
    var filteredArray = [];
    var value;

    for (var i = 0; i < arr.length; i++) {
      value = arr[i];
      if (value !== item) {
        filteredArray.push(value);
      }
    }
    return filteredArray;

    // Functional JS solution
    // return arr.filter(function(value){
    //   return value !== item;
    // });
  },

  removeWithoutCopy: function(arr, item) {
    var index = 0;
    while (index < arr.length) {
      if (arr[index] === item) {
        arr.splice(index, 1);
        index--;
      } else {
        index++;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    // // Using Reduce to count the number
    return arr.reduce(function(count, value){
      return value === item ? ++count : count;
    }, 0);

    // // Using filter to create a new array with only the items and then returning the length
    // return arr.filter((value) => {
    //   return value === item;
    // }).length;
  },

  duplicates: function(arr) {


    // // Functional JS solution
    var storage = [];
    var solution = [];

    arr.forEach(function(value) {
      if (storage.includes(value) && !solution.includes(value)){
        solution.push(value);
      }
      storage.push(value);
    });

    return solution;

    var seen = [];
    var dupes = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      if (!seen.includes(arr[i])) {
        seen.push(arr[i]);
      } else if (!dupes.includes(arr[i])) {
        dupes.push(arr[i]);
      }
    }

    return dupes;
  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
