exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    // Using for loop
    // let index = -1;
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] === item) {
    //     index = i;
    //   }
    // }
    // return index;

    // Using forEach loop
    // let index = -1;
    // arr.forEach((arrayItem, arrayIndex) => {
    //   if (arrayItem === item) {
    //     index = arrayIndex;
    //   }
    // });
    // return index;

    // Using reduce
    // return arr.reduce((foundIndex, arrayItem, index) => {
    //   if (arrayItem === item) {
    //     foundIndex = index;
    //   }

    //   return foundIndex;
    // }, -1);

    // Using findIndex
    //return arr.findIndex(number => number === item);

    // Using indexOf()
    return arr.indexOf(item);
  },

  sum: function(arr) {
    // Using reduce
    return arr.reduce((sum, number) => sum + number);

    // Using for loop
    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
    //   sum += arr[i];
    // }
    // return sum;

    // Using forEach
    // let sum = 0;
    // arr.forEach(number => (sum += number));
    // return sum;

    // Using for of
    // let sum = 0;
    // for (number of arr) {
    //   sum += number;
    // }
    // return sum;
  },

  remove: function(arr, item) {
    // Using for loop
    // const modifiedArray = [];
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] !== item) {
    //     modifiedArray.push(arr[i]);
    //   }
    // }
    // return modifiedArray;

    // Using filter
    return arr.filter(number => number !== item);
  },

  removeWithoutCopy: function(arr, item) {
    // Using for loop
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append: function(arr, item) {
    // Using push() - mutates
    // arr.push(item);
    // return arr;

    // Using spread syntax
    return [...arr, item];
  },

  truncate: function(arr) {
    // Using pop() - mutates
    // arr.pop();
    // return arr;

    // Using splice - mutates
    // arr.splice(-1);
    // return arr;

    // Using slice()
    return arr.slice(0, -1);
  },

  prepend: function(arr, item) {
    // Using unshift() - mutates
    // arr.unshift(item);
    // return arr;

    // Using spread syntax
    return [item, ...arr];
  },

  curtail: function(arr) {
    // Using shift() - mutates
    // arr.shift();
    // return arr;

    // Using splice - mutates
    // arr.splice(0, 1);
    // return arr;

    // Using slice()
    return arr.slice(1);
  },

  concat: function(arr1, arr2) {
    // Using concat()
    // return arr1.concat(arr2);

    // Using spread syntax
    return [...arr1, ...arr2];
  },

  insert: function(arr, item, index) {
    // Using for loop
    // const newArray = [];
    // for (let i = 0; i < arr.length; i++) {
    //   if (i === index) {
    //     newArray.push(item);
    //   }
    //   newArray.push(arr[i]);
    // }
    // return newArray;

    // Using reduce
    return arr.reduce((newArray, arrayItem, arrayIndex) => {
      if (arrayIndex === index) {
        newArray.push(item);
      }
      newArray.push(arrayItem);
      return newArray;
    }, []);

    // Using splice - mutates
    // arr.splice(index, 0, item);
    // return arr;
  },

  count: function(arr, item) {
    // Using for loop
    // let count = 0;
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] === item) {
    //     count++;
    //   }
    // }
    // return count;

    // Use forEach
    // let count = 0;
    // arr.forEach(number => {
    //   if (number === item) {
    //     count++;
    //   }
    // });
    // return count;

    // Using reduce
    // return arr.reduce((count, number) => {
    //   if (number === item) {
    //     count++;
    //   }
    //   return count;
    // }, 0);

    // Using filter()
    return arr.filter(number => number === item).length;
  },

  duplicates: function(arr) {
    // Using for loop
    // const duplicates = [];
    // for (let i = 0; i < arr.length; i++) {
    //   const value = arr[i];
    //   const hasDuplicate =
    //     arr.lastIndexOf(value) !== i && arr.lastIndexOf(value) !== -1;
    //   if (hasDuplicate && !duplicates.includes(value)) {
    //     duplicates.push(value);
    //   }
    // }
    // return duplicates;

    // Using forEach loop
    // const duplicates = [];
    // arr.forEach((number, index) => {
    //   const hasDuplicate =
    //     arr.lastIndexOf(number) !== index && arr.lastIndexOf(number) !== -1;
    //   if (hasDuplicate && !duplicates.includes(number)) {
    //     duplicates.push(number);
    //   }
    // });
    // return duplicates;

    // Using reduce
    return arr.reduce((duplicates, number, index) => {
      const hasDuplicate =
        arr.lastIndexOf(number) !== index && arr.lastIndexOf(number) !== -1;
      if (hasDuplicate && !duplicates.includes(number)) {
        duplicates.push(number);
      }
      return duplicates;
    }, []);
  },

  square: function(arr) {
    // Using map
    return arr.map(number => number * number);

    // Using for loop
    // const squared = [];
    // for (let i = 0; i < arr.length; i++) {
    //   squared.push(arr[i] * arr[i]);
    // }
    // return squared;

    // Using reduce
    // return arr.reduce((squared, number) => {
    //   squared.push(number * number);
    //   return squared;
    // }, []);
  },

  findAllOccurrences: function(arr, target) {
    // Using for loop
    // const occurrences = [];
    // for (let i = 0; i < arr.length; i++) {
    //   if (arr[i] === target) {
    //     occurrences.push(i);
    //   }
    // }
    // return occurrences;

    // Using reduce
    return arr.reduce((occurrences, number, index) => {
      if (number === target) {
        occurrences.push(index);
      }
      return occurrences;
    }, []);
  }
};
