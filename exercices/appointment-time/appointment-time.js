// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  //Assigning the current time to currentTime
  let currentTime = Date.now();

  //If now isnt undefined, assign currentTime to it
  if (now != undefined) {
    currentTime = now;
  }

  //Assigning a variable to the timezone offset
  let timeZoneOffset =
    new Date(currentTime + days * 86400000).getTimezoneOffset() -
    new Date(currentTime).getTimezoneOffset();

  //Return the appointment date based on the timezone, currentTime, the days to offset the appointment to (in milliseconds)
  return new Date(timeZoneOffset * 60000 + currentTime + days * 86400000);
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  //Uses the toISOString function to generate the timestamp of appointmentDate
  return new Date(appointmentDate).toISOString();
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  //Assign the date to a constant
  const date = new Date(timestamp);

  //Return every extracted information about the date
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
  };
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  //Assigning year, month etc... to the extracted informations and changing them based on options
  const { year, month, date, hour, minute } = {
    ...getAppointmentDetails(timestamp),
    ...options,
  };

  //Declaring the new date that we would like to return
  let changedDate = new Date(year, month, date, hour, minute);

  //Using the getAppointmentDetails function to return the details of changedDate so it doesn't look as ugly as before
  return getAppointmentDetails(changedDate.toISOString());
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  //Return the rounded difference between timestampA and timestampB
  return Math.ceil(
    (new Date(timestampB).getTime() - new Date(timestampA).getTime()) / 1000
  );
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  //Returns the correct boolean according to appointmentTimestamp and currentTimestamp
  return new Date(appointmentTimestamp) > new Date(currentTimestamp);
}
