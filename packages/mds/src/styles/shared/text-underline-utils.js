import { getSMDarkBackgroundcolors } from '~mds/styles/shared/color-utils';
import { PRODUCT_VALUES } from '~mds/constants/products';
import { TEXT_DECORATION_VALUES } from '~mds/styles/shared/css';

/**
 * A utility function that check if an <a> tag should be underline based on brand
 * @param {PRODUCT_VALUES} product GF|MNTV|SM|SMHelp
 * @returns {TEXT_DECORATION_VALUES}
 */

export function getALinkUnderline(backgroundColor, product) {
  const isSurveyMonkey = product === PRODUCT_VALUES.smHelp || product === PRODUCT_VALUES.sm;
  if (isSurveyMonkey && !getSMDarkBackgroundcolors().includes(backgroundColor)) {
    return TEXT_DECORATION_VALUES.none;
  }
  return TEXT_DECORATION_VALUES.underline; // unless specified, gf and mntv falls under this category
}

/**
 * A utility function that check if an <a> tag should be underline on hover based on brand
 * @param {PRODUCT_VALUES} product GF|MNTV|SM|SMHelp
 * @returns {TEXT_DECORATION_VALUES | undefined}
 */
export function getALinkUnderlineOnHover(product) {
  if (product === PRODUCT_VALUES.smHelp || product === PRODUCT_VALUES.sm) {
    return TEXT_DECORATION_VALUES.underline;
  }
  return undefined;
}
