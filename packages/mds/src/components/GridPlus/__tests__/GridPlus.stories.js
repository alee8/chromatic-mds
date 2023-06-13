import GridPlus from '~mds/components/GridPlus';

import {
  Basic,
  Columns,
  GridList,
  MaxWidths,
  Reorder,
  Responsive,
  ResponsiveBug,
} from './Examples';

/**
 * Skip defining argTypes for `flexDirection` so that it does not show up in Addon Controls table.
 * See basic.example.js where `flexDirection` row appears through argTypes and parameter for the
 * bound Template component called WithFlexDirection.
 * Note: `args` is defined here for `flexDirection`
 */
export default {
  title: 'Layout/Grid Plus',
  component: GridPlus,
  argTypes: {
    fluid: {
      control: { type: 'boolean' },
      description: 'When false, the GridPlus is pinned at 1400px on wide browser widths',
    },
    noBleeds: {
      control: { type: 'boolean' },
      description: 'When false, the left and right GridPlus edge has no gap known as bleeds',
    },
    noGutters: {
      control: { type: 'boolean' },
      description: 'When false, there is no gap (aka, gutter) between GridPlusItems',
    },
  },
  args: {
    fluid: false,
    noBleeds: false,
    noGutters: false,
  },
};

export {
  Basic,
  Columns,
  GridList,
  MaxWidths,
  Reorder,
  Responsive,
  ResponsiveBug,
};
