import { CSS_NORMAL } from '~mds/styles/shared';
import { DISPLAY_SIZE_VALUES } from '~mds/constants/sizes';
import { MDS_FONT_SIZE_KEY_VALUES } from '~mds/styles/shared/sizes';
import {
  MDS_FONT_WEIGHT_VALUES,
  MONTSERRAT_FONT_ID,
  PLAYFAIR_FONT_ID,
} from '~mds/constants/font-info';
import { UNIT_KEY } from '~mds/constants';

/**
 * Heavily leverage React-JSS' out-of-box setup jss-plugin-default-unit.
 * For list of defaults, including for font-size that is 'px', check out:
 * https://github.com/cssinjs/jss/blob/master/packages/jss-plugin-default-unit/src/defaultUnits.js
 *
 * NOTE: Based on https://www.figma.com/file/I2QBPfcDgxPbbrIQMUrR8F/MDS-Momentive-core-library-WIP?node-id=1%3A123
 *
 * Typography spreadsheet: https://docs.google.com/spreadsheets/d/1IkBI44quYdEYgH4h6P-cOzkijlZW4cUgAt2pA7dCo84/edit?usp=sharing
 *
 */
const MDS_FONT_SIZES = {
  // Leaving [UNIT_KEY]: 'px' as documentation of cmsweb's intended unit; deviations by react-jss for font-size defaultUnit permits redress by cmsweb.
  [UNIT_KEY]: 'px',
  size1: 64, // ✅ Title/Jumbo (desktop)
  size2: 54, // ✅ H1 (desktop), Title/Jumbo (tablet)
  size3: 44, // ✅ H2 (desktop), H1 (tablet), Title/Jumbo (mobile)
  size4: 36, // ✅ H3 (desktop)
  size5: 32, // ✅ H2 (tablet), H1 (mobile)
  size6: 30, // ✅ H4 (desktop)
  size7: 24, // ✅ H5 (desktop), H3 (tablet, mobile), H2 (mobile)
  size8: 20, // ✅ H6 (desktop), H4 (tablet, mobile)
  size9: 18, // ✅ P1 (desktop, tablet, mobile), H5 (tablet, mobile)
  size10: 16, // ✅ P2 (desktop, tablet, mobile), Link (desktop, tablet, mobile), Button Large (desktop, tablet, mobile), H6 (tablet)
  size11: 14, // ✅ P3 (desktop, tablet, mobile), Label (desktop, tablet, mobile), Button Small (desktop, tablet, mobile), H6 (mobile)
};

/**
 * @todo: @alee
 * Should move MDS_LINE_HEIGHTS, MDS_FONT_SIZES,
 * MDS_LETTER_SPACING, MDS_FONT_WEIGHT_VALUES, FONT_INFO,
 * font ids, MDS_TYPE_SYSTEM to typography.js.
 * However, import issues when attempted for CMS-7023.
 * @see https://momentiveai.atlassian.net/browse/CMS-7023
 */

// @todo: @alee Check with Kwantae for fractional sizes.
// For now, entered the distinct 'px' values for line height from:
// ✅ https://www.figma.com/file/I2QBPfcDgxPbbrIQMUrR8F/MDS-Momentive-core-library-WIP?node-id=1%3A123
export const MDS_LINE_HEIGHTS = {
  lineHeight1: '72px', // ✅
  lineHeight2: '68px', // ✅
  lineHeight3: '54px', // ✅
  lineHeight4: '46px', // ✅
  lineHeight5: '42px', // ✅
  lineHeight6: '40px', // ✅
  lineHeight7: '32px', // ✅
  lineHeight8: '30px', // ✅
  lineHeight9: '26px', // ✅
  lineHeight10: '24px', // ✅
  lineHeight11: '20px', // ✅
  lineHeight12: '18px', // ✅
};

/**
 * Letter spacing sizes.
 * @constant
 */
const MDS_LETTER_SPACING = {
  letterSpace1: CSS_NORMAL, // across all products, this size1 value is always CSS_NORMAL
  letterSpace2: 2,
  letterSpace3: 1,
  letterSpace4: -0.2,
};
/**
 * Details on two MTV fonts: family, name, weights.
 * @constant
 */
export const FONT_INFO = {
  [MONTSERRAT_FONT_ID]: {
    family: MONTSERRAT_FONT_ID,
    name: 'Montserrat',
    weights: {
      regular: MDS_FONT_WEIGHT_VALUES.regular,
      medium: MDS_FONT_WEIGHT_VALUES.medium,
      semibold: MDS_FONT_WEIGHT_VALUES.semibold,
    },
  },
  [PLAYFAIR_FONT_ID]: {
    family: PLAYFAIR_FONT_ID,
    name: 'Playfair',
    weights: {
      regular: MDS_FONT_WEIGHT_VALUES.regular,
    },
  },
};

/**
 * Momentive Type System per following Figma.
 * Order of typeN follows, in as much as possible, starts with:
 * - desktop (Title/Jumbo, H1-HN, P1-PM, Label, Link)
 * - tablet (Title/Jumbo, H1-HN, P1-PM, Label, Link)
 * - mobile (Title/Jumbo, H1-HN, P1-PM, Label, Link)
 * - Button is in group of own at end.
 *
 * NOTE:
 *   Title aka Jumbo
 *   Default paragraph is P2. List setting is also P2.
 *   Link aka anchor/<a>
 * @see https://docs.google.com/spreadsheets/d/1IkBI44quYdEYgH4h6P-cOzkijlZW4cUgAt2pA7dCo84/edit?usp=sharing
 * @constant
 * @type {Object}
 * @default
 */
const MDS_TYPE_SYSTEM = Object.freeze({
  type1: {
    // size0 - toss up between size0 and last size (size14). NOTE: Unknown if WordPress/CMSAdmin can start with `size-0` (but certainly the WP_FONT_SIZE_OPTIONS starts from `size-1`)
    // ✅ Title/Jumbo (desktop), 64/72 Playfair R400, auto
    fontFamily: FONT_INFO[PLAYFAIR_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size1],
    fontWeight: FONT_INFO[PLAYFAIR_FONT_ID].weights.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight1,
  },
  type2: {
    // size1
    // ✅ H1 (desktop), Title/Jumbo (tablet), 54/68 Playfair R400, auto
    fontFamily: FONT_INFO[PLAYFAIR_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size2],
    fontWeight: FONT_INFO[PLAYFAIR_FONT_ID].weights.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight2,
  },
  type3: {
    // size2 (H2), size1 (H1), size0 (Title/Jumbo)
    // ✅ H2 (desktop), H1 (tablet), Title/Jumbo (mobile), 44/54 Playfair R400, auto
    fontFamily: FONT_INFO[PLAYFAIR_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size3],
    fontWeight: FONT_INFO[PLAYFAIR_FONT_ID].weights.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight3,
  },
  type4: {
    // size3
    // ✅ H3 (desktop), 36/46 Playfair R400, auto
    fontFamily: FONT_INFO[PLAYFAIR_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size4],
    fontWeight: FONT_INFO[PLAYFAIR_FONT_ID].weights.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight4,
  },
  type5: {
    // size4
    // ✅ H4 (desktop), 30/42 Montserrat R400, auto
    fontFamily: FONT_INFO[MONTSERRAT_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size6],
    fontWeight: FONT_INFO[MONTSERRAT_FONT_ID].weights.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight5,
  },
  type6: {
    // size5
    // ✅ H5 (desktop), 24/30 Playfair R400, auto
    fontFamily: FONT_INFO[PLAYFAIR_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size7],
    fontWeight: FONT_INFO[PLAYFAIR_FONT_ID].weights.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight8,
  },
  type7: {
    // size6
    // ✅ H6 (desktop), 20/26 Montserrat R400, 2
    fontFamily: FONT_INFO[MONTSERRAT_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size8],
    fontWeight: FONT_INFO[MONTSERRAT_FONT_ID].weights.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace2,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight9,
  },
  type8: {
    // size7
    // ✅ P1 (desktop, tablet, mobile), 18/32 Montserrat R400, -0.2
    fontFamily: FONT_INFO[MONTSERRAT_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size9],
    fontWeight: FONT_INFO[MONTSERRAT_FONT_ID].weights.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace4,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight7,
  },
  type9: {
    // size8
    // ✅ P2 (desktop, tablet, mobile), 16/26 Montserrat R400, auto
    fontFamily: FONT_INFO[MONTSERRAT_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size10],
    fontWeight: FONT_INFO[MONTSERRAT_FONT_ID].weights.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight9,
  },
  type10: {
    // size9
    // ✅ P3 (desktop, tablet, mobile), 14/20 Montserrat M500, auto
    fontFamily: FONT_INFO[MONTSERRAT_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size11],
    fontWeight: FONT_INFO[MONTSERRAT_FONT_ID].weights.medium,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight11,
  },
  type11: {
    // size10
    // ✅ Label/Eyebrow (desktop, tablet, mobile), 14/20 Montserrat SB600, 1
    fontFamily: FONT_INFO[MONTSERRAT_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size11],
    fontWeight: FONT_INFO[MONTSERRAT_FONT_ID].weights.semibold,
    letterSpacing: MDS_LETTER_SPACING.letterSpace3,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight11,
  },
  type12: {
    // size11
    // ✅ Link (desktop, tablet, mobile), 16/26, SB600, auto
    fontFamily: FONT_INFO[MONTSERRAT_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size10],
    fontWeight: FONT_INFO[MONTSERRAT_FONT_ID].weights.semibold,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight9,
  },
  type13: {
    // size1 (H1), size0 (Title/Jumbo)
    // ✅ H1(tablet), Title/Jumbo (mobile), 44/54 Playfair R400, auto
    fontFamily: FONT_INFO[PLAYFAIR_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size3],
    fontWeight: FONT_INFO[PLAYFAIR_FONT_ID].weights.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight3,
  },
  type14: {
    // size2 (H2), size1 (H1)
    // ✅ H2 (tablet), H1 (mobile), 32/40 Playfair R400, auto
    fontFamily: FONT_INFO[PLAYFAIR_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size5],
    fontWeight: FONT_INFO[PLAYFAIR_FONT_ID].weights.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight6,
  },
  type15: {
    // size3 (H3), size2 (H2)
    // ✅ H3 (tablet, mobile), H2 (mobile), 24/32 Playfair R400, auto
    fontFamily: FONT_INFO[PLAYFAIR_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size7],
    fontWeight: FONT_INFO[PLAYFAIR_FONT_ID].weights.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight7,
  },
  type16: {
    // size4
    // ✅ H4 (tablet, mobile), 20/30 Montserrat R400, auto
    fontFamily: FONT_INFO[MONTSERRAT_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size8],
    fontWeight: FONT_INFO[MONTSERRAT_FONT_ID].weights.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight8,
  },
  type17: {
    // size5
    // ✅ H5 (tablet, mobile), 18/32 Playfair R400, auto
    fontFamily: FONT_INFO[PLAYFAIR_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size9],
    fontWeight: FONT_INFO[PLAYFAIR_FONT_ID].weights.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight7,
  },
  type18: {
    // size6
    // ✅ H6 (tablet), 16/24 Montserrat R400, 2
    fontFamily: FONT_INFO[MONTSERRAT_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size10],
    fontWeight: FONT_INFO[MONTSERRAT_FONT_ID].weights.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace2,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight10,
  },
  type19: {
    // size6
    // ✅ H6 (mobile), 14/18 Montserrat R400, auto
    fontFamily: FONT_INFO[MONTSERRAT_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size11],
    fontWeight: FONT_INFO[MONTSERRAT_FONT_ID].weights.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace2,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight12,
  },
  type20: {
    // size12
    // ✅ Button (Large), 16/24 Montserrat SB600, auto
    fontFamily: FONT_INFO[MONTSERRAT_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size10],
    fontWeight: FONT_INFO[MONTSERRAT_FONT_ID].weights.semibold,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight10,
  },
  type21: {
    // size13
    // ✅ Button (Small), 14/20 Montserrat SB600, auto
    fontFamily: FONT_INFO[MONTSERRAT_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size11],
    fontWeight: FONT_INFO[MONTSERRAT_FONT_ID].weights.semibold,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight11,
  },
});

/**
 * Based on https://zpl.io/2yDekjn
 * Compile spreadsheet: https://docs.google.com/spreadsheets/d/1IkBI44quYdEYgH4h6P-cOzkijlZW4cUgAt2pA7dCo84/edit?usp=sharing
 *
 * NOTE: sm === mobile, md === tablet, lg === desktop (sm, md, lg are Wrench DISPLAY_SIZE_OPTIONS).
 * NOTE: media query order must go from from sm, md, lg because Wrench uses min-width small to xlarge.
 * Following is set up from sm (without media query), md, lg
 * For widths < DISPLAY_SIZE_VALUES.md, it goes to the non-media query portion of the object - use specific top-level: size1, size2, ....
 *
 * NOTE:
 *   - size0 - toss up between size0 and last current size (size14).
 *   - Chose size0 and start MDS_FONT_SIZE_KEY_OPTIONS starts from 0
 *   - Note: Unknown if WordPress/CMSAdmin can start with `size-0`
 *
 * @constant
 * @type {Object}
 * @default
 */
export const MDS_RESPONSIVE_TYPE_SIZES = Object.freeze({
  // For all widths < min-width: DISPLAY_SIZE_OPTIONS.md
  size0: MDS_TYPE_SYSTEM.type13, // mobile Title/Jumbo
  size1: MDS_TYPE_SYSTEM.type14, // mobile H1
  size2: MDS_TYPE_SYSTEM.type15, // mobile H2
  size3: MDS_TYPE_SYSTEM.type15, // mobile H3
  size4: MDS_TYPE_SYSTEM.type16, // mobile H4
  size5: MDS_TYPE_SYSTEM.type17, // mobile H5
  size6: MDS_TYPE_SYSTEM.type19, // mobile H6
  size7: MDS_TYPE_SYSTEM.type8, // mobile P1
  size8: MDS_TYPE_SYSTEM.type9, // mobile P2
  size9: MDS_TYPE_SYSTEM.type10, // mobile P3
  size10: MDS_TYPE_SYSTEM.type11, // mobile Label/Eyebrow
  size11: MDS_TYPE_SYSTEM.type12, // mobile Link
  size12: MDS_TYPE_SYSTEM.type20, // large Button
  size13: MDS_TYPE_SYSTEM.type21, // small Button
  [DISPLAY_SIZE_VALUES.md]: {
    size0: MDS_TYPE_SYSTEM.type2, // tablet Title/Jumbo
    size1: MDS_TYPE_SYSTEM.type13, // tablet H1
    size2: MDS_TYPE_SYSTEM.type14, // tablet H2
    size3: MDS_TYPE_SYSTEM.type15, // tablet H3
    size4: MDS_TYPE_SYSTEM.type16, // tablet H4
    size5: MDS_TYPE_SYSTEM.type17, // tablet H5
    size6: MDS_TYPE_SYSTEM.type18, // tablet H6
    size7: MDS_TYPE_SYSTEM.type8, // tablet P1
    size8: MDS_TYPE_SYSTEM.type9, // tablet P2
    size9: MDS_TYPE_SYSTEM.type10, // tablet P3
    size10: MDS_TYPE_SYSTEM.type11, // tablet Label/Eyebrow
    size11: MDS_TYPE_SYSTEM.type12, // tablet Link
    size12: MDS_TYPE_SYSTEM.type20, // large Button
    size13: MDS_TYPE_SYSTEM.type21, // small Button
  },
  [DISPLAY_SIZE_VALUES.lg]: {
    size0: MDS_TYPE_SYSTEM.type1, // desktop Title/Jumbo
    size1: MDS_TYPE_SYSTEM.type2, // desktop H1
    size2: MDS_TYPE_SYSTEM.type3, // desktop H2
    size3: MDS_TYPE_SYSTEM.type4, // desktop H3
    size4: MDS_TYPE_SYSTEM.type5, // desktop H4
    size5: MDS_TYPE_SYSTEM.type6, // desktop H5
    size6: MDS_TYPE_SYSTEM.type7, // desktop H6
    size7: MDS_TYPE_SYSTEM.type8, // desktop P1
    size8: MDS_TYPE_SYSTEM.type9, // desktop P2
    size9: MDS_TYPE_SYSTEM.type10, // desktop P3
    size10: MDS_TYPE_SYSTEM.type11, // desktop Label/Eyebrow
    size11: MDS_TYPE_SYSTEM.type12, // desktop Link
    size12: MDS_TYPE_SYSTEM.type20, // large Button
    size13: MDS_TYPE_SYSTEM.type21, // small Button
  },
});

/**
 * Human-friendly description for responsive typography size.
 * Useful in the MDS Typography table for Momentive.
 *
 * @constant
 * @type {Object}
 * @default
 */
export const MDS_RESPONSIVE_TYPE_INFO = Object.freeze({
  size0: 'Title/Jumbo',
  size1: 'H1',
  size2: 'H2',
  size3: 'H3',
  size4: 'H4',
  size5: 'H5',
  size6: 'H6',
  size7: 'P1',
  size8: 'P/P2',
  size9: 'P3',
  size10: 'Label',
  size11: 'Link',
  size12: 'Button large',
  size13: 'Button small',
});
