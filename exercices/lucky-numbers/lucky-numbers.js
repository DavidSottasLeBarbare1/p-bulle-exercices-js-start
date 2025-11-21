// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  //Joining every number in array1 and array2 together
  return Number(array1.join("")) + Number(array2.join(""))
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
    //Checking if the given number is a palindrome
    return String(value) === String(value).split("").reverse().join("");
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  //Checks if the input has something in it
  if (Boolean(input)){
    //Checks if the input is a number
    if (!Number(input)){
      return "Must be a number besides 0";
    }
    return ''
  }
  else {
    return "Required field";
  }
}
