// From https://code.corp.surveymonkey.com/wrench/wrench/blob/theme-idea/packages/styles/theme.js

import {
  MDS_FONT_WEIGHT_VALUES,
  NATIONAL_FONT_ID,
  NATIONAL_TYPE_RESOURCE,
} from '~mds/constants/font-info';

import {
  MDS_LINE_HEIGHTS,
  MDS_RESPONSIVE_TYPE_SIZES,
} from './sizes';

const typography = Object.freeze({
  // Font for body for <p>, <li>).  For JSS' `global.js` - CSS global styling.
  bodyFontId: NATIONAL_FONT_ID,
  bodyFontWeight: MDS_FONT_WEIGHT_VALUES.regular,

  fonts: {
    [NATIONAL_FONT_ID]: NATIONAL_TYPE_RESOURCE,
  },
  fontSize: 16, // Use SM P2 (16/24 - fs/lh) settings; This is 1 size bigger compared to Wrench fontSize.body
  fontSizes: MDS_RESPONSIVE_TYPE_SIZES,
  fontUnits: 'px',

  // Font for heading for <h1-6>.  For JSS' `global.js` - CSS global styling.
  headingFontId: NATIONAL_FONT_ID,
  headingFontWeight: MDS_FONT_WEIGHT_VALUES.medium, // Legacy fw=regular which was 500 and equal to revised JSS SM medium=500

  lineHeight: MDS_LINE_HEIGHTS.lineHeight7, // Did not change from Legacy SM 16px/1.5 = 16px/24px
});

export function getSMTypography() {
  return typography;
}

export default typography;
