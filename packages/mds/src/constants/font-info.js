import { generateObject } from '~mds/utils/utils';
import { STATIC_ASSETS_BASE } from '~mds/constants/assets';

export const HALYARD_FONT_ID = 'halyard';
// @see https://fonts.google.com/specimen/Montserrat
export const MONTSERRAT_FONT_ID = 'montserrat';
export const NATIONAL_FONT_ID = 'national2';
export const NATIONAL_FONT_NAME = "'National 2'";
// @see https://fonts.google.com/specimen/Playfair+Display
export const PLAYFAIR_FONT_ID = 'playfair';
// @see https://fonts.google.com/specimen/Zilla+Slab
export const ZILLA_FONT_ID = 'zillaSlab';

/**
 * Font weights.
 * Contains both semantic name and weight value
 *
 * @constant
 * @type {Object}
 */
export const MDS_FONT_WEIGHT_VALUES = Object.freeze({
  book: 300,
  medium: 500,
  regular: 400,
  semibold: 600,
  bold: 700,
});

/**
 * Details on one SM font: family, name, weights.
 * @constant
 */
const NATIONAL_FONT_INFO = Object.freeze({
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
});

/**
 * Helper to allow GetFeedback, Momentive to just access the relevant typography information.
 * @constant
 */
const _NATIONAL_FONT_INFO = NATIONAL_FONT_INFO[NATIONAL_FONT_ID];
export const NATIONAL_TYPE_RESOURCE = Object.freeze({
  assetPath: `${STATIC_ASSETS_BASE}/fonts/${NATIONAL_FONT_ID}`,
  fontName: _NATIONAL_FONT_INFO.name,
  fontFamily: _NATIONAL_FONT_INFO.family,
  fontWeights: _NATIONAL_FONT_INFO.weights,
});

/**
 * The semantic wrench font weight values used for Typography
 * @constant
 */
const WRENCH_SEMANTIC_FONT_WEIGHT_OPTIONS = Object.freeze([
  'light',
  'regular',
  'medium',
]);
export const WRENCH_SEMANTIC_FONT_WEIGHT_VALUES = Object.freeze(generateObject(WRENCH_SEMANTIC_FONT_WEIGHT_OPTIONS));
