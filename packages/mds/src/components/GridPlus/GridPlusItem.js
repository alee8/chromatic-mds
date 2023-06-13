import PropTypes from 'prop-types';
import React from 'react';

import withFlex from '~mds/hoc/withFlex';
import { EMPTY_STRING } from '~mds/constants';

import useStylesGridItem from './useStylesGridItem';

const gridColumns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/**
 *
 * @param {object} props for GridItem that includes responsive sizing dependent on browser width.
 *                       Supports ordering based on browser window size.
 *                       Takes gutter settings from parent.
 * TODO: Implementation (flexGrow, order) is partially broken until this Bug is resolved:
 * https://github.com/cssinjs/jss/issues/1320
 */
function GridItem({
  children,
  flexClass,
  noGutters,
  xs,
  sm,
  md,
  lg,
  xl,
  xsMaxWidth,
  smMaxWidth,
  mdMaxWidth,
  lgMaxWidth,
  xlMaxWidth,
  xsOrder,
  smOrder,
  mdOrder,
  lgOrder,
  xlOrder,
  ...rest
}) {
  const { mdsGridPlusItem } = useStylesGridItem({
    noGutters,
    xs,
    sm,
    md,
    lg,
    xl,
    xsMaxWidth,
    smMaxWidth,
    mdMaxWidth,
    lgMaxWidth,
    xlMaxWidth,
    xsOrder,
    smOrder,
    mdOrder,
    lgOrder,
    xlOrder,
  });

  return (
    <div
      className={`${mdsGridPlusItem} ${flexClass}`}
      {...rest}
    >
      {children}
    </div>
  );
}

/* For improved readability of sequencing of grid sizes, maxWidths, and order */
GridItem.propTypes = /* remove-proptypes */ {
  /* eslint-disable react/sort-prop-types */
  /**
   * 🚫 Provided children components of this GridItem.
   */
  children: PropTypes.node,
  /**
   * 🚫 Used internally to support CSS flexbox options. Never override it by setting this prop.
   *    The `withFlex` higher-order component (HOC) sets this prop when CSS flexbox props are
   *    when using GridPlusItem.
   */
  flexClass: PropTypes.string,
  lg: PropTypes.oneOf(gridColumns),
  lgMaxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lgOrder: PropTypes.number,
  md: PropTypes.oneOf(gridColumns),
  mdMaxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mdOrder: PropTypes.number,
  /**
   * 🚫 Whether gutters are present between Wrench grids. This should match the same prop in parent GridPlus.
   */
  noGutters: PropTypes.bool,
  sm: PropTypes.oneOf(gridColumns),
  smMaxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  smOrder: PropTypes.number,
  xl: PropTypes.oneOf(gridColumns),
  xlMaxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  xlOrder: PropTypes.number,
  /**
   * 🚫 A value between 1 & MAX_NUM_GRIDS (12) indicating number of Wrench grids for given breakpoint.
   */
  xs: PropTypes.oneOf(gridColumns),
  /**
   * 🚫 Override the natural Wrench grid's maxWidth.
   * For example, when md=3, its natural Wrench grid's maxWidth is 25% (3/12=1/4=.25).
   * For example, when md=4, its natural Wrench grid's maxWidth is 33.333% (4/12=1/3=.25).
   * A fractional value no greater than 1.0 or a number no greater than 100 representing percentage.
   * NOTE: Depending on the number of grids set for the breakpoint (i.e., xs, sm, md, lg, xl), the
   * natural maxWidth is a fraction of MAX_NUM_GRIDS and the set max-width (e.g., smMaxWidth) should
   * not exceed this value.
   */
  xsMaxWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  /**
   * 🚫 This GridItem's positional order amongst a number of GridItem at given breakpoint.
   */
  xsOrder: PropTypes.number,
  /* eslint-enable react/sort-prop-types */
};

/* For improved readability of sequencing of grid sizes, maxWidths, and order for default prop values */
GridItem.defaultProps = {
  /* eslint-disable react/sort-default-props */
  flexClass: EMPTY_STRING,
  xs: undefined,
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
  noGutters: undefined,
  xsMaxWidth: undefined,
  smMaxWidth: undefined,
  mdMaxWidth: undefined,
  lgMaxWidth: undefined,
  xlMaxWidth: undefined,
  xsOrder: undefined,
  smOrder: undefined,
  mdOrder: undefined,
  lgOrder: undefined,
  xlOrder: undefined,
  /* eslint-enable react/sort-default-props */
};

/**
 * Wrap withFlex higher-order component props around this basic GridItem component.
 * The resulting component is known as `GridItem` internally but `GridPlusItem` externally.
 * Note: `withFlex` will wrap FLEX_PROP_TYPES and GridPlusItem requires that
 * the defaultProp for `display` to be undefined.
 */
export default withFlex(GridItem);
