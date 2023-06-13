import React from 'react';

import GridPlus from '~mds/components/GridPlus';
import GridPlusItem from '~mds/components/GridPlus/GridPlusItem';
import MockThemeProvider from '~tests/setupTests/MockThemeProvider';

import { PRODUCT_VALUES } from '~mds/constants/products';

import greyprintBoxStyle from './style';

/**
 * Set only xs=3.  The result is 4 columns taking 3/12 equal space.
 * There are gutters, bleeds but no fluid resizing.
 * @param {object} args settings for GridPlus
 */
export default function GridListExample(args) {
  return (
    <MockThemeProvider product={PRODUCT_VALUES.gf}>
      <GridPlus {...args}>
        {[...Array(10)].map((item, idx) => (
          <GridPlusItem
            key={idx}
            xs={3}
          >
            <div style={greyprintBoxStyle}>
              {`Item ${idx}`}
            </div>
          </GridPlusItem>
        ))}
      </GridPlus>
    </MockThemeProvider>
  );
}
