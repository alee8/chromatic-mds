import { PRODUCT_PROP_KEY } from '~mds/constants/products';

import { spacing } from './spacing';

/**
 * Given themeInfo for a particular product, return a theme object made up of themeInfo plus
 * common theme info.
 *
 * NOTE: spacing.js - space0 === space-0, etc.
 * NOTE: `colors` does not clash with Wrench which isolates all colors into prop `palette`.
 *
 * @param {string} product using 2 letter acronyms
 * @param {object} themeInfo
 * @returns {object} themeObject
 */
export default function getThemeObject(product, {
  colors,
  mds,
  typography,
}) {
  return {
    [PRODUCT_PROP_KEY]: product,
    columnBleeds: {
      // src/properties/shared/styles/mds-theme.scss:L24:L27 where it is named as `bleeds`
      // renamed to avoid clash with Grid/GridPlus's bleed
      none: 0,
      sm: '10%',
      md: '15%',
      lg: '20%',
    },
    colors,
    component: {
      // `component` should probably be called wordpress blocks.  A block can change its spacing
      spacing: {
        // From Component Spacing in src/properties/shared/styles/mds-theme.scss
        // Note: default = $component-spacing, $component-spacing-* with * = {bottom, top}
        default: [[spacing[6], 0]],
        bottom: [[0, 0, spacing[6], 0]],
        top: [[spacing[6], 0, 0, 0]],
      },
    },
    // fontFamily,
    mds,
    typography,
  };
}
