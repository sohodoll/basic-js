const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(array, depth = 1) {
    const isArray = (element) => Array.isArray(element);
    if (array.some(isArray)) {
        depth++;
       this.calculateDepth(array.flat(1), depth)
    }
    return depth
  }
 }

module.exports = {
  DepthCalculator
};
