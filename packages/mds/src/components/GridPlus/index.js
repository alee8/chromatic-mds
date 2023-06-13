import PropTypes from 'prop-types';
import React, { Children } from 'react';

import withFlex from '~mds/hoc/withFlex';
import { EMPTY_STRING } from '~mds/constants';

import useGridPlusStyles from './style';

function Grid({
  children,
  flexClass,
  fluid,
  noBleeds,
  noGutters,
  ...rest
}) {
  const { mdsGridPlus, mdsGridPlusContainer } = useGridPlusStyles({
    fluid,
    noBleeds,
    noGutters,
  });

  const gridItems = Children.map(
    children,
    (child) => {
      return child && React.cloneElement(child, {
        noGutters,
      });
    }
  );

  return (
    <div
      className={mdsGridPlusContainer}
      {...rest}
    >
      <div className={`${mdsGridPlus} ${flexClass}`}>
        {gridItems}
      </div>
    </div>
  );
}

Grid.propTypes /* remove-proptypes */ = {
  /**
   * Provided children components of this Grid.
   */
  children: PropTypes.node,
  /**
   * 🚫 Used internally to support CSS flexbox options.
   *   **Never override it by setting this prop.**
   *   The `withFlex` higher-order component (HOC) sets this prop when CSS flexbox props are
   *   present in GridPlusItem.
   */
  flexClass: PropTypes.string,
  /**
   * When false, the GridPlus is pinned at 1400px on wide browser widths.
   */
  fluid: PropTypes.bool,
  /**
   * When false, the left and right GridPlus edge has no gap known as bleeds.
   */
  noBleeds: PropTypes.bool,
  /**
   * When false, there is no gap (aka, gutter) between GridPlusItems.
   */
  noGutters: PropTypes.bool,
};

Grid.defaultProps = {
  flexClass: EMPTY_STRING,
  fluid: false,
  noBleeds: false,
  noGutters: false,
};

/**
 * Wrap withFlex higher-order component props around this basic Grid component.
 * The resulting component is known as `GridPlus` externally.
 * Note: `withFlex` will wrap FLEX_PROP_TYPES and GridPlus requires that
 * the defaultProp sets `display` to be undefined.
 * Implicitly, the only allowed value is `flex`, `inline-flex`, and `none`.
 * An undefined display value is
 */
export default withFlex(Grid);
