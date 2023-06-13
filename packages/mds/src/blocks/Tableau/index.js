import PropTypes from 'prop-types';
import React, {
  useRef,
} from 'react';

import GridPlus from '~mds/components/GridPlus';
import GridPlusItem from '~mds/components/GridPlus/GridPlusItem';

import { EMPTY_STRING } from '~mds/constants';
import {
  FLEX_ALIGN_VALUES,
  FLEX_DIRECTION_VALUES,
  FLEX_DISPLAY_VALUES,
  FLEX_JUSTIFY_VALUES,
} from '~mds/styles/shared/css';
import { MAX_NUM_GRIDS } from '~mds/constants/sizes';
import { useMdsDeviceSize } from '~mds/providers/ResponsiveBreakpoints/ResponsiveBreakpoints';

import TableauError from './TableauError';
import useTableauScriptAPI from './hook';
import useTableauStyles from './style';

export default function Tableau({
  desktopHeight,
  desktopWidth,
  embedShortname,
  mobileHeight,
  mobileWidth,
}) {
  const desktopTableauRef = useRef(null);
  const mobileTableauRef = useRef(null);
  const { isDesktop } = useMdsDeviceSize();

  const hasError = useTableauScriptAPI({
    desktopHeight, desktopTableauRef, desktopWidth, embedShortname, mobileHeight, mobileTableauRef, mobileWidth,
  });

  const {
    contentWrapper,
    desktopSize,
    errorContainer,
    nonDesktopSize,
    tableauContainer,
    tableauDesktop,
    tableauHide,
    tableauNonDesktop,
    tableauShow,
  } = useTableauStyles({
    desktopHeight,
    desktopWidth,
    isDesktop,
    mobileHeight,
    mobileWidth,
  });

  const errorClass = `${errorContainer} ${isDesktop ? desktopSize : nonDesktopSize}`;
  const desktopClass = `${isDesktop ? tableauShow : tableauHide} ${tableauContainer} ${desktopSize} ${tableauDesktop}`;
  const nonDesktopClass = `${!isDesktop ? tableauShow : tableauHide} ${tableauContainer} ${nonDesktopSize} ${tableauNonDesktop}`;
  return (
    <GridPlus
      display={FLEX_DISPLAY_VALUES.flex}
      flexAlign={FLEX_ALIGN_VALUES.center}
      flexDirection={FLEX_DIRECTION_VALUES.column}
      flexJustify={FLEX_JUSTIFY_VALUES.center}
    >
      <GridPlusItem
        xl={10}
        xs={MAX_NUM_GRIDS}
      >
        <div className={contentWrapper}>
          {// Using <div> rather than Wrench Box because Box requires children
          !hasError && (
            <div
              className={desktopClass}
              ref={desktopTableauRef}
            />
          )
          }
          {// Using <div> rather than Wrench Box because Box requires children
            !hasError && (
              <div
                className={nonDesktopClass}
                ref={mobileTableauRef}
              />
            )
          }
          {// Render TableauError due to error
          hasError && (
            <TableauError
              className={errorClass}
              my={isDesktop ? 8 : 6}
            />
          )
        }
        </div>
      </GridPlusItem>
    </GridPlus>
  );
}

Tableau.propTypes /* remove-proptypes */ = {
  /**
   * 📝 Desktop Tableau visualization's height.
   */
  desktopHeight: PropTypes.number.isRequired,
  /**
   * 📝 Desktop Tableau visualization's width.
   */
  desktopWidth: PropTypes.number.isRequired,
  /**
   * 📝 Shortname for the Tableau visualization.
   */
  embedShortname: PropTypes.string,
  /**
   * 📝 Desktop Tableau visualization's height.
   */
  mobileHeight: PropTypes.number.isRequired,
  /**
   * 📝 Mobile Tableau visualization's width.
   */
  mobileWidth: PropTypes.number.isRequired,
};

Tableau.defaultProps = {
  embedShortname: EMPTY_STRING,
};
