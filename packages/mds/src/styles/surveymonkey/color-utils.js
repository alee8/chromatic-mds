import SMColors from './colors';

/**
 * Maximum number of brand color keys for SurveyMonkey.
 * @returns {int}
 */
export function getSMMaxBrandColors() {
  return Object.keys(SMColors.brand).length;
}
