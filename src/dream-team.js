const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(array) {
  if (array==null) {return false}
  if (typeof array != 'object'|| array['foo']) {return false};
  let newArray = [];
    array.forEach(element => {
        if(typeof element === 'string') {
            newArray.push(element.trim())
        }
    })
    let sortedArray = newArray.sort();
    let result = '';
    sortedArray.forEach(element =>{
      if (typeof element === 'string') {
        result = result + element[0].toUpperCase();
      }
    })
    let newResult = result.split('');

    return newResult.sort().join('');
}

module.exports = {
  createDreamTeam
};
