import { EMPTY_STRING } from '~mds/constants';
/**
 * Remove all occurrences of Htags.
 * @param {String} str HTML markup that includes h[1-6] tag
 * @returns {String} original string with all h[1-6] tags removed
 */
export const removeHTag = (str) => {
  return str.replace(/<h[1-6]>|<h[1-6] .*?>|<\/h[1-6]>/gm, EMPTY_STRING);
};
