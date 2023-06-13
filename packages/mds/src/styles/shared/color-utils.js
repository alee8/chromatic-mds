import GFPColors, { GFP_DARK_BACKGROUND_COLOR } from '~mds/styles/getfeedback/colors';
import MNTVColors, {
  MNTV_DARK_BACKGROUND_COLORS,
} from '~mds/styles/momentive/colors';
import SMColors, {
  SM_DARK_BACKGROUND_COLORS,
  SMComponentColors,
} from '~mds/styles/surveymonkey/colors';
import { getGFPMaxBrandColors } from '~mds/styles/getfeedback/color-utils';
import { getMNMaxBrandColors } from '~mds/styles/momentive/color-utils';
import { getSMMaxBrandColors } from '~mds/styles/surveymonkey/color-utils';

import { EMPTY_STRING } from '~mds/constants';
import { PRODUCT_VALUES } from '~mds/constants/products';

const PRODUCT_COLORS = Object.freeze({
  [PRODUCT_VALUES.gf]: GFPColors,
  [PRODUCT_VALUES.mntv]: MNTVColors,
  [PRODUCT_VALUES.sm]: SMColors,
  [PRODUCT_VALUES.smHelp]: SMColors,
});

/**
 * Determine the <a> tag text underline color.
 * GF follows the text color of Paragraph for its link color but SM uses explicit link
 * color when background is canvas, pebble, and flint is white for dark backgrounds
 * (https://www.monkeytest1.com/mp/teams/), keep the textColor's color.
 *
 * @todo @alee Revisit for Momentive handling when dealing with Inline Anchor links
 * @todo @alee Per Ryan's comment in PR#3113
 * A complicated but not pressing issue to be solved separately is that there are
 * many use-cases where the background color of interest is on a parent block.
 * Relying currently on CSS `inherit`
 * Example is usage in a OneColumn block where there is a specific background color
 * and the Paragraph is essentially "transparent" because it has no defined background,
 * but we need to adjust the link color.
 * We solved for this on the legacy SM-side with some global CSS stuff that allowed us
 * to use the "closest" background color regardless of what it was set on:
 * /src/properties/shared/styles/utilities/font-styles.scss#L32-L48
 *
 * But how we translate that to JSS is very much up in the air since it definitely will
 * not be a 1:1 translation.
 *
 * @param {BRAND_COLOR_KEY_VALUES} backgroundColor Paragraph's background color
 * @param {object} colors theme colors object
 * @param {PRODUCT_VALUES} product GF|SM
 * @returns {object | undefined} - both a color and textDecorationColor are provided
 */
export function getALinkTextColor(backgroundColor, product, link) {
  if (product === PRODUCT_VALUES.gf) {
    if (GFP_DARK_BACKGROUND_COLOR.includes(backgroundColor)) {
      return {
        color: link.light,
        textDecorationColor: link.light,
      };
    }
    if (backgroundColor !== EMPTY_STRING) {
      // Set link.dark as long as the backgroundColor is known
      return {
        color: link.dark,
        textDecorationColor: link.dark,
      };
    }
    // backgroundColor is unknown (i.e., EMPTY_STRING). Inherit from parent or page `body`. Thus, don't set text color.
  }
  // @see https://momentiveai.atlassian.net/browse/CMS-7726
  if (product === PRODUCT_VALUES.mntv) {
    if (MNTV_DARK_BACKGROUND_COLORS.includes(backgroundColor)) {
      return {
        color: link.light,
        textDecorationColor: link.light,
      };
    }
    if (backgroundColor !== EMPTY_STRING) {
      // Set link.dark as long as backgroundColor is known
      return {
        color: link.dark,
        textDecorationColor: link.dark,
      };
    }
    // backgroundColor is unknown (i.e., EMPTY_STRING). Inherit from parent or page `body`. Thus, don't set text color.
  }
  // SM Legacy, SM, SMHelp uses underline on hover, does not set underline, text color always link.light (even for dark background color).
  if (product === PRODUCT_VALUES.smHelp || product === PRODUCT_VALUES.sm) {
    if (SM_DARK_BACKGROUND_COLORS.includes(backgroundColor)) {
      return {
        color: link.dark,
        textDecorationColor: link.dark,
      };
    }
    // When background color is canvas (color6), flint (color2) or pebble (color7), use link.light
    // @todo alee Do not know if it is also good for EMPTY_STRING but it is necessary for
    // @see https://momentiveai.atlassian.net/browse/CMS-7568

    // Set link.light for other background colors
    return {
      color: link.light,
      textDecorationColor: link.light,
    };
  }
  // The <a> link inherits from its parent if the routine returns undefined
  return undefined;
}
/**
 * Maximum number of brand color keys for Momentive.
 * @returns {int}
 */
export function getMaxBrandColors() {
  return Math.max(getGFPMaxBrandColors(), getMNMaxBrandColors(), getSMMaxBrandColors());
}

/**
 * Given product key, return the product's colors info.
 * @returns {Object}
 */
export function getProductColors(product) {
  return PRODUCT_COLORS[product] ?? {};
}

/**
 * Return the colors used by SM and SMHelp component colors
 * @returns {object}
 */
export function getSMComponentColors() {
  return SMComponentColors;
}

/**
 * Return the dark background colors used by SM and SMHelp
 * @returns {object}
 */
export function getSMDarkBackgroundcolors() {
  return SM_DARK_BACKGROUND_COLORS;
}
