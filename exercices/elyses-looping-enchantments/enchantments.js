// @ts-check


/**
 * Determine how many cards of a certain type there are in the deck
 *
 * @param {number[]} stack
 * @param {number} card
 *
 * @returns {number} number of cards of a single type there are in the deck
 */
export function cardTypeCheck(stack, card) {
  // 🚨 Use .forEach
  //Number to increment
  let numberOfCard = 0;

  //Returning the number of card in the stack that are the same value as card
  stack.forEach(c => {
    if (c == card){
      numberOfCard ++;
    }
  });
  return numberOfCard ;
}

/**
 * Determine how many cards are odd or even
 *
 * @param {number[]} stack
 * @param {boolean} type the type of value to check for - odd or even
 * @returns {number} number of cards that are either odd or even (depending on `type`)
 */
export function determineOddEvenCards(stack, type) {
  // 🚨 Use a `for...of` loop
  //Number to increment
  let numberOfCard = 0;

  //Returning the number of each odd or each even card based on type
  stack.forEach(c => {
    if (c % 2 == 0 && type){
        numberOfCard++;
    }
    else if (c % 2 != 0 && !type){
        numberOfCard++;
    }
  });
  return numberOfCard;
}
