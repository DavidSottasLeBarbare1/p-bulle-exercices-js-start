// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines the text to print on a badge
 *
 * @param {number | null} id id of the employee, or null if they're new hires
 * @param {string} name the name of the employee
 * @param {string | null} department the department or null if they're the owner
 *
 * @returns {string} the text to print on the badge
 */
export function printBadge(id, name, department) {
  //Declaring a string
  let text = "";

  //For every value in the badge, checking if present then adding it to the badge
  if (id) text += `[${id}] `;
  if (name) text += `${name} `;
  if (department) text += `- ${department.toUpperCase()}`;
  else text += `- OWNER`; //If the departement is null, add OWNER to the badge
  return text;
}
