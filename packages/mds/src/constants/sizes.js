import { generateObject } from '../utils/utils';

/**
 * Different type of sizing constants.
 */

/**
 * Display size options as array.
 * Not sorting because it is in an array with values small to large buttressed by default and none (cases for '0' and size + 1).
 *
 * NOTE: A use of this constant is for prop-types related to paddingBottom, paddingTop.
 * Consolidated their values (formerly, PADDING_SIZES) to use DISPLAY_SIZE_VALUES and DISPLAY_SIZE_OPTIONS.
 * PADDING_SIZES are derived from src/properties/shared/styles/utilities/padding-toggle.scss.
 * 'default' implies no settings (just check HTML implementation using paddingBottom|paddingTop).
 *
 * @constant
 * @type {Array}
 * @default
 */
export const DISPLAY_SIZE_OPTIONS = Object.freeze([
  'default',
  'sm',
  'md',
  'lg',
  'xl',
  'xs',
  'none',
]);

/**
 * Display size options as an object with key, value being each of DISPLAY_SIZE OPTIONS.
 * @constant
 * @type {Object}
 * @default
 */
export const DISPLAY_SIZE_VALUES = Object.freeze(generateObject(DISPLAY_SIZE_OPTIONS));

/**
 * Wrench's Grid size options as an array of sizes.
 * @constant
 * @type {Array}
 * @default
 */
export const GRID_SIZE_OPTIONS = Object.freeze([
  'xs',
  'sm',
  'md',
  'lg',
  'xl',
]);
/**
 * MDS Grid size values.
* @constant
* @type {Object}
* @default
*/
export const GRID_SIZE_VALUES = Object.freeze(generateObject(GRID_SIZE_OPTIONS));

/**
 * MDS display size options.
 * See ~mds/styles/shared/media-query for breakpoints defining these sizes:
 * MDS_BIG_DESKTOP_MEDIA_QUERY, MDS_DESKTOP_MEDIA_QUERY,
 * MDS_TABLET_MEDIA_QUERY, MDS_TABLET_MOBILE_QUERY, MDS_TABLET_MOBILE_MEDIA_QUERY,
 * MDS_MOBILE_QUERY, MDS_MOBILE_SMALL_MEDIA_QUERY.
 * @constant
 * @type {Array}
 * @default
 */
const MDS_DISPLAY_SIZE_OPTIONS = Object.freeze([
  'bigDesktop',
  'desktop',
  'mobile',
  'mobileSmall',
  'tablet',
  'tabletMobile',
]);

/**
 * MDS display size values.
 * @constant
 * @type {Object}
 * @default
 */
export const MDS_DISPLAY_SIZE_VALUES = Object.freeze(generateObject(MDS_DISPLAY_SIZE_OPTIONS));

/**
 * Maximum number of columns in Wrench Grid.
 * @constant
 * @type {number}
 * @default
 */
export const MAX_NUM_GRIDS = 12;

/**
 * MDS Button sizes.
 * @constant
 * @type {Array}
 * @default
 */
export const BUTTON_SIZE_OPTIONS = Object.freeze([
  'sm',
  'md',
  'lg',
]);
/**
 * Button size values.
 * @constant
 * @type {Object}
 * @default
 */
export const BUTTON_SIZE_VALUES = Object.freeze(generateObject(BUTTON_SIZE_OPTIONS));
