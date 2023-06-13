import MNTVColors from './colors';

/**
 * Maximum number of brand color keys for Momentive.
 * @returns {int}
 */
export function getMNMaxBrandColors() {
  return Object.keys(MNTVColors.brand).length;
}
