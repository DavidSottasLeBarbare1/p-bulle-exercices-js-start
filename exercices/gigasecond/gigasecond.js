//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (date) => {
  //Converting date in epoch then adding a gigasecond
  dateInEpoch = Math.floor(date.getTime()/1000.0) + 1000000000

  //Returning a new date
  return new Date(dateInEpoch * 1000)
};
