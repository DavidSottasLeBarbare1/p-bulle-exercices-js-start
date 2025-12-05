//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const cost = (books) => {
  const discounts = {
    1: 1.0,
    2: 0.95,
    3: 0.9,
    4: 0.8,
    5: 0.75,
  };

  let books2 = [...books];

  let groups = [];

  while (books2.some((c) => c > 0)) {
    let group = 0;
    for (let i = 0; i < books2.length; i++) {
      if (books2[i] > 0) {
        books2[i]--;
        group++;
      }
    }
    groups.push(group);
  }

  return groups.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue * 8 * discounts[currentValue],
    0
  );
};
