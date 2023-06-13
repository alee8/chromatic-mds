import { createUseStyles } from 'react-jss';

import { BRAND_COLOR_KEY_VALUES } from '~mds/styles/shared/colors';
import { CSS_NONE } from '~mds/styles/shared';
import {
  DISPLAY_VALUES,
  OVERFLOW_VALUES,
} from '~mds/styles/shared/css';

const useTableauStyles = createUseStyles(({
  colors: { brand }, spacing,
}) => ({
  contentWrapper: {
    overflow: OVERFLOW_VALUES.hidden,
  },
  // Internally referenced styles here in this file
  desktopSize: ({ desktopHeight, desktopWidth }) => ({
    height: desktopHeight,
    width: desktopWidth,
  }),
  nonDesktopSize: ({ mobileHeight, mobileWidth }) => ({
    height: mobileHeight,
    width: mobileWidth,
  }),
  tableauContainer: {
    '& iframe': {
      overflow: OVERFLOW_VALUES.hidden,
    },
  },
  tableauHide: {
    display: CSS_NONE,
  },
  tableauShow: {
    display: DISPLAY_VALUES.block,
  },

  // Available to the Tableau component
  errorContainer: {
    backgroundColor: brand[BRAND_COLOR_KEY_VALUES.color7],
  },
  tableauDesktop: {
    marginBottom: spacing[8],
    marginTop: spacing[8],
  },
  tableauNonDesktop: {
    marginBottom: spacing[6],
    marginTop: spacing[6],
  },
}));

export default useTableauStyles;
