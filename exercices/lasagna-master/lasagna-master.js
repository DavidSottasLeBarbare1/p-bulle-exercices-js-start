/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Provides the cooking statues of a lasagna
 *
 * @param {number} time time of preparation
 */
export function cookingStatus(time) {
  //
  if (time === undefined) {
    return "You forgot to set the timer.";
  } else if (time == 0) {
    return "Lasagna is done.";
  } else {
    return "Not done, please wait.";
  }
}

/**
 * Returns the preparation time based on the layers of the lasagna
 *
 * @param {string[]} layers number of layers
 * @param {number} avgPrep average preparation time
 */
export function preparationTime(layers, avgPrep) {
  if (avgPrep === undefined) avgPrep = 2;
  return layers.length * avgPrep;
}

/**
 * Returns the amount of sauce and noodles from a given array
 *
 * @param {string[]} layers number of layers
 */
export function quantities(layers) {
  let noodles = 0;
  let sauce = 0;
  layers.forEach((layer) => {
    if (layer == "sauce") sauce += 0.2;
    else if (layer == "noodles") noodles += 50;
  });
  return { noodles, sauce };
}

/**
 * Add the last string from the friendsList to myList
 *
 * @param {string[]} friendsList list of the friend
 * @param {string[]} myList list of the to change
 */
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList[friendsList.length - 1]);
}

/**
 * Scale the recipe to match the amount of portions needed
 *
 * @param {object} recipe recipe for 2 portions
 * @param {number} numberOfPortions number of portions required
 */
export function scaleRecipe(recipe, numberOfPortions) {
  const multipliedRecipe = {};

  for (const ingredient in recipe) {
    multipliedRecipe[ingredient] = recipe[ingredient] * (numberOfPortions / 2);
  }
  return multipliedRecipe;
}
