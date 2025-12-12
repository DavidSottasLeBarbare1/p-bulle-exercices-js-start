//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const dnaMap = new Map([
  ["G", "C"],
  ["C", "G"],
  ["T", "A"],
  ["A", "U"],
]);
export const toRna = (DNA) => {
  //Assigning the whole RNA sequence to the fullRNA variable using charAt and the dnaMap Map
  let fullRNA = "";
  for (let i = 0; i < DNA.length; i++) {
    fullRNA += dnaMap.get(DNA.charAt(i));
  }
  return fullRNA;
};
