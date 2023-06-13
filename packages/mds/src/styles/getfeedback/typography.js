import {
  FONT_INFO,
  MDS_LINE_HEIGHTS,
  MDS_RESPONSIVE_TYPE_SIZES,
} from '~mds/styles/getfeedback/sizes';
import {
  HALYARD_FONT_ID,
  MDS_FONT_WEIGHT_VALUES,
  NATIONAL_FONT_ID,
  NATIONAL_TYPE_RESOURCE,
  ZILLA_FONT_ID,
} from '~mds/constants/font-info';
import { STATIC_ASSETS_BASE } from '~mds/constants/assets';

// @todo: Verify what the fallback fonts should be, these are all from SM to start.
// @see: https://momentiveai.atlassian.net/browse/CMS-6952
const _HALYARD_FONT_INFO = FONT_INFO[HALYARD_FONT_ID];
const _ZILLA_FONT_INFO = FONT_INFO[ZILLA_FONT_ID];
const typography = Object.freeze({
  // Font for body for <p>, <li>).  For JSS' `global.js` - CSS global styling.
  bodyFontId: HALYARD_FONT_ID,
  bodyFontWeight: MDS_FONT_WEIGHT_VALUES.book,

  fonts: {
    [HALYARD_FONT_ID]: {
      assetPath: `${STATIC_ASSETS_BASE}/fonts/halyard`,
      fontName: _HALYARD_FONT_INFO.name,
      fontFamily: _HALYARD_FONT_INFO.family,
      fontWeights: _HALYARD_FONT_INFO.weights,
    },
    [NATIONAL_FONT_ID]: NATIONAL_TYPE_RESOURCE, // Add this to enable Wrench and Elevate componentry to work with design type family - National 2
    [ZILLA_FONT_ID]: {
      assetPath: `${STATIC_ASSETS_BASE}/fonts/zilla`,
      fontName: _ZILLA_FONT_INFO.name,
      fontFamily: _ZILLA_FONT_INFO.family,
      fontWeights: _ZILLA_FONT_INFO.weights,
    },
  },
  fontSize: 16, // This is 1 size bigger compared to Wrench fontSize.body
  fontSizes: MDS_RESPONSIVE_TYPE_SIZES,
  fontUnits: 'px',

  // Font for body for <p>, <li>).  For JSS' `global.js` - CSS global styling.
  headingFontId: ZILLA_FONT_ID,
  headingFontWeight: MDS_FONT_WEIGHT_VALUES.semibold, // All except h5 which is medium

  lineHeight: MDS_LINE_HEIGHTS.lineHeight3,
});

export function getGFTypography() {
  return typography;
}

export default typography;
