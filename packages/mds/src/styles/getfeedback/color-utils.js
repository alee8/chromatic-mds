import GFPColors from './colors';

/**
 * Maximum number of brand color keys for GetFeedback.
 * @returns {int}
 */
export function getGFPMaxBrandColors() {
  return Object.keys(GFPColors.brand).length;
}
