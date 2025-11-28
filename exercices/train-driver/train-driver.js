// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Return each wagon's id in form of an array.
 *
 * @param {...number} ids
 * @returns {number[]} wagon ids
 */
export function getListOfWagons(...ids) {
  //Returns the ids parameter
  return ids;
}

/**
 * Reorder the array of wagons by moving the first 2 wagons to the end of the array.
 *
 * @param {Iterable<number>} ids
 * @returns {number[]} reordered list of wagons
 */
export function fixListOfWagons(ids) {
  //Switching the order of the first 2 wagons
  const [a, b, ...everythingElse] = ids;
  return [...everythingElse, a, b];
}

/**
 * Fixes the array of wagons by inserting an array of wagons after the first element in eachWagonsID.
 *
 * @param {Iterable<number>} ids
 * @param {Iterable<number>} missingWagons
 * @returns {number[]} corrected list of wagons
 */
export function correctListOfWagons(ids, missingWagons) {
  //Adding the missingWagons into ids but with a still in front
  const [a, ...everythingElse] = ids;
  const [...missing] = missingWagons;
  return [a, ...missing, ...everythingElse];
}

/**
 * Extend route information by adding another object
 *
 * @param {Record<string, string>} information
 * @param {Record<string, string>} additional
 * @returns {Record<string, string>} extended route information
 */
export function extendRouteInformation(information, additional) {
  //Merging information and additional into one object
  const fullInfo = { ...information, ...additional };
  return fullInfo;
}

/**
 * Separate arrival time from the route information object
 *
 * @param {Record<string, string>} information
 * @returns {[string, Record<string, string>]} array with arrival time and object without arrival time
 */
export function separateTimeOfArrival(information) {
  //Separating information to change its content's order
  const { timeOfArrival, ...everythingElse } = information;
  return [timeOfArrival, everythingElse];
}
