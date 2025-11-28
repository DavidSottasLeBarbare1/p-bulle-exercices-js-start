//
// This is only a SKELETON file for the 'Promises' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const promisify = function (func) {
  return function f() {
    return new Promise((successCallBack, failureCallBack) => {
      if (true) {
        successCallBack("success");
      } else {
        throw new Error("Failed callback");
      }
    });
  };
};

export const all = () => {};

export const allSettled = () => {};

export const race = () => {};

export const any = () => {};
