const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let separator = '+';
  let additionSeparator = '|';
  let addition = '';
  let newStr = str;
  let repeatTimes = 1;

  if (options['separator']) {
      separator = options['separator'];
  }
  if (options['repeatTimes']) {
      repeatTimes = options['repeatTimes'];
  }
  if (options['addition']) {
      addition = options['addition'];
  }
  if (!options['repeatTimes']) {
       newStr = newStr + addition;
       return newStr;
  }
  for (let i=0; i<repeatTimes-1; i++) {
      newStr = newStr + addition + separator + str;
  }
  return newStr + addition;
}

module.exports = {
  repeater
};
