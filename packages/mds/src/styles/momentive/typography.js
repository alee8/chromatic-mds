import {
  FONT_INFO,
  MDS_LINE_HEIGHTS,
  MDS_RESPONSIVE_TYPE_SIZES,
} from '~mds/styles/momentive/sizes';
import {
  MDS_FONT_WEIGHT_VALUES,
  MONTSERRAT_FONT_ID,
  NATIONAL_FONT_ID,
  NATIONAL_TYPE_RESOURCE,
  PLAYFAIR_FONT_ID,
} from '~mds/constants/font-info';
import { STATIC_ASSETS_BASE } from '~mds/constants/assets';

// @todo: Verify what the fallback fonts should be, these are all from SM to start.
// @see: https://momentiveai.atlassian.net/browse/CMS-6952
const _MONTSERRAT_FONT_INFO = FONT_INFO[MONTSERRAT_FONT_ID];
const _PLAYFAIR_FONT_INFO = FONT_INFO[PLAYFAIR_FONT_ID];

const typography = Object.freeze({
  // Font for body for <p>, <li>).  For JSS' `global.js` - CSS global styling.
  bodyFontId: MONTSERRAT_FONT_ID,
  bodyFontWeight: MDS_FONT_WEIGHT_VALUES.regular,

  fonts: {
    [MONTSERRAT_FONT_ID]: {
      assetPath: `${STATIC_ASSETS_BASE}/fonts/${MONTSERRAT_FONT_ID}`,
      fontName: _MONTSERRAT_FONT_INFO.name,
      fontFamily: _MONTSERRAT_FONT_INFO.family,
      fontWeights: _MONTSERRAT_FONT_INFO.weights,
    },
    [NATIONAL_FONT_ID]: NATIONAL_TYPE_RESOURCE, // Add this to enable Wrench and Elevate componentry to work with design type family - National 2
    [PLAYFAIR_FONT_ID]: {
      assetPath: `${STATIC_ASSETS_BASE}/fonts/${PLAYFAIR_FONT_ID}`,
      fontName: _PLAYFAIR_FONT_INFO.name,
      fontFamily: _PLAYFAIR_FONT_INFO.family,
      fontWeights: _PLAYFAIR_FONT_INFO.weights,
    },
  },
  fontSize: 18, // p1 (aka p)'s font-size
  fontSizes: MDS_RESPONSIVE_TYPE_SIZES,
  fontUnits: 'px',

  // Font for body for <p>, <li>).  For JSS' `global.js` - CSS global styling.
  headingFontId: PLAYFAIR_FONT_ID,
  headingFontIdAlt: MONTSERRAT_FONT_ID,
  // @todo alee how to resolve this as there are different weights across desktop
  headingFontWeight: MDS_FONT_WEIGHT_VALUES.medium, // use H2 as H1 desktop is special; also because this is the dominant weight

  lineHeight: MDS_LINE_HEIGHTS.lineHeight7, // P1 (aka p) - rename to bodyLineHeight (but check where it is used currently in code)
});

export function getMNTypography() {
  return typography;
}

export default typography;
