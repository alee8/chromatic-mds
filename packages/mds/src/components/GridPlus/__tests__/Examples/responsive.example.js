import React from 'react';

import Grid from '~mds/components/GridPlus';
import GridItem from '~mds/components/GridPlus/GridPlusItem';
import MockThemeProvider from '~tests/setupTests/MockThemeProvider';
import { PRODUCT_VALUES } from '~mds/constants/products';

import greyprintBoxStyle from './style';

const gridBox = <div style={greyprintBoxStyle}>Item</div>;

/**
 * 12 GridItems each responsive sizing constraints from xs to xl.
 * At xs each takes full width.  At xl, each GridItem takes up 2/12th of width.
 * In between, from 2 columns for sm, 3 columns for md, and 4 columns for lg.
 * With 3 GridItems, each taking 1/3 equal width even when browser is resized.
 * Columns have bleeds, gutters but no fluid resizing.
 * GridItems have no responsive sizing constraints.
 * @param {object} args settings for GridPlus
 */
export default function ResponsiveExample(args) {
  const { fluid, noBleeds, noGutters } = args;
  return (
    <MockThemeProvider product={PRODUCT_VALUES.gf}>
      <Grid
        fluid={fluid}
        noBleeds={noBleeds}
        noGutters={noGutters}
      >
        {[...Array(12)].map((item, idx) => (
          <GridItem
            key={`${idx}`}
            lg={3}
            md={4}
            sm={6}
            xl={2}
            xs={12}
          >
            {gridBox}
          </GridItem>
        ))}
      </Grid>
    </MockThemeProvider>
  );
}
