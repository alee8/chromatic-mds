import { createUseStyles } from 'react-jss';

import { BOX_SIZING_VALUES } from '~mds/styles/shared/css';
import { CSS_100 } from '~mds/styles/shared';
import { GRID_SIZE_VALUES } from '~mds/constants/sizes';

import { MAX_WIDTH_GRID_SYSTEM } from './constants';

/**
 * Amount of gutter spacing for a Wrench grid-item. 0 if size is not one of GRID_SIZE_OPTIONS.
 * @param {Object} grid Describes Wrench's grid
 * @param {String} size One of GRID_SIZE_OPTIONS
 * @returns size of gutter in Wrench grid item
 */
function gridGutterItem(grid, size) {
  return size ? grid.gutter[size] / 2 : 0;
}

/**
 *
 * @param {Float | Number | String} mWidth Requested maxWidth expressed as value between [0, 1.0] (float), width (number in terms of pixels) % (string)
 * @param {Number} breakpointWidth Given breakpoint's maxWidth
 * @returns
 */
function maxWidth(mWidth, breakpointWidth) {
  if (!mWidth) {
    // Ensure before any arithmetic, that NaN is produced because of undefined/null in the math
    // While the fix means that react-jss is now handling things correctly (ignoring NaN),
    // best for code not to even produce NaN. https://github.com/cssinjs/jss/issues/1445
    return undefined;
  }
  if (typeof mWidth === 'string') {
    // mWidth as string - as %
    return mWidth;
  }
  if (mWidth > 0 && mWidth <= 1.0) {
    // mWidth as float between [0, 1.0]
    return `${100 * mWidth}%`;
  }

  // mWidth is a number.  When it is 0, return
  if (typeof breakpointWidth === 'string') {
    // Legacy when breakpointWidth was based on Wrench 0.x.x had px in the breakpoint value
    return mWidth <= parseInt(breakpointWidth, 10) ? mWidth : undefined;
  }
  return mWidth <= breakpointWidth ? mWidth : undefined;
}

/**
 * Wrench's grid-item's width. 0 if size is not one of GRID_SIZE_OPTIONS
 * @param {Object} grid Describes Wrench's grid
 * @param {Number} numColumns A value between 0 and MAX_NUM_GRIDS
 * @returns width of Wrench grid item
 */
function width(grid, numColumns) {
  if (!numColumns) {
    // Ensure before any arithmetic, that NaN is produced because of undefined/null in the math
    // While the fix means that react-jss is now handling things correctly (ignoring NaN),
    // best for code not to even produce NaN. https://github.com/cssinjs/jss/issues/1445
    return undefined;
  }
  return `${100 * (numColumns / grid.columns)}%`;
}

const useStylesGridItem = createUseStyles((theme) => {
  const { breakpoints, mds: { grid } } = theme;

  return {
    mdsGridPlusItem: {
      boxSizing: BOX_SIZING_VALUES.borderBox,
      flexBasis: 0,
      flexGrow: 1,
      maxWidth: CSS_100,
      [`@media (min-width: ${breakpoints.xs}px)`]: {
        flex: ({ xs }) => xs && `0 0 ${width(grid, xs)}`,
        maxWidth: ({ xs, xsMaxWidth }) => maxWidth(xsMaxWidth, breakpoints.xs) ?? width(grid, xs),
        order: ({ xsOrder }) => xsOrder,
        paddingLeft: ({ noGutters }) => !noGutters && gridGutterItem(grid, GRID_SIZE_VALUES.xs),
        paddingRight: ({ noGutters }) => !noGutters && gridGutterItem(grid, GRID_SIZE_VALUES.xs),
      },

      [`@media (min-width: ${breakpoints.sm}px)`]: {
        flex: ({ sm }) => sm && `0 0 ${width(grid, sm)}`,
        maxWidth: ({ sm, smMaxWidth }) => maxWidth(smMaxWidth, breakpoints.sm) ?? width(grid, sm),
        order: ({ smOrder }) => smOrder,
        paddingLeft: ({ noGutters }) => !noGutters && gridGutterItem(grid, GRID_SIZE_VALUES.sm),
        paddingRight: ({ noGutters }) => !noGutters && gridGutterItem(grid, GRID_SIZE_VALUES.sm),
      },

      [`@media (min-width: ${breakpoints.md}px)`]: {
        flex: ({ md }) => md && `0 0 ${width(grid, md)}`,
        maxWidth: ({ md, mdMaxWidth }) => maxWidth(mdMaxWidth, breakpoints.md) ?? width(grid, md),
        order: ({ mdOrder }) => mdOrder,
        paddingLeft: ({ noGutters }) => !noGutters && gridGutterItem(grid, GRID_SIZE_VALUES.md),
        paddingRight: ({ noGutters }) => !noGutters && gridGutterItem(grid, GRID_SIZE_VALUES.md),
      },

      [`@media (min-width: ${breakpoints.lg}px)`]: {
        flex: ({ lg }) => lg && `0 0 ${width(grid, lg)}`,
        maxWidth: ({ lg, lgMaxWidth }) => maxWidth(lgMaxWidth, breakpoints.lg) ?? width(grid, lg),
        order: ({ lgOrder }) => lgOrder,
        paddingLeft: ({ noGutters }) => !noGutters && gridGutterItem(grid, GRID_SIZE_VALUES.lg),
        paddingRight: ({ noGutters }) => !noGutters && gridGutterItem(grid, GRID_SIZE_VALUES.lg),
      },

      [`@media (min-width: ${breakpoints.xl}px)`]: {
        flex: ({ xl }) => xl && `0 0 ${width(grid, xl)}`,
        maxWidth: ({ xl, xlMaxWidth }) => maxWidth(xlMaxWidth, MAX_WIDTH_GRID_SYSTEM) ?? width(grid, xl),
        order: ({ xlOrder }) => xlOrder,
        paddingLeft: ({ noGutters }) => !noGutters && gridGutterItem(grid, GRID_SIZE_VALUES.xl),
        paddingRight: ({ noGutters }) => !noGutters && gridGutterItem(grid, GRID_SIZE_VALUES.xl),
      },
    },
  };
});

export const TESTS = { maxWidth };
export default useStylesGridItem;
