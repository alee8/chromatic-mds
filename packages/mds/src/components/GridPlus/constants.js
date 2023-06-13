import { MAX_NUM_GRIDS } from '~mds/constants/sizes';

export const MAX_WIDTH_GRID_SYSTEM = 1400;

/**
 * These values copied from the Wrench Grid implementation.
 * @see https://code.corp.surveymonkey.com/wrench/wrench/blob/master/packages/grid/useStyles.js#L6-L26
 */
export default Object.freeze({
  bleed: {
    xs: 16,
    sm: 32,
    md: 32,
    lg: 32,
    xl: 32,
  },
  columns: MAX_NUM_GRIDS,
  gutter: {
    xs: 16,
    sm: 24,
    md: 24,
    lg: 24,
    xl: 24,
  },
  maxWidth: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: MAX_WIDTH_GRID_SYSTEM,
  },
});
