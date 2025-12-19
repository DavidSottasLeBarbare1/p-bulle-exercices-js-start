// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  //Transforming an array into a set then back to an array to delete duplicates
  return [...new Set(playlist)];
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  //Return true if the new set has track inside
  return new Set(playlist).has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  //Declaring a new set
  let set = new Set(playlist);

  //Adding track to set
  set.add(track);

  return [...set];
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  //Declaring a new set
  let set = new Set(playlist);

  //Removing track from set
  set.delete(track);

  return [...set];
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  //Declaring 2 new sets
  let everythingSet = new Set(playlist);
  let artistSet = new Set();

  //Iterating over every element in the first set then splitting them in the middle to put only to artist in set2
  for (const item of everythingSet) {
    const splitArray = item.split(" - ");
    artistSet.add(splitArray[1]);
  }
  return [...artistSet];
}
