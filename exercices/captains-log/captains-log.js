// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  //Returning NCC- + a random number between 9999 and 1000 both inclusive
  return "NCC-" + Math.floor(1000 + Math.random() * (10000 - 1000));
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  //Generate a random number between 42000 and 41000
  return 41000 + Math.random() * (42000 - 41000);
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  //List of all planet classes
  let classList = "DHJKLMNRTY";

  //Returning a random class from classList
  return classList[Math.floor(Math.random() * classList.length)];
}
