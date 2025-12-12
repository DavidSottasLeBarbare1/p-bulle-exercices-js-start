// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map((card) => card * 2);
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  //Pushing the right data into the newTab accumulator
  return deck.reduce((newTab, currentValue) => {
    if (currentValue == 3) {
      newTab.push(3, 3, 3);
    } else {
      newTab.push(currentValue);
    }
    return newTab;
  }, []);

  /* Easier way of doing it :
  for (let i = 0; i < deck.length; i++) {
    if (deck[i] == 3) {
      newTab.push(3, 3, 3);s
    } else {
      newTab.push(deck[i]);
    }
  }
  return newTab;
  */
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  //Returning the two middle cards of the deck
  return deck.slice(
    Math.floor(deck.length / 2) - 1,
    Math.floor(deck.length / 2) + 1
  );
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  //Assigning a variable to the middle of the deck in order for it to stay the same even if we change deck
  let middleOfDeck = deck.length / 2;

  //Putting the last card into the first middle place
  deck.splice(middleOfDeck, 0, deck.pop());

  //Putting the first card into the second middle place
  deck.splice(middleOfDeck, 0, deck.shift());
  return deck;
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  //Filtering the deck in order to only have cards that equals 2
  return deck.filter((card) => card == 2);
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
  //Sorting the deck even when it has 2 or more character
  return deck.sort((a, b) => {
    return a - b;
  });
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  //Reversing the deck
  return deck.reverse();
}
