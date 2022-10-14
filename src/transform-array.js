const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
 function transform(array) {
  if (!Array.isArray(array)) throw new Error("\'arr\' parameter must be an instance of the Array!");
  if (array.length == 0) return array;
  let newArray = [];

  for (let i=0; i <array.length; i++) {
    if (typeof array[i] == 'number') {
      newArray.push(array[i])
    }
    else if(array[i] != '--double-next' && array[i] != '--discard-prev' && array[i] != '--double-prev' && array[i] != '--discard-next') {
      newArray.push(array[i]);
    }
    if (array[i] == '--double-next' && i!=array.length-1) {
      newArray.push(array[i+1]);
    }
    if (array[i] == '--discard-prev' && i!=0) {
      newArray.pop();
    }
    if (array[i] == '--double-prev' && i!=0) {
      newArray.push(array[i-1]);
    }
    if (array[i] == '--discard-next' && i!=array.length-1) {
      i++;
    }
  }
  return newArray;
}

module.exports = {
  transform
};
