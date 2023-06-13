import { CSS_NORMAL } from '~mds/styles/shared';
import { DISPLAY_SIZE_VALUES } from '~mds/constants/sizes';
import { MDS_FONT_SIZE_KEY_VALUES } from '~mds/styles/shared/sizes';
import {
  MDS_FONT_WEIGHT_VALUES,
  NATIONAL_FONT_ID,
  NATIONAL_FONT_NAME,
} from '~mds/constants/font-info';
import { UNIT_KEY } from '~mds/constants';

/**
 * Heavily leverage React-JSS' out-of-box setup jss-plugin-default-unit.
 * For list of defaults, including for font-size that is 'px', check out:
 * https://github.com/cssinjs/jss/blob/master/packages/jss-plugin-default-unit/src/defaultUnits.js
 *
 * @constant
 * @type {Object}
 * @default
 */
const MDS_FONT_SIZES = {
  // Leaving [UNIT_KEY]: 'px' as documentation of cmsweb's intended unit; deviations by react-jss for font-size defaultUnit permits redress by cmsweb.
  [UNIT_KEY]: 'px',
  size1: 56, // Jumbo Title (desktop)
  size2: 44, // Jumbo Title (tablet)
  size3: 32, // Large Title (mobile)
  size4: 24, // Medium Title (mobile), Small Title (desktop)
  size5: 36, // Medium Title (desktop) (CMS-9828)
  size6: 20, // Small Title (tablet, mobile)
  size7: 18, // Paragraph Large (desktop, tablet, mobile)
  size8: 16, // Paragraph Medium (desktop, tablet, mobile)
  size9: 14, // Eyebrow (CMS-9829)
  size10: 12, // Paragraph Small (desktop, tablet, mobile); Eyebrow (tablet, mobile)
  // new larger sizes
  size11: 48, // Large Title (desktop) (CMS-9828)
  size12: 40, // Jumbo Title (mobile) (CMS-9828)
  size13: 38, // Large Title (tablet)
  size14: 26, // Medium Title (tablet) (CONTENTEXP-109)
};

/**
 * @todo: @alee
 * Should move MDS_LINE_HEIGHTS, MDS_FONT_SIZES,
 * MDS_LETTER_SPACING, MDS_FONT_WEIGHT_VALUES, FONT_INFO,
 * font ids, MDS_TYPE_SYSTEM to typography.js.
 * However, import issues when attempted for CMS-7023.
 * @see https://momentiveai.atlassian.net/browse/CMS-7023
 */

/**
 * Mapping from semantic size name to line height.
 *
 * Extracted from cmsweb@src/properties/shared/styles/mds-theme.scss and value is unit-less.
 *
 * @constant
 * @type {Object}
 * @default
 */
export const MDS_LINE_HEIGHTS = {
  [UNIT_KEY]: 'px',
  lineHeight1: '72px', // Jumbo Title (desktop)
  lineHeight2: '58px', // Jumbo Title (tablet)
  lineHeight3: '54px', // Large Title (desktop) - value changed in CMS-9828
  lineHeight4: '40px', // Jumbo Title (mobile), Large Title (mobile)
  lineHeight5: '32px', // Small Title (desktop), Medium Title (mobile), Para Large (desktop)
  lineHeight6: '28px', // Small Title (tablet, mobile), Paragraph Large (desktop, tablet, mobile)
  lineHeight7: '16px', // Eyebrow (tablet, mobile) - CMS-9829 / CONTENTEXP-109
  lineHeight8: '20px', // Paragraph Small (desktop, tablet, mobile); Eyebrow (desktop) - CMS-9829
  lineHeight9: '26px', // Paragraph Medium (desktop, tablet, mobile) - value changed in CMS-9828
  lineHeight10: '46px', // Medium Title (desktop) - Added in CMS-9828
  lineHeight11: '42px', // Large Title (tablet) - CONTENTEXP-109
  lineHeight12: '36px', // Medium Title (tablet) - CONTENTEXP-109
};

/**
 * Letter spacing sizes.
 * @constant
 */
const MDS_LETTER_SPACING = {
  letterSpace1: CSS_NORMAL, // across all products, this size1 value is always CSS_NORMAL
  letterSpace2: '2px', // Eyebrow
};

/**
 * Details on one SM font: family, name, weights.
 * @constant
 */
export const FONT_INFO = {
  [NATIONAL_FONT_ID]: {
    family: `${NATIONAL_FONT_NAME}, 'Helvetica Neue', Helvetica, Arial, 'Hiragino Sans', 'Hiragino Kaku Gothic Pro', '游ゴシック', '游ゴシック体', YuGothic, 'Yu Gothic', 'ＭＳ ゴシック', 'MS Gothic', sans-serif`,
    name: NATIONAL_FONT_NAME,
    weights: {
      // Legacy SM used `light=400`; revised JSS SM name to regular
      regular: MDS_FONT_WEIGHT_VALUES.regular,
      // Legacy SM used `regular=500`; revised JSS SM name to medium
      medium: MDS_FONT_WEIGHT_VALUES.medium,
    },
  },
};

/**
 * SM Type System - following Figma
 * @see: https://www.figma.com/file/dAbUV576mzR0qrZt6a27l3/Survey-Monkey-Brand-CMS-Refresh-V1?node-id=279%3A12950&t=WE42Yl2BatkNgZB4-0
 * @constant
 * @type {Object}
 * @default
 */
const MDS_TYPE_SYSTEM = Object.freeze({
  type1: {
    // size1 (fs), lineHeight1 (lh)
    // Jumbo Title (desktop),
    // 56/72, 500, auto, National2
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size1],
    fontWeight: MDS_FONT_WEIGHT_VALUES.medium,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight1,
  },
  type2: {
    // size2 (fs), lineHeight2 (lh)
    // Jumbo Title (tablet)
    // 44/58, 500, auto, National2
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size2],
    fontWeight: MDS_FONT_WEIGHT_VALUES.medium,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight2,
  },
  type3: {
    // size11 (fs), lineHeight3 (lh)
    // Large Title (desktop),
    // 48/54, 500, auto, National2
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size11],
    fontWeight: MDS_FONT_WEIGHT_VALUES.medium,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight3,
  },
  type4: {
    // size13 (fs), lineHeight11 (lh)
    // Large Title (tablet),
    // 38/42, 500, auto, National2
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size13],
    fontWeight: MDS_FONT_WEIGHT_VALUES.medium,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight11,
  },
  type5: {
    // size4 (fs), lineHeight5 (lh)
    // Medium Title (mobile), Small Title (desktop)
    // 24/32, 500, auto, National2
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size4],
    fontWeight: MDS_FONT_WEIGHT_VALUES.medium,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight5,
  },
  type6: {
    // size5 (fs), lineHeight10 (lh) ✨new
    // Medium Title (desktop)
    // 36/46, 500, auto, National2
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size5],
    fontWeight: MDS_FONT_WEIGHT_VALUES.medium,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight10,
  },
  type7: {
    // size6 (fs), lineHeight6 (lh)
    // Small Title (tablet, mobile), Card Title (desktop, tablet, mobile),
    // 20/28, 500, auto, National2
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size6],
    fontWeight: MDS_FONT_WEIGHT_VALUES.medium,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight6,
  },
  type8: {
    // size7 (fs), lineHeight6 (lh)
    // Paragraph Large (desktop),
    // 18/32, 400, auto, National2
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size7],
    fontWeight: MDS_FONT_WEIGHT_VALUES.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight5,
  },
  type9: {
    // size8 (fs), lineHeight9 (lh)
    // Paragraph Medium (desktop, tablet, mobile),
    // 16/26, 400, auto, National2
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size8],
    fontWeight: MDS_FONT_WEIGHT_VALUES.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight9,
  },
  type10: {
    // size9 (fs), lineHeight8 (lh)
    // Paragraph Small (desktop, tablet, mobile),
    // 14/20, 400, auto, National2
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size9],
    fontWeight: MDS_FONT_WEIGHT_VALUES.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight8,
  },
  type11: {
    // size14 (fs), lineHeight12 (lh)
    // Medium Title (tablet) - CONTENTEXP-109
    // 26/36, 500, auto, National2
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size14],
    fontWeight: MDS_FONT_WEIGHT_VALUES.medium,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight12,
  },
  // new types added as part of CMS-9828
  type12: {
    // size12 (fs), lineHeight4 (lh)
    // Jumbo Title (mobile)
    // 40/40, 500, auto, National2
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size12],
    fontWeight: MDS_FONT_WEIGHT_VALUES.medium,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight4,
  },
  type13: {
    // size8 (fs), lineHeight6 (lh)
    // Paragraph Large (tablet, mobile)
    // 16/28, 400, auto, National2
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size8],
    fontWeight: MDS_FONT_WEIGHT_VALUES.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight6,
  },
  type14: {
    // size4 (fs), lineHeight5 (lh)
    // Quote Block (tablet, mobile)
    // 24/32, 400, auto, National2
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size4],
    fontWeight: MDS_FONT_WEIGHT_VALUES.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight5,
  },
  type15: {
    // size3 (fs), lineHeight4 (lh)
    // Large Title (mobile),
    // 32/40, 500, auto, National2
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size3],
    fontWeight: MDS_FONT_WEIGHT_VALUES.medium,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight4,
  },
  type16: {
    // size9 (fs), lineHeight8 (lh)
    // Eyebrow (desktop)
    // 14/20, 500, auto, National2✅
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size9],
    fontWeight: MDS_FONT_WEIGHT_VALUES.medium,
    letterSpacing: MDS_LETTER_SPACING.letterSpace2,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight8,
  },
  type17: {
    // size10 (fs), lineHeight7 (lh)
    // Eyebrow (tablet, mobile)
    // 12/16, 500, auto, National2
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size10],
    fontWeight: MDS_FONT_WEIGHT_VALUES.medium,
    letterSpacing: MDS_LETTER_SPACING.letterSpace2,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight7,
  },
  type18: {
    // size8 (fs), lineHeight8 (lh)
    // Menu Title Regular (desktop, tablet, mobile)
    // 16/20, 400, National2
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size8],
    fontWeight: MDS_FONT_WEIGHT_VALUES.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight8,
  },
  type19: {
    // size8 (fs), lineHeight8 (lh)
    // Menu Title Medium (desktop, tablet, mobile)
    // 16/20, 500, National2
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size8],
    fontWeight: MDS_FONT_WEIGHT_VALUES.medium,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight8,
  },
  type20: {
    // size3 (fs), lineHeight4 (lh)
    // Quote Block (desktop)
    // 32/40, 400, auto, National2
    fontSize: MDS_FONT_SIZES[MDS_FONT_SIZE_KEY_VALUES.size3],
    fontWeight: MDS_FONT_WEIGHT_VALUES.regular,
    letterSpacing: MDS_LETTER_SPACING.letterSpace1,
    lineHeight: MDS_LINE_HEIGHTS.lineHeight4,
  },
});

/**
  * NOTE: sm === mobile, md === tablet, lg === desktop (sm, md, lg are Wrench DISPLAY_SIZE_OPTIONS).
 * NOTE: media query order must go from from sm, md, lg because Wrench uses min-width small to xlarge.
 * For widths < DISPLAY_SIZE_VALUES.md, it goes to the non-media query portion of the object - use specific top-level: size1, size2, ....
 *
 * @constant
 * @type {Object}
 * @default
 */
/**
 * Source: https://zpl.io/VOvq1Nk
 *
 * NOTE: sm === mobile, md === tablet, lg === desktop (sm, md, lg are Wrench DISPLAY_SIZE_OPTIONS).
 * NOTE: media query order must go from from sm, md, lg because Wrench uses min-width small to xlarge.
 * For widths < DISPLAY_SIZE_VALUES.md, it goes to the non-media query portion of the object - use specific top-level: size1, size2, ....
 *
 * @constant
 * @type {Object}
 * @default
 */
export const MDS_RESPONSIVE_TYPE_SIZES = Object.freeze({
  // For all widths < min-width: DISPLAY_SIZE_OPTIONS.md
  size1: MDS_TYPE_SYSTEM.type12, // Jumbo Title (mobile) => title
  size2: MDS_TYPE_SYSTEM.type15, // Large Title (mobile) => h1
  size3: MDS_TYPE_SYSTEM.type5, // Medium Title (mobile) => h2
  size4: MDS_TYPE_SYSTEM.type7, // Small Title (mobile) => h3
  size5: MDS_TYPE_SYSTEM.type13, // Paragraph Large (mobile) => p1
  size6: MDS_TYPE_SYSTEM.type9, // Paragraph Medium (mobile) => p2
  size7: MDS_TYPE_SYSTEM.type10, // Paragraph Small (mobile) => p3
  size8: MDS_TYPE_SYSTEM.type14, // Quote Block (mobile)
  size9: MDS_TYPE_SYSTEM.type7, // Card Title (desktop, tablet, mobile)
  size10: MDS_TYPE_SYSTEM.type17, // Eyebrow (tablet, mobile)
  size11: MDS_TYPE_SYSTEM.type18, // Menu Title Regular (desktop, tablet, mobile)
  size12: MDS_TYPE_SYSTEM.type19, // Menu Title Medium (desktop, tablet, mobile)
  [DISPLAY_SIZE_VALUES.md]: { // @media only screen and (min-width: 768px)
    size1: MDS_TYPE_SYSTEM.type2, // Jumbo Title (tablet) => title
    size2: MDS_TYPE_SYSTEM.type4, // Large Title (tablet) => h1
    size3: MDS_TYPE_SYSTEM.type11, // Medium Title (tablet) => h2
    size4: MDS_TYPE_SYSTEM.type7, // Small Title (tablet) => h3
    size5: MDS_TYPE_SYSTEM.type13, // Paragraph Large (tablet) => p1
    size6: MDS_TYPE_SYSTEM.type9, // Paragraph Medium (tablet) => p2
    size7: MDS_TYPE_SYSTEM.type10, // Paragraph Small (tablet) => p3
    size8: MDS_TYPE_SYSTEM.type14, // Quote Block (tablet)
    size9: MDS_TYPE_SYSTEM.type7, // Card Title (desktop, tablet, mobile)
    size10: MDS_TYPE_SYSTEM.type17, // Eyebrow (tablet, mobile)
    size11: MDS_TYPE_SYSTEM.type18, // Menu Title Regular (desktop, tablet, mobile)
    size12: MDS_TYPE_SYSTEM.type19, // Menu Title Medium (desktop, tablet, mobile)
  },
  [DISPLAY_SIZE_VALUES.lg]: { // @media only screen and (min-width: 992px)
    size1: MDS_TYPE_SYSTEM.type1, // Jumbo Title (desktop) => title
    size2: MDS_TYPE_SYSTEM.type3, // Large Title (desktop) => h1
    size3: MDS_TYPE_SYSTEM.type6, // Medium Title (desktop) => h2
    size4: MDS_TYPE_SYSTEM.type5, // Small Title (desktop) => h3
    size5: MDS_TYPE_SYSTEM.type8, // Paragraph Large (desktop) => p1
    size6: MDS_TYPE_SYSTEM.type9, // Paragraph Medium (desktop) => p2
    size7: MDS_TYPE_SYSTEM.type10, // Paragraph Small (desktop) => p3
    size8: MDS_TYPE_SYSTEM.type20, // Quote Block (desktop)
    size9: MDS_TYPE_SYSTEM.type7, // Card Title (desktop, tablet, mobile)
    size10: MDS_TYPE_SYSTEM.type16, // Eyebrow (desktop)
    size11: MDS_TYPE_SYSTEM.type18, // Menu Title Regular (desktop, tablet, mobile)
    size12: MDS_TYPE_SYSTEM.type19, // Menu Title Medium (desktop, tablet, mobile)
  },
});

/**
 * Human-friendly description for responsive typography size.
 * Useful in the MDS Typography table for SurveyMonkey.
 *
 * @constant
 * @type {Object}
 * @default
 */
export const MDS_RESPONSIVE_TYPE_INFO = Object.freeze({
  size1: 'Jumbo Title',
  size2: 'Large Title (h1)',
  size3: 'Medium Title (h2)',
  size4: 'Small Title (h3)',
  size5: 'Paragraph Large (p1)',
  size6: 'Paragraph Medium (p2)',
  size7: 'Paragraph Small (p3)',
  size8: 'Quote Block (blockquote)',
  size9: 'Card Title (h5)',
  size10: 'Eyebrow (h6)',
  size11: 'Menu Title Regular',
  size12: 'Menu Title Medium',
});
