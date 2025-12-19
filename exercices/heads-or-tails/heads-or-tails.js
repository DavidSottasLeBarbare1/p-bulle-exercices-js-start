export function headsOrTails() {
  //Returns a promise that has a 1 in 2 chance to be true
  return new Promise((resolve) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(true);
      } else {
        resolve(false);
      }
    }, 1000);
  });
}
