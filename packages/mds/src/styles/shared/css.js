import { generateObject } from '~mds/utils/utils';

/**
 * CSS display props and values
 * Start by enumerating those used by MDS
 */

/**
 * CSS box-sizing style values
 * Add as usage crops up.
 * @constant
 */
const BOX_SIZING_OPTIONS = Object.freeze(['border-box', 'content-box']);
export const BOX_SIZING_VALUES = Object.freeze(generateObject(BOX_SIZING_OPTIONS));

/**
 * CSS display props and values
 * Add as MDS use crop up.
 */
export const DISPLAY_OPTIONS = Object.freeze([
  'block',
  'flex',
  'grid',
  'inline',
  'inline-block',
  'inline-flex',
  'inline-grid',
  'none',
  'table-cell',
  'table-row',
]);
export const DISPLAY_VALUES = Object.freeze(generateObject(DISPLAY_OPTIONS));

/**
 * CSS FlexContainer, and GridPlus display props and values
 * Add as MDS use crop up.
 */
export const FLEX_DISPLAY_OPTIONS = Object.freeze([
  'flex',
  'inline-flex',
  'none',
]);
export const FLEX_DISPLAY_VALUES = Object.freeze(generateObject(FLEX_DISPLAY_OPTIONS));

/**
 * CSS flex props and values used by MDS for align-items and justify-content.
 * Please do not any others as this is the common overlap between align-items and justify-content
 * and also the set used by MDS for its align props which has center/left/right values.
 *
 * @constant
 */
const FLEX_OPTIONS = Object.freeze([
  'center',
  'flex-end',
  'flex-start',
  'normal',
]);
export const FLEX_VALUES = Object.freeze(generateObject(FLEX_OPTIONS));

/**
 * CSS flex props and values.
 * Please do not add `start`, `end` since MDS, WDS use only center, flex-end, flex-start
 *
 * @see See wds repo @ packages/wds-core/src/scss/utilities/flex.scss
 *
 * @constant
 */
export const FLEX_ALIGN_OPTIONS = Object.freeze([
  ...FLEX_OPTIONS,
  'baseline',
  'space-between',
  'stretch',
]);
export const FLEX_ALIGN_VALUES = Object.freeze(generateObject(FLEX_ALIGN_OPTIONS));

export const FLEX_DIRECTION_OPTIONS = Object.freeze([
  'column',
  'column-reverse',
  'row',
  'row-reverse',
]);
export const FLEX_DIRECTION_VALUES = Object.freeze(generateObject(FLEX_DIRECTION_OPTIONS));

export const FLEX_ITEM_GROW_VALUES = Object.freeze({
  one: 1,
  zero: 0,
});
export const FLEX_ITEM_GROW_OPTIONS = Object.freeze(Object.values(FLEX_ITEM_GROW_VALUES));

export const FLEX_JUSTIFY_OPTIONS = Object.freeze([
  ...FLEX_OPTIONS,
  'flex-end',
  'flex-start',
  'space-around',
  'space-between',
  'space-evenly',
  'stretch',
]);
export const FLEX_JUSTIFY_VALUES = Object.freeze(generateObject(FLEX_JUSTIFY_OPTIONS));

export const FLEX_WRAP_OPTIONS = Object.freeze([
  'nowrap',
  'wrap',
  'wrap-reverse',
]);
export const FLEX_WRAP_VALUES = Object.freeze(generateObject(FLEX_WRAP_OPTIONS));

/**
 * CSS font weight props and values
 * @constant
 */
const FONT_WEIGHT_OPTIONS = Object.freeze(['bold', 'normal']);
export const FONT_WEIGHT_VALUES = Object.freeze(generateObject(FONT_WEIGHT_OPTIONS));

/**
 * CSS overflow props and values
 * Start by enumerating those used by MDS
 * @constant
 */
export const OVERFLOW_OPTIONS = Object.freeze(['auto', 'hidden', 'touch', 'scroll', 'visible']);
export const OVERFLOW_VALUES = Object.freeze(generateObject(OVERFLOW_OPTIONS));

/**
 * CSS overflow-wrap props and values
 * @constant
 */

const OVERFLOW_WRAP_OPTIONS = Object.freeze(['break-word', 'normal']);
export const OVERFLOW_WRAP_VALUES = Object.freeze(generateObject(OVERFLOW_WRAP_OPTIONS));

/**
 * CSS text decorations props and values
 * @constant
 */
export const TEXT_DECORATION_OPTIONS = Object.freeze(['underline', 'none', 'line-through']);
export const TEXT_DECORATION_VALUES = Object.freeze(generateObject(TEXT_DECORATION_OPTIONS));
