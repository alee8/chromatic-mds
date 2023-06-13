/**
 * For MDS Typography, a combination of globally-scoped (JSS @global) and
 * typography-specific approaches are used.
 *
 * Approach: For all font properties that are the same. Define rules that key off <h1-6>, <li>, and <p> by product.
 * This means, largely, font-family where desktop, tablet, mobile uses same ff.  All other font properties are not.
*
 * NOTE: @global rules should be used selectively as it affects global styles and has a pretty
 * heavy-handed impact.  For example, previously calling `getProductTagSizes` in
 * @global set all the markup font information that could not be overridden by any
 * specificity CSS rules.  Err on conservative side and only specify font-family (except in next situation).
 *
 * This scheme solved one problem in SM where H4 and P1 were exactly the same (ff, fs, lh, ls) except font weight (fw) but were both referred to as mds-type--size5. By specifying font-weight in SM for <h1-6> as medium and <p> as regular, it solved the problem of not having to introduce new size5a to differentiate.
 *
 * Would need to iterate on this when tying this with ThemeProvider and function values to access theme.
 * @see cmsweb@src/properties/shared/styles/defaults.scss
 */

import {
  CSS_100,
  CSS_INHERIT,
  CSS_NONE,
} from '~mds/styles/shared/';
import { CSS_SPACING_MEDIA_STYLES } from '~mds/styles/shared/responsive-spacing-styles';
import {
  getMDSFontFaces,
  getProductTypography,
} from '~mds/styles/shared/typography';
import { MDS_FONT_WEIGHT_VALUES } from '~mds/constants/font-info';
import { PRODUCT_VALUES } from '~mds/constants/products';
import { TYPE_TAG_VALUES } from '~mds/constants/html';

/* ------------------------------ Helpers ------------------------------ */

/**
 * Style rule overrides for <hN>, <li>, <p> for GetFeedback
 *
 * @param {String} product - one of PRODUCT_VALUES
 * @param {Object} typography - general GetFeedback typography properties
 * @returns {Object} style rules for gf, otherwise empty object
 */
function gfGlobal(product, typography) {
  if (product !== PRODUCT_VALUES.gf && product !== PRODUCT_VALUES.gfpHep) {
    return {};
  }

  // NOTE: `${product}-` className in <div> parent of <hn>, <li> and in <p> directly
  const gfDiv = `div[class^="${product}-"]`;
  const {
    bodyFontId,
    bodyFontWeight,
    fonts,
    headingFontId,
    headingFontWeight,
  } = typography;

  // Can specify font-family, font-weight because it is consistent within size and across mobile, tablet, desktop.
  return {
    [`${gfDiv} h1, ${gfDiv} h2, ${gfDiv} h3, ${gfDiv} h4, ${gfDiv} h6`]: {
      // h1-h4, h6 uses zilla slab, semibold fontWeight
      fontFamily: fonts[headingFontId].fontFamily,
      fontWeight: headingFontWeight,
      margin: 0,
    },
    [`${gfDiv} h5`]: {
      // h5 uses halyard, medium fontWeight
      fontFamily: fonts[bodyFontId].fontFamily,
      fontWeight: MDS_FONT_WEIGHT_VALUES.medium,
      margin: 0,
    },
    [`${gfDiv} ${TYPE_TAG_VALUES.li}`]: {
      fontFamily: fonts[bodyFontId].fontFamily,
      fontWeight: bodyFontWeight,
    },
  };
}

/**
 * Style rule overrides for <hN>, <li>, <p> for Momentive
 *
 * @param {String} product - one of PRODUCT_VALUES
 * @param {Object} typography - general Momentive typography properties
 * @returns {Object} style rules for mntv, otherwise empty object
 */
function mnGlobal(product, typography) {
  if (product !== PRODUCT_VALUES.mntv) {
    return {};
  }

  // NOTE: `${product}-` className in <div> parent of <hn>, <li> and in <p> directly
  const mnDiv = `div[class^="${product}-"]`;
  const mnPDiv = `${TYPE_TAG_VALUES.p}[class^="${product}-"]`;
  const {
    bodyFontId,
    fonts,
    headingFontId,
    headingFontIdAlt,
  } = typography;

  // Only specify font-family for all h, li, p markup. Not consistent for font-weight or other props across h1-h6, p1-p3, li for desktop, tablet, mobile.
  return {
    [`${mnDiv} h1, ${mnDiv} h2, ${mnDiv} h3, ${mnDiv} h5`]:
    {
      // Desktop - h1-h3, h5 use playfair; no font-weight
      fontFamily: fonts[headingFontId].fontFamily,
      margin: 0,
    },
    [`${mnDiv} h4, ${mnDiv} h6`]: {
      // h4, h6 use montserrat; no font-weight
      fontFamily: fonts[headingFontIdAlt].fontFamily,
      fontWeight: CSS_INHERIT,
      margin: 0,
    },
    [`${mnDiv} ${TYPE_TAG_VALUES.li}, ${mnPDiv}`]: {
      // <li>, <p> are using <P1> typography spec; also P1 (desktop, tablet, mobile) are same font weight - bodyFontWeight
      fontFamily: fonts[bodyFontId].fontFamily,
    },
  };
}

/**
 * Style rule overrides for <hN>, <li>, <p> for SurveyMonkey
 *
 * @param {String} product - one of PRODUCT_VALUES
 * @param {Object} typography - general SurveyMonkey typography properties
 * @returns {Object} style rules for gf, otherwise empty object
 */
function smGlobal(product, typography) {
  if (product !== PRODUCT_VALUES.sm && product !== PRODUCT_VALUES.smHelp) {
    return {};
  }

  // NOTE: `${product}-` className in <div> parent of <hn>, <li> and in <p> directly
  const smDiv = `div[class^="${product}-"]`;
  const smPDiv = `${TYPE_TAG_VALUES.p}[class^="${product}-"]`;
  const {
    bodyFontId,
    fonts,
    headingFontId,
    headingFontWeight,
  } = typography;

  // These rules solved the problem where H4 and P1 were exactly the same (ff, fs, lh, ls) except font weight (fw) but were both referred to as mds-type--size5.
  return {
    [`${smDiv} h1, ${smDiv} h2, ${smDiv} h3, ${smDiv} h4, ${smDiv} h5, ${smDiv} h6`]: {
      // SM has same fontWeight for h1-h6
      fontFamily: fonts[headingFontId].fontFamily,
      // Because `size-5` (aka MDS_RESPONSIVE_TYPE_SIZES.size5) is shared between H4 and P1,
      // using the strong specificity of global styles to set headingFontWeight (medium/500).
      // Not doing the same in P case (next rule) and setting it in respective typeN for
      // `size-5` (see MDS_RESPONSIVE_TYPE_SIZES.size5).
      fontWeight: headingFontWeight,
      margin: 0,
    },

    [`${smDiv} ${TYPE_TAG_VALUES.li}, ${smPDiv}`]: {
      // Set <li> <p> font-family, font-weight for SM (font-family because there is only one for ff, fw and because of size5 clash with h4 wrt fw)
      fontFamily: fonts[bodyFontId].fontFamily,
      // Removed setting font-weight because global style rules has highest specificity.
      // It is possible that different font-weights to be used for <p>.
    },
  };
}

/* ------------------------------ Exports ------------------------------ */

/**
 * Global style for a given product.
 *
 * Multiple font faces - https://cssinjs.org/jss-syntax/?v=v10.5.1#font-face
 * JSS multiple @font-face as array: https://github.com/cssinjs/jss/issues/199
 * @see: https://stackoverflow.com/questions/57113862/migrating-fonts-stack-from-scss-to-jss-cssinjs
 * Possible array format issues for @font-face
 * @see https://github.com/cssinjs/jss/issues/908
 *
 * @param {String} product - one of PRODUCT_VALUES
 * @returns {Object} JSS @global settings
 */
export default function globalStyle(product) {
  const typography = getProductTypography(product);
  const {
    bodyFontId,
    fonts,
    fontSize,
  } = typography;

  return {
    '@global': {
      '@font-face': getMDSFontFaces(product),
      html: {
        scrollBehavior: 'smooth',
      },

      // Added as this should be a default behavior
      '*': { boxSizing: 'border-box' },

      a: {
        color: CSS_INHERIT,
        textDecoration: CSS_NONE,
      },

      'blockquote, figure': {
        margin: 0,
      },

      body: {
        // TODO: @alee currently hardcoded SMColors.text.default's value
        color: '#1E2124',
        fontFamily: fonts[bodyFontId].fontFamily,
        '-webkit-font-smoothing': 'antialiased',
        fontSize,
        margin: 0,
        padding: 0,
        overflow: '-moz-scrollbars-none',
      },

      button: {
        outline: 0,
      },

      // Override browser styles for GF, MNTV, and SM headings.
      ...gfGlobal(product, typography),
      ...mnGlobal(product, typography),
      ...smGlobal(product, typography),

      img: {
        maxWidth: CSS_100,
      },

      'ol, ul': {
        // B/T margin set here is redundant with part of List's margin: 0
        marginBottom: 0,
        marginTop: 0,
      },
      ...CSS_SPACING_MEDIA_STYLES,
    },
  };
}
