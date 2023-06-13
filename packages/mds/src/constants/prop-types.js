import PropTypes from 'prop-types';

import { EMPTY_STRING } from '~mds/constants';
import {
  FLEX_ALIGN_OPTIONS,
  FLEX_DIRECTION_OPTIONS,
  FLEX_DISPLAY_OPTIONS,
  FLEX_ITEM_GROW_OPTIONS,
  FLEX_JUSTIFY_OPTIONS,
  FLEX_WRAP_OPTIONS,
} from '~mds/styles/shared/css';
import { generateObject } from '~mds/utils/utils';

/**
 * The allowed block/component alignment values as array of options and as object for blocks.
 */
export const ALIGN_OPTIONS = Object.freeze([
  'center',
  'left',
  'right',
]);
export const ALIGN_VALUES = Object.freeze(generateObject(ALIGN_OPTIONS));

/**
 * MDS column layout options (currently OneColumn uses this)
 * @constant
 */
export const ALIGN_COLUMN_WIDTH_OPTIONS = [
  ...ALIGN_OPTIONS,
  'full',
  'wide',
];
export const ALIGN_COLUMN_WIDTH_VALUES = Object.freeze(generateObject(ALIGN_COLUMN_WIDTH_OPTIONS));

/**
 * Block alignment propType options and values.
 * @constant
 */
export const ALIGN_WIDTH_OPTIONS = Object.freeze([
  ...ALIGN_COLUMN_WIDTH_OPTIONS,
  EMPTY_STRING, // Legacy for cases where an empty string default is provided.
  'xl',
]);
export const ALIGN_WIDTH_VALUES = Object.freeze(generateObject(ALIGN_WIDTH_OPTIONS));

/**
 * Bleed props and values
 */
export const BLEED_OPTIONS = Object.freeze(['left', 'no-bleed', 'right']);
export const BLEED_VALUES = Object.freeze(generateObject(BLEED_OPTIONS));

/**
 * The various color options for the Banner block.
 * @constant
 */
export const BANNER_COLOR_OPTIONS = Object.freeze([
  'info',
  'success',
  'upgrade',
  'warning',
]);
export const BANNER_COLOR_VALUES = Object.freeze(generateObject(BANNER_COLOR_OPTIONS));

/**
 * Button variants.
 * @constant
 */
export const BUTTON_VARIANT_OPTIONS = ['ghost', 'solid', 'text'];
export const BUTTON_VARIANT_VALUES = Object.freeze(generateObject(BUTTON_VARIANT_OPTIONS));

/**
 * MDS column layout options
 * @constant
*/
export const COLUMN_LAYOUT_OPTIONS = ['equal', 'shiftleft', 'shiftright'];
export const COLUMN_LAYOUT_VALUES = Object.freeze(generateObject(COLUMN_LAYOUT_OPTIONS));

/**
 * CTA type options
 *
 * @constant
*/
export const CTA_OPTIONS = ['hero', 'none', 'signup'];
export const CTA_VALUES = Object.freeze(generateObject(CTA_OPTIONS));

/**
 * Flex settings as an object
 * @constant
 */
export const FLEX_PROP_TYPES = {
  /**
   * 🚫 CSS display property for block or inline element and the layout used by its children (i.e., flex).
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display
   */
  display: PropTypes.oneOf(FLEX_DISPLAY_OPTIONS),
  /**
   * 🚫 CSS align-items property sets the alignment of items on the cross axis for all direct children as a group.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
   */
  flexAlign: PropTypes.oneOf(FLEX_ALIGN_OPTIONS),
  /**
   * 🚫 CSS flex-direction property defines direction (normal or reversed) that the flex items are placed in the main axis.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
   */
  flexDirection: PropTypes.oneOf(FLEX_DIRECTION_OPTIONS),
  /**
   * 🚫 CSS flex-grow property sets the flex grow factor of a flex item's main size.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
   */
  flexItemGrow: PropTypes.oneOf(FLEX_ITEM_GROW_OPTIONS), // Technically, this should be a positive number, no negative numbers.
  /**
   * 🚫 CSS justify-content property defines how the browser distributes spaces between and around content items along the main axis.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
   */
  flexJustify: PropTypes.oneOf(FLEX_JUSTIFY_OPTIONS),
  /**
   * 🚫 CSS flex-wrap property defines whether flex items are forced onto one line or can wrap over multiple lines.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
   */
  flexWrap: PropTypes.oneOf(FLEX_WRAP_OPTIONS),
};

/**
 * From @wds/grid/GridItem.js:L9
 * Grid related prop types and values
 * @constant
 */
export const GRID_COLUMNS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const GRID_SETTINGS = {
  fluid: PropTypes.bool,
  noBleeds: PropTypes.bool,
  noGutters: PropTypes.bool,
};
export const GRID_SIZES = {
  xs: PropTypes.oneOf(GRID_COLUMNS),
  sm: PropTypes.oneOf(GRID_COLUMNS),
  md: PropTypes.oneOf(GRID_COLUMNS),
  lg: PropTypes.oneOf(GRID_COLUMNS),
  xl: PropTypes.oneOf(GRID_COLUMNS),
};

/**
 * Allowed HubSpot field types
 */
export const HUBSPOT_FIELD_TYPE_OPTIONS = Object.freeze([
  'booleancheckbox',
  'checkbox',
  'number',
  'radio',
  'phonenumber',
  'select',
  'text',
  'textarea',
]);
export const HUBSPOT_FIELD_TYPE_VALUES = Object.freeze(generateObject(HUBSPOT_FIELD_TYPE_OPTIONS));

/**
 * Allowed Image types
 */
export const IMAGE_TYPE_VALUES = Object.freeze({
  inline: 'inline',
  block: 'block',
});

/**
 * Allowed number of columns in a split layout, split hero, split heroCTAs.
 * TODO: Perhaps better to be 0-based.
 * @constant
 */
export const LAYOUT_COLUMNS = Object.freeze([1, 2, 3]);

/**
 * The allowed margin control values as object and options as array for blocks.
 */
export const MARGIN_VALUES = Object.freeze({
  default: 'default',
  removeAll: 'remove-all',
  removeBottom: 'remove-bottom',
  removeTop: 'remove-top',
});
export const MARGIN_OPTIONS = Object.freeze(Object.values(MARGIN_VALUES));

/**
 * The allowed marketing icon mode as object and options as array for blocks.
 */
export const THEME_COLOR_OPTIONS = Object.freeze([
  'dark',
  'light',
]);
export const THEME_COLOR_VALUES = Object.freeze(generateObject(THEME_COLOR_OPTIONS));

/**
 * The allowed media card type values as object and options as array.
 */
export const MEDIACARD_TYPES_VALUES = Object.freeze({
  noPadding: 'no-padding',
  withBorder: 'with-border',
  withDropshadow: 'with-dropshadow',
  withPadding: 'with-padding',
});
export const MEDIACARD_TYPES_OPTIONS = Object.freeze(Object.values(MEDIACARD_TYPES_VALUES));

/**
 * Menu placement props and values
 */
export const MENU_PLACEMENT_OPTIONS = Object.freeze(['bottom-left', 'top-left', 'bottom-right', 'top-right']);
export const MENU_PLACEMENT_VALUES = Object.freeze(generateObject(MENU_PLACEMENT_OPTIONS));

/**
 * Object placement props and values
 * Start by enumerating those used by MDS
 */
export const PLACEMENT_OPTIONS = Object.freeze(['background', 'float-left', 'float-right']);
export const PLACEMENT_VALUES = Object.freeze(generateObject(PLACEMENT_OPTIONS));

/**
 * showAuth prop options and values
 * From admin@public/wp-content/mu-plugins/sm-mds/includes/class-block-filters.php
 * TODO: is 'bad' also a valid value per admin@public/wp-content/mu-plugins/sm-mds/tests/class-block-filters-test.php
 */
export const SHOW_AUTH_OPTIONS = Object.freeze([
  'all', 'in', 'out', 'new', 'returning',
]);
export const SHOW_AUTH_VALUES = Object.freeze(generateObject(SHOW_AUTH_OPTIONS));

/**
 * Spacing size with value of 'none'.
 * @constant
 * @type {String}
 */
export const SPACING_NONE = 'none';
/**
 * List of spacing size values for controlling margins and paddings.
 * @constant
 * @type {Array[string]}
 */
export const SPACING_SIZE_OPTIONS = Object.freeze([SPACING_NONE, 'xs', 'sm', 'md', 'lg', 'xl', 'jb']);
/**
  * Enum spacing size values for controlling margins and paddings.
  * @constant
  * @type {Object}
  */
export const SPACING_SIZE_VALUES = Object.freeze(generateObject(SPACING_SIZE_OPTIONS));

/**
 * List of wrench icon size values.
 * @constant
 * @type {Array[string]}
 */
export const SIZE_OPTIONS = Object.freeze(['xs', 'sm', 'md', 'lg', 'xl']);

/**
 * Enum wrench icon sizes
 * @constant
 * @type {Object}
 */
export const SIZE_VALUES = Object.freeze(generateObject(SIZE_OPTIONS));

/**
 * The HeroSplit type; controls the component height.
 * @constant
 */
export const SPLIT_HERO_TYPE_OPTIONS = Object.freeze(['x-small', 'small', 'large']);
export const SPLIT_HERO_TYPE_VALUES = Object.freeze(generateObject(SPLIT_HERO_TYPE_OPTIONS));

/**
 * @constant
 * @type {Array}
 */
export const STACK_ORDER_OPTIONS = Object.freeze([
  'natural',
  'reverse',
]);

/**
 * Stacking order options as an object accessible by key
 * @constant
 * @type {Object}
 */
export const STACK_ORDER_VALUES = Object.freeze(generateObject(STACK_ORDER_OPTIONS));

/**
 * The allowed CSS `textAlign` values as array of options and as object for blocks.
 */
export const TEXT_ALIGNMENT_OPTIONS = Object.freeze([
  'center',
  'left',
  'right',
]);
export const TEXT_ALIGNMENT_VALUES = Object.freeze(generateObject(TEXT_ALIGNMENT_OPTIONS));

/**
 * Tooltip placement props and values
 */
export const TOOLTIP_PLACEMENT_OPTIONS = Object.freeze(['bottom', 'left', 'right', 'top']);
export const TOOLTIP_PLACEMENT_VALUES = Object.freeze(generateObject(TOOLTIP_PLACEMENT_OPTIONS));

/**
 * The allowed types of Wistia embeds as array and as object.
 */
export const WISTIA_TYPE_OPTIONS = Object.freeze([
  'inline',
  'lightbox',
]);
export const WISTIA_TYPE_VALUES = Object.freeze(generateObject(WISTIA_TYPE_OPTIONS));
