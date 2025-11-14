//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

//Map containing planets with their specific year
const planets = new Map([
    ["mercury", 0.2408467],
    ["venus", 0.61519726],
    ["earth", 1],
    ["mars", 1.8808158],
    ["jupiter", 11.862615],
    ["saturn", 29.447498],
    ["uranus", 84.016846],
    ["neptune", 164.79132]
])
export const age = (planet, secondsOld) => {
  //Check if planet is inside planets
  if (!planets.get(planet))
    throw new Error("not a planet");

  //Return the age
  return Math.round((secondsOld / 31557600)/planets.get(planet) * 100) / 100
};
