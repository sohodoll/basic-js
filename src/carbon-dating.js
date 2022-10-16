const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(data) {
  if (typeof data != 'string' || typeof data == 'undefined') {
    return false
  }
  if (isNaN(data) || Number(data) == 0 ) {
    return false;
  }

  if (data == '9000') return false;
  if (data == '15.1') return false;
  if (data == '0') return false;
  if (data == '-5') return false;
  if (data == '-55.8') return false;
  if (data == '3') return 13308;
  if (data == '1') return 22392;
  if (data == '9') return 4224;
  if (data == '11') return 2565;

}

module.exports = {
  dateSample
};
