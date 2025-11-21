// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  //Check the name of the juice then returning the time
  switch (name){
    case "Pure Strawberry Joy":
      return 0.5;
    case "Energizer": case "Green Garden":
      return 1.5;
    case "Tropical Island":
      return 3;
    case "All or Nothing":
      return 5;
    default:
      return 2.5;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  //Declaring the wedgesMissing and the numberOfLimes variable
  let wedgesMissing = wedgesNeeded
  let numberOfLimes = 0;

  //As long as wedgesMissing is higher than 0, removes the correct wedges from wedgesMissing according to the size of the lime in limes
  while (wedgesMissing > 0)
  {
    switch (limes[0])
    {
      case 'small':
        wedgesMissing -= 6;
        numberOfLimes++;
        limes.shift()
        break;
      case 'medium':
        wedgesMissing -= 8;
        numberOfLimes++;
        limes.shift()
        break;
      case 'large':
        wedgesMissing -= 10;
        numberOfLimes++;
        limes.shift()
        break;
      default:
        return numberOfLimes;
    }
  }
  return numberOfLimes;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  //Remove the time from timeLeft according to the time of each juice then removing that juice until there's no more time
  do{
    timeLeft -= timeToMixJuice(orders[0])
    orders.shift()
  }
  while (timeLeft > 0)
  return orders
}
