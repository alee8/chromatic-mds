import { EMPTY_STRING } from '~mds/constants';
import { generateObject } from '~mds/utils/utils';

const FONT_STYLE_OPTIONS = Object.freeze(['italic', 'normal']);
export const FONT_STYLE_VALUES = Object.freeze(generateObject(FONT_STYLE_OPTIONS));

/**
 * MDS font size keys.
 * Range of size prop key value in MDS_RESPONSIVE_TYPE_SIZES.
 *
 * NOTE: zero-based size changed 2021-08-30.
 * +1 to MAX_MDS_FONT_SIZES for addition of zero-based size.
 *
 * Currently, MN uses size-0 for Jumbo (2021-08-30).
 * Currently, GF holds the largest number of font-sizes.
 * Currently, GF does not use MDS_RESPONSIVE_TYPE_SIZES.size5.
 *
 * @todo Every time a new product is added with new typography, double check this value
 * @constant
 */
export const MAX_MDS_FONT_SIZES = 20;
export const MDS_FONT_SIZE_KEY_OPTIONS = Object.freeze(Array(MAX_MDS_FONT_SIZES)
  .fill(EMPTY_STRING)
  .map((str, idx) => `size${idx}`));
export const MDS_FONT_SIZE_KEY_VALUES = Object.freeze(generateObject(MDS_FONT_SIZE_KEY_OPTIONS));

/**
 * WordPress type sizes have hyphen in them.
 *
 * NOTE: zero-based size changed 2021-08-30.
 * For CMS Web, unhyphenated size keys (e.g., `size1`) preferred over hyphenated size keys (e.g., `size-1`).
 */
export const WP_FONT_SIZE_OPTIONS = Object.freeze(Array(MAX_MDS_FONT_SIZES).fill(EMPTY_STRING).map(
  (str, idx) => `size-${idx}`
));
export const WP_FONT_SIZE_VALUES = Object.freeze(generateObject(WP_FONT_SIZE_OPTIONS));
