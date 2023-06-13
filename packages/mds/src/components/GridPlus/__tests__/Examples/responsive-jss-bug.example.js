import React from 'react';

import Grid from '~mds/components/GridPlus';
import GridItem from '~mds/components/GridPlus/GridPlusItem';
import MockThemeProvider from '~tests/setupTests/MockThemeProvider';
import { PRODUCT_VALUES } from '~mds/constants/products';

import greyprintBoxStyle from './style';

Grid.Item = GridItem;

/**
 * Columns have bleeds, gutters but no fluid resizing.
 * Three GridItems each each having responsive sizing at xs and lg.
 * TODO: This is broken until this Bug is resolved:
 * https://github.com/cssinjs/jss/issues/1320
 * It is also possible the Wrench implementation (@0.1.0) on which  GridPlusItem is based is not
 * working correctly for each of the GridItem.  Right now they take equal width due to PR#1320
 * and/or incorrect GridPlusItem implementation.
 * @param {object} args settings for GridPlus
 */
// todo: we can remove this example once the jss fix is in place
export default function ResponsiveBugExample(args) {
  return (
    <MockThemeProvider product={PRODUCT_VALUES.gf}>
      <Grid {...args}>
        <Grid.Item
          id="one"
          lg={6}
          xs={2}
        >
          <div style={greyprintBoxStyle}>xs=2 lg=6</div>
        </Grid.Item>
        <Grid.Item
          id="two"
          lg={2}
          xs={6}
        >
          <div style={greyprintBoxStyle}>xs=6 lg=2</div>
        </Grid.Item>
        <Grid.Item
          id="three"
          lg={4}
          xs={3}
        >
          <div style={greyprintBoxStyle}>xs=3 lg=4</div>
        </Grid.Item>
      </Grid>
    </MockThemeProvider>
  );
}

// Override component's args with this example's own args settings.
ResponsiveBugExample.args = {
  fluid: true,
  noBleeds: true,
  noGutters: true,
};
