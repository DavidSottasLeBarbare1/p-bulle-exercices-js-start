/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  //Declaring the price variable
  let price = 0;

  //Adding the correct amount of money to price based on the pizza
  switch (pizza) {
    case "Margherita":
      price += 7;
      break;
    case "Caprese":
      price += 9;
      break;
    case "Formaggio":
      price += 10;
      break;
  }

  //Adding the correct amount of money to price based on the extra
  extras.forEach((topping) => {
    switch (topping) {
      case "ExtraSauce":
        price += 1;
        break;
      case "ExtraToppings":
        price += 2;
        break;
    }
  });
  return price;
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  //Declaring the price variable
  let price = 0;

  //Calculating the price of each pizza in the order to add them to price
  pizzaOrders.forEach((pizzaOrder) => {
    price += pizzaPrice(pizzaOrder.pizza, ...pizzaOrder.extras);
  });
  return price;
}
