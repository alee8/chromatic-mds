import { CSS_NORMAL } from '~mds/styles/shared';
import { DISPLAY_SIZE_VALUES } from '~mds/constants/sizes';
import {
  HALYARD_FONT_ID,
  MDS_FONT_WEIGHT_VALUES,
  ZILLA_FONT_ID,
} from '~mds/constants/font-info';
import { MDS_FONT_SIZE_KEY_VALUES } from '~mds/styles/shared/sizes';
import { UNIT_KEY } from '~mds/constants';

/**
 * Heavily leverage React-JSS' out-of-box setup jss-plugin-default-unit.
 * For list of defaults, including for font-size that is 'px', check out:
 * https://github.com/cssinjs/jss/blob/master/packages/jss-plugin-default-unit/src/defaultUnits.js
 *
 * NOTE: Based on https://zpl.io/VKXXjd7
 * Compile spreadsheet: https://docs.google.com/spreadsheets/d/1IkBI44quYdEYgH4h6P-cOzkijlZW4cUgAt2pA7dCo84/edit?usp=sharing
 *
 */
const MDS_FONT_SIZES = {
  // Leaving [UNIT_KEY]: 'px' as documentation of cmsweb's intended unit; deviations by react-jss for font-size defaultUnit permits redress by cmsweb.
  [UNIT_KEY]: 'px',
  size1: 70, // H1 (desktop)
  size2: 50, // H2 (desktop), H1 (tablet)
  size3: 32, // H3 (desktop), H2 (tablet), H1 (mobile)
  size4: 24, // H4 (desktop, tablet), H3 (tablet), H2 (mobile)
  size5: 25, // P1/P (desktop)
  size6: 22, // H3 (mobile), H4 (mobile), P1 (tablet, mobile), Input field typing/hint (desktop, mobile)
  size7: 20, // P2 (desktop, tablet), LI (desktop, tablet)
  size8: 18, // P3 (desktop, tablet), Button Solid Layered (all), Input field typing/hint (tablet), Eyebrow (desktop)
  size9: 14, // P4 (all)
  size10: 12, // P5 (all)
  size11: 16, // Label (all), P2 (mobile), P3 (mobile), Button Ghost Border (all); Eyebrow (tablet/mobile)
  size12: 26, // Button Text Link (all)
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
// For now, entered the distinct 'px' values for line height from https://zpl.io/VKXXjd7
export const MDS_LINE_HEIGHTS = {
  [UNIT_KEY]: 'px',
  lineHeight1: '75px',
  lineHeight2: '58px',
  lineHeight3: '40px',
  lineHeight4: '32px',
  lineHeight5: '28px',
  lineHeight6: '26px',
  lineHeight7: '18px',
  lineHeight8: '31px', // Used by input field
};

/**
 * Letter spacing sizes.
 * @constant
 */
const MDS_LETTER_SPACING = {
  letterSpace1: CSS_NORMAL, // across all products, this size1 value is always CSS_NORMAL
  letterSpace2: -0.58,
  letterSpace3: 0.34,
  letterSpace4: 0.35,
  letterSpace5: 1,
};

/**
 * Details on two GF fonts: family, name, weights.
 * @constant
 */
export const FONT_INFO = {
  [HALYARD_FONT_ID]: {
    family: "'Halyard Display', sans-serif",
    name: 'Halyard Display',
    weights: {
      book: MDS_FONT_WEIGHT_VALUES.book,
      medium: MDS_FONT_WEIGHT_VALUES.medium,
      semibold: MDS_FONT_WEIGHT_VALUES.semibold,
    },
  },
  [ZILLA_FONT_ID]: {
    family: "'Zilla Slab', 'Times New Roman', Georgia, Garamond, serif",
    name: 'Zilla Slab',
    weights: {
      semibold: MDS_FONT_WEIGHT_VALUES.semibold,
    },
  },
};

/**
 * GF Type System per following Zeplin
 * @see https://zpl.io/VKXXjd7
 * @constant
 * @type {Object}
 * @default
 */
const MDS_TYPE_SYSTEM = Object.freeze({
  type1: {
    // size1
    // ✅ H1 (desktop), 70/75, 600, -0.58, Zilla
    fontFamily: FONT_INFO[ZILLA_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size1],
    fontWeight: FONT_INFO[ZILLA_FONT_ID].weights.semibold,
    letterSpacing: MDS_LETTER_SPACING.letterSpace2,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight1,
  },
  type2: {
    // size2
    // ✅ H2 (desktop), H1(tablet), 50/58, 600, auto, Zilla
    fontFamily: FONT_INFO[ZILLA_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size2],
    fontWeight: FONT_INFO[ZILLA_FONT_ID].weights.semibold,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight2,
  },
  type3: {
    // size3
    // ✅ H3 (desktop), H2 (tablet), H1 (mobile)
    // ✅ 32/40, 600, auto, Zilla
    fontFamily: FONT_INFO[ZILLA_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size3],
    fontWeight: FONT_INFO[ZILLA_FONT_ID].weights.semibold,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight3,
  },
  type4: {
    // size5
    // ✅ P1 (desktop), 25/32, 300, 1, Halyard
    fontFamily: FONT_INFO[HALYARD_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size5],
    fontWeight: FONT_INFO[HALYARD_FONT_ID].weights.book,
    letterSpacing: MDS_LETTER_SPACING.letterSpace5,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight4,
  },
  type5: {
    // size4
    // ✅ H4 (desktop, tablet), H3 (tablet), H2 (mobile),
    // ✅ 24/32, 600, auto, Zilla
    fontFamily: FONT_INFO[ZILLA_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size4],
    fontWeight: FONT_INFO[ZILLA_FONT_ID].weights.semibold,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight4,
  },
  type6: {
    // size11
    // ✅ H3 (mobile), H4 (mobile), 22/28, 600, auto, Zilla
    fontFamily: FONT_INFO[ZILLA_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size6],
    fontWeight: FONT_INFO[ZILLA_FONT_ID].weights.semibold,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight5,
  },
  type7: {
    // size12
    // ✅ P1 (tablet, mobile), 22/28, 300, auto, Halyard
    fontFamily: FONT_INFO[HALYARD_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size6],
    fontWeight: FONT_INFO[HALYARD_FONT_ID].weights.book,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight5,
  },
  type8: {
    // size6
    // ✅ P2 (desktop, tablet), LI 20/26, 300, 1, Halyard
    // ✅ LI, in GF it is same as P2 - size6
    fontFamily: FONT_INFO[HALYARD_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size7],
    fontWeight: FONT_INFO[HALYARD_FONT_ID].weights.book,
    letterSpacing: MDS_LETTER_SPACING.letterSpace5,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight6,
  },
  type9: {
    // size7
    // ✅ P3 (desktop, tablet), 18/26, 300, 0.34, Halyard
    fontFamily: FONT_INFO[HALYARD_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size8],
    fontWeight: FONT_INFO[HALYARD_FONT_ID].weights.book,
    letterSpacing: MDS_LETTER_SPACING.letterSpace3,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight6,
  },
  type10: {
    // size14
    // ✅ H5 (all), Label (all), 16/26, 500, auto, Halyard
    // lineHeight: H5 has 1 vs Label has auto
    fontFamily: FONT_INFO[HALYARD_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size11],
    fontWeight: FONT_INFO[HALYARD_FONT_ID].weights.medium,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight6,
  },
  type11: {
    // size10
    // ✅ P2 (mobile), P3 (mobile), 16/26, 300, auto, Halyard
    // h6 - Eyebrow (tablet/mobile)
    fontFamily: FONT_INFO[HALYARD_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size11],
    fontWeight: FONT_INFO[HALYARD_FONT_ID].weights.book,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight6,
  },
  type12: {
    // size8
    // ✅ P4 (all), 14/26, 300, 0.35, Halyard
    fontFamily: FONT_INFO[HALYARD_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size9],
    fontWeight: FONT_INFO[HALYARD_FONT_ID].weights.book,
    letterSpacing: MDS_LETTER_SPACING.letterSpace4,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight6,
  },
  type13: {
    // size9
    // ✅ P5 (all), 12/18, 300, auto, Halyard
    fontFamily: FONT_INFO[HALYARD_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size10],
    fontWeight: FONT_INFO[HALYARD_FONT_ID].weights.book,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight7,
  },
  type14: {
    // size12
    // ✅ Button solid layered (all), 18/26, 600, auto Zilla
    fontFamily: FONT_INFO[ZILLA_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size8],
    fontWeight: FONT_INFO[ZILLA_FONT_ID].weights.semibold,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight6,
  },
  type15: {
    // size13
    // ✅ Button border ghost border (all), 16/26, 600, auto Zilla
    fontFamily: FONT_INFO[ZILLA_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size11],
    fontWeight: FONT_INFO[ZILLA_FONT_ID].weights.semibold,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight6,
  },
  type16: {
    // size14
    // ✅ Button text link (all), 26/32, 600, auto Zilla
    fontFamily: FONT_INFO[ZILLA_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size12],
    fontWeight: FONT_INFO[ZILLA_FONT_ID].weights.semibold,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight4,
  },
  type17: {
    // size15
    // ✅ Input field - typing/hint (desktop, mobile), 22/31, 300, auto Halyard
    fontFamily: FONT_INFO[HALYARD_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size6],
    fontWeight: FONT_INFO[HALYARD_FONT_ID].weights.book,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight8,
  },
  type18: {
    // size15
    // ✅ Input field - typing/hint (tablet), 18/26, 300, auto Halyard
    // h6 - Eyebrow (desktop)
    fontFamily: FONT_INFO[HALYARD_FONT_ID].family,
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size8],
    fontWeight: FONT_INFO[HALYARD_FONT_ID].weights.book,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight6,
  },
});

/**
 * Based on https://zpl.io/VKXXjd7
 * Compile spreadsheet: https://docs.google.com/spreadsheets/d/1IkBI44quYdEYgH4h6P-cOzkijlZW4cUgAt2pA7dCo84/edit?usp=sharing
 *
 * NOTE: sm === mobile, md === tablet, lg === desktop (sm, md, lg are Wrench DISPLAY_SIZE_OPTIONS).
 * NOTE: media query order must go from from sm, md, lg because Wrench uses min-width small to xlarge.
 * Following is set up from sm (without media query), md, lg
 * For widths < DISPLAY_SIZE_VALUES.md, it goes to the non-media query portion of the object - use specific top-level: size1, size2, ....
 *
 * @constant
 * @type {Array}
 * @default
 */
export const MDS_RESPONSIVE_TYPE_SIZES = Object.freeze({
  // For all widths < min-width: DISPLAY_SIZE_OPTIONS.md
  size1: MDS_TYPE_SYSTEM.type3, // mobile H1
  size2: MDS_TYPE_SYSTEM.type5, // mobile H2
  size3: MDS_TYPE_SYSTEM.type6, // mobile H3
  size4: MDS_TYPE_SYSTEM.type6, // mobile H4
  size5: MDS_TYPE_SYSTEM.type7, // mobile P1
  size6: MDS_TYPE_SYSTEM.type11, // mobile P2
  size7: MDS_TYPE_SYSTEM.type11, // mobile P3
  size8: MDS_TYPE_SYSTEM.type12, // mobile P4
  size9: MDS_TYPE_SYSTEM.type13, // mobile P5
  size10: MDS_TYPE_SYSTEM.type11, // mobile LI, same as mobile P2 - size6
  size11: MDS_TYPE_SYSTEM.type10, // mobile H5, Label share this together
  size12: MDS_TYPE_SYSTEM.type14, // Button solid layered (all)
  size13: MDS_TYPE_SYSTEM.type15, // Button ghost border (all)
  size14: MDS_TYPE_SYSTEM.type16, // Button text link (all)
  size15: MDS_TYPE_SYSTEM.type17, // Input typing/hint (desktop, mobile)
  size16: MDS_TYPE_SYSTEM.type11, // mobile h6 - Eyebrow
  [DISPLAY_SIZE_VALUES.md]: {
    size1: MDS_TYPE_SYSTEM.type2, // tablet H1
    size2: MDS_TYPE_SYSTEM.type3, // tablet H2
    size3: MDS_TYPE_SYSTEM.type5, // tablet H3
    size4: MDS_TYPE_SYSTEM.type5, // tablet H4
    size5: MDS_TYPE_SYSTEM.type7, // tablet P1
    size6: MDS_TYPE_SYSTEM.type8, // tablet P2
    size7: MDS_TYPE_SYSTEM.type9, // tablet P3
    size8: MDS_TYPE_SYSTEM.type12, // tablet P4
    size9: MDS_TYPE_SYSTEM.type13, // tablet P5
    size10: MDS_TYPE_SYSTEM.type8, // tablet LI, same as tablet P2 - size6
    size11: MDS_TYPE_SYSTEM.type10, // tablet H5, tablet Label
    size12: MDS_TYPE_SYSTEM.type14, // Button solid layered (all)
    size13: MDS_TYPE_SYSTEM.type15, // Button ghost border (all)
    size14: MDS_TYPE_SYSTEM.type16, // Button text link (all)
    size15: MDS_TYPE_SYSTEM.type18, // Input typing/hint (desktop, mobile)
    size16: MDS_TYPE_SYSTEM.type11, // tablet h6 - Eyebrow
  },
  [DISPLAY_SIZE_VALUES.lg]: {
    size1: MDS_TYPE_SYSTEM.type1, // desktop H1
    size2: MDS_TYPE_SYSTEM.type2, // desktop H2
    size3: MDS_TYPE_SYSTEM.type3, // desktop H3
    size4: MDS_TYPE_SYSTEM.type5, // desktop H4
    size5: MDS_TYPE_SYSTEM.type4, // desktop P1
    size6: MDS_TYPE_SYSTEM.type8, // desktop P2
    size7: MDS_TYPE_SYSTEM.type9, // desktop P3
    size8: MDS_TYPE_SYSTEM.type12, // desktop P4
    size9: MDS_TYPE_SYSTEM.type13, // desktop P5
    size10: MDS_TYPE_SYSTEM.type8, // desktop LI, same as desktop P2 - size6
    size11: MDS_TYPE_SYSTEM.type10, // Desktop H5, Desktop Label
    size12: MDS_TYPE_SYSTEM.type14, // Button solid layered (all)
    size13: MDS_TYPE_SYSTEM.type15, // Button ghost border (all)
    size14: MDS_TYPE_SYSTEM.type16, // Button text link (all)
    size15: MDS_TYPE_SYSTEM.type17, // Input typing/hint (desktop, mobile)
    size16: MDS_TYPE_SYSTEM.type18, // mobile h6 - Eyebrow
  },
});

/**
 * Human-friendly description for responsive typography size.
 * Useful in the MDS Typography table for GetFeedback.
 *
 * @constant
 * @type {Object}
 * @default
 */
export const MDS_RESPONSIVE_TYPE_INFO = Object.freeze({
  size1: 'H1',
  size2: 'H2',
  size3: 'H3',
  size4: 'H4',
  size5: 'P/P1',
  size6: 'P2',
  size7: 'P3',
  size8: 'P4',
  size9: 'P5',
  size10: 'LI',
  size11: 'H5, Label',
  size12: 'Button solid layered',
  size13: 'Button ghost border',
  size14: 'Button text link',
  size15: 'Input typing/hint',
  size16: 'H6, Eyebrow',
});
