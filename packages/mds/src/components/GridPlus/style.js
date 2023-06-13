import { createUseStyles } from 'react-jss';

import { GRID_SIZE_VALUES } from '~mds/constants/sizes';

import {
  BOX_SIZING_VALUES,
  DISPLAY_VALUES,
  FLEX_DIRECTION_VALUES,
  FLEX_WRAP_VALUES,
} from '~mds/styles/shared/css';
import {
  CSS_100,
  CSS_AUTO,
  CSS_NONE,
} from '~mds/styles/shared';

function gridGutter(grid, size) {
  return (size ? grid.gutter[size] / -2 : undefined);
}

const useGridPlusStyles = createUseStyles(({ breakpoints, mds: { grid } }) => {
  return {
    mdsGridPlusContainer: {
      // No defaultFonts(theme) rely on MDS responsive typography
      boxSizing: BOX_SIZING_VALUES.borderBox,
      display: DISPLAY_VALUES.flex,
      flexDirection: FLEX_DIRECTION_VALUES.column,
      listStyle: CSS_NONE,
      margin: 0,
      marginRight: CSS_AUTO,
      marginLeft: CSS_AUTO,
      padding: 0,
      width: CSS_100,
      [`@media (min-width: ${breakpoints.xs}px)`]: {
        maxWidth: CSS_NONE, // Cannot do grid.maxWidth (0px)
        paddingLeft: ({ noBleeds }) => !noBleeds && grid.bleed.xs,
        paddingRight: ({ noBleeds }) => !noBleeds && grid.bleed.xs,
      },
      [`@media (min-width: ${breakpoints.sm}px)`]: {
        maxWidth: ({ fluid }) => !fluid && grid.maxWidth.sm,
        paddingLeft: ({ noBleeds }) => !noBleeds && grid.bleed.sm,
        paddingRight: ({ noBleeds }) => !noBleeds && grid.bleed.sm,
      },
      [`@media (min-width: ${breakpoints.md}px)`]: {
        maxWidth: ({ fluid }) => !fluid && grid.maxWidth.md,
        paddingLeft: ({ noBleeds }) => !noBleeds && grid.bleed.md,
        paddingRight: ({ noBleeds }) => !noBleeds && grid.bleed.md,
      },
      [`@media (min-width: ${breakpoints.lg}px)`]: {
        maxWidth: ({ fluid }) => !fluid && grid.maxWidth.lg,
        paddingLeft: ({ noBleeds }) => !noBleeds && grid.bleed.lg,
        paddingRight: ({ noBleeds }) => !noBleeds && grid.bleed.lg,
      },
      [`@media (min-width: ${breakpoints.xl}px)`]: {
        maxWidth: ({ fluid }) => !fluid && grid.maxWidth.xl,
        paddingLeft: ({ noBleeds }) => !noBleeds && grid.bleed.xl,
        paddingRight: ({ noBleeds }) => !noBleeds && grid.bleed.xl,
      },
    },

    mdsGridPlus: {
      boxSizing: BOX_SIZING_VALUES.borderBox,
      display: DISPLAY_VALUES.flex,
      flexDirection: FLEX_DIRECTION_VALUES.row,
      flexWrap: FLEX_WRAP_VALUES.wrap,
      [`@media (min-width: ${breakpoints.xs}px)`]: {
        marginLeft: ({ noGutters }) => !noGutters && gridGutter(grid, GRID_SIZE_VALUES.xs),
        marginRight: ({ noGutters }) => !noGutters && gridGutter(grid, GRID_SIZE_VALUES.xs),
      },
      [`@media (min-width: ${breakpoints.sm}px)`]: {
        marginLeft: ({ noGutters }) => !noGutters && gridGutter(grid, GRID_SIZE_VALUES.sm),
        marginRight: ({ noGutters }) => !noGutters && gridGutter(grid, GRID_SIZE_VALUES.sm),
      },
      [`@media (min-width: ${breakpoints.md}px)`]: {
        marginLeft: ({ noGutters }) => !noGutters && gridGutter(grid, GRID_SIZE_VALUES.md),
        marginRight: ({ noGutters }) => !noGutters && gridGutter(grid, GRID_SIZE_VALUES.md),
      },
      [`@media (min-width: ${breakpoints.lg}px)`]: {
        marginLeft: ({ noGutters }) => !noGutters && gridGutter(grid, GRID_SIZE_VALUES.lg),
        marginRight: ({ noGutters }) => !noGutters && gridGutter(grid, GRID_SIZE_VALUES.lg),
      },
      [`@media (min-width: ${breakpoints.xl}px)`]: {
        marginLeft: ({ noGutters }) => !noGutters && gridGutter(grid, GRID_SIZE_VALUES.xl),
        marginRight: ({ noGutters }) => !noGutters && gridGutter(grid, GRID_SIZE_VALUES.xl),
      },
    },
  };
});

export default useGridPlusStyles;
