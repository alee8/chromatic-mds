import React from 'react';
import { createUseStyles } from 'react-jss';

import { DISPLAY_VALUES } from '~mds/styles/shared/css';
import { FLEX_PROP_TYPES } from '~mds/constants/prop-types';

import getDisplayName from './getDisplayName';

const isNegativeNumber = (value) => typeof (value) === 'number' && !Number.isNaN(value) && value < 0;
const safeRest = ({ style, ...props }) => props;

export function addFlexStyle({
  display,
  flexAlign,
  flexDirection,
  flexItemGrow,
  flexJustify,
  flexWrap,
}) {
  if (!display && !flexAlign && !flexDirection && !flexItemGrow && !flexJustify && !flexWrap) {
    // no flex HOC involvement needed by this instance of WrappedComponent, return {}
    return {};
  }
  if (!display) {
    // flex HOC involvement as one of the HOC props is set but display is not.  Set flex for display.
    display = DISPLAY_VALUES.flex;
  }
  const displayProperty = { display };
  const justify = flexJustify && {
    justifyContent: flexJustify,
  };
  const direction = flexDirection && {
    flexDirection,
  };
  const align = flexAlign && {
    alignItems: flexAlign,
  };
  const wrap = flexWrap ? { flexWrap } : {};
  const itemGrow = !isNegativeNumber ? { flexGrow: flexItemGrow } : {};

  return {
    ...displayProperty,
    ...justify,
    ...direction,
    ...align,
    ...wrap,
    ...itemGrow,
  };
}

export default function withFlex(WrappedComponent) {
  /**
   * JSS injects css styles in the order of `createUseStyles` usage.
   * Hence, useFlexStyles needs to be instantiated every single time while
   * using this HOC because it should be the last `createUseStyles` usage
   * for a component. With this mechanism, `withFlex` overwrites the component
   * display flex properties. Not ideal for a design system.
   *
   * If the decision is have `withFlex` NOT overwrite the component display flex properties,
   * just move this declaration outside of this component. `withFlex` will then
   * add to the styles and not overwrite them.
   */
  const useFlexStyles = createUseStyles({
    addFlex: addFlexStyle,
  });

  function FlexHOC({
    display,
    flexAlign,
    flexDirection,
    flexItemGrow,
    flexJustify,
    flexWrap,
    ...rest
  }) {
    const classes = useFlexStyles({
      display,
      flexAlign,
      flexDirection,
      flexItemGrow,
      flexJustify,
      flexWrap,
      ...rest,
    });

    return (
      <WrappedComponent
        flexClass={classes.addFlex}
        {...safeRest(rest)}
      />
    );
  }

  /**
   * All are set to undefined for defaultProps.
   * Different components use this HOC and work based on these undefined settings.
   * For example, GridPlusItem relies on display=undefined when as a child of GridPlus,
   * its individual GridPlusItem can have flex overrides (e.g., align-self).
   * A possible @todo is to have the wrapped component specify these expected defaults and this HOC
   * to use the approach suggested in this SO answer:
   * https://stackoverflow.com/questions/52360142/how-to-overwrite-default-props-of-a-higher-order-component#answer-52360356
   */
  FlexHOC.defaultProps = {
    display: undefined,
    flexAlign: undefined,
    flexDirection: undefined,
    flexItemGrow: undefined,
    flexJustify: undefined,
    flexWrap: undefined,
  };

  FlexHOC.propTypes = FLEX_PROP_TYPES;

  FlexHOC.displayName = `FlexHOC(${getDisplayName(WrappedComponent)})`;

  FlexHOC.getOriginalComponent = () => WrappedComponent;

  return FlexHOC;
}
