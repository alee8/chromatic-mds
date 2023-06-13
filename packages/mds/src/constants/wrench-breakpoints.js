import { generateObject } from '~mds/utils/utils';

/**
 * Array constants for Wrench breakpoint names.
 *
 * @constant
 * @type {Array}
 * @default
 */
export const WRENCH_BREAKPOINT_OPTIONS = Object.freeze([
  'xs', 'sm', 'md', 'lg', 'xl', 'none',
]);
/**
 * Object constants for Wrench breakpoint names.
 *
 * @constant
 * @type {Array}
 * @default
 */
export const WRENCH_BREAKPOINT_VALUES = Object.freeze(
  generateObject(WRENCH_BREAKPOINT_OPTIONS)
);

/**
 * Each key is a Wrench breakpoint size name.
 * Each value the respective Wrench breakpoint size.
 *
 * @constant
 * @type {Object}
 * @default
 */
export const WRENCH_BREAKPOINT_SETTINGS = Object.freeze({
  [WRENCH_BREAKPOINT_VALUES.xs]: 0,
  [WRENCH_BREAKPOINT_VALUES.sm]: 576,
  [WRENCH_BREAKPOINT_VALUES.md]: 768,
  [WRENCH_BREAKPOINT_VALUES.lg]: 992,
  [WRENCH_BREAKPOINT_VALUES.xl]: 1200,
});
