import {
  EMPTY_STRING,
  UNIT_KEY,
} from '~mds/constants';

/**
 * Maps hyphenated strings to camel case.
 * If char following hyphen is letter, it is upperCased.
 * If char following hyphen is number, it is left as number.
 * @param {String} str
 * @returns camelCasedString
 */
export function camelCase(str) {
  return str.replace(
    /-([a-z\d])/gi,
    (match, matchedChar) => (Number.isInteger(matchedChar) ? matchedChar : matchedChar.toUpperCase())
  );
}

/**
 * Takes an arr or object, produces an object using array's values or object's key to produce object whose (key, value) pair has same key for the pair
 * @param {Array} arrOrObj
 * @returns {Object} result
 */
export const generateObject = (arrOrObj) => {
  const paramType = typeof arrOrObj;
  if (!arrOrObj || paramType !== 'object') {
    return {};
  }
  if (Array.isArray(arrOrObj)) {
    return arrOrObj.reduce((result, key) => {
      // Following to get around airbnb `no-param-assign: {props: true}`
      // https://github.com/airbnb/javascript/issues/719#issuecomment-237535701
      if (key !== UNIT_KEY) {
        const keyType = typeof key;
        if (key && key.length > 0) {
          // with value for key
          Object.assign(result, { [camelCase(key)]: key });
        } else if (keyType === 'string' || keyType === 'undefined') {
          // with EMPTY_STRING or undefined for key
          Object.assign(result, { default: EMPTY_STRING });
        } else if (typeof key === 'object') {
          // with null or {} or [] for key
          Object.assign(result, { none: EMPTY_STRING });
        } else {
          // catch all case; set key to error and value of keyType to flag
          Object.assign(result, { error: keyType });
        }
      }
      return result;
    }, {});
  }
  return Object.keys(arrOrObj).reduce((result, key) => {
    // Following to get around airbnb `no-param-assign: {props: true}`
    // https://github.com/airbnb/javascript/issues/719#issuecomment-237535701
    Object.assign(result, { [camelCase(key)]: key });
    return result;
  }, {});
};

/**
 * Place hyphen before the number. String prefix is all lowercase.
 * Transforms:
 *   'size9' -> 'size-9'
 *   'size10' -> 'size-10'
 *   'size' -> 'size'
 *   'Size' -> 'Size'
 *
 * @param {String} str
 * @returns {String} result
 */
export const hyphenateNumber = (str) => {
  const re = /^([a-z]+)(\d+)$/;
  return str.replace(re, '$1-$2');
};

/**
 * Remove hyphen before the number.
 * Transforms:
 *   'size-9' -> 'size9'
 *   'size-10' -> 'size10'
 *   'si-10ze' -> 'si-10ze'
 *   'size' -> 'size'
 *   'Size' -> 'Size'
 *
 * @param {String} str
 * @return {String} result
 */
export const unHyphenateNumber = (str) => {
  const re = /^([a-z]+)-(\d+)$/;
  return str.replace(re, '$1$2');
};
