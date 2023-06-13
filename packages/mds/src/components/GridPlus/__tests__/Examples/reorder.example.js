import React from 'react';

import GridPlus from '~mds/components/GridPlus';
import GridPlusItem from '~mds/components/GridPlus/GridPlusItem';
import MockThemeProvider from '~tests/setupTests/MockThemeProvider';
import { PRODUCT_VALUES } from '~mds/constants/products';

import greyprintBoxStyle, {
  blueprintBoxStyle,
  orangeprintBoxStyle,
} from './style';

/**
 * Columns have bleeds, gutters but no fluid resizing.
 * 3 GridItems with different ordering depending on browser width.
 * Example is not working properly because when size is lg, the third should be first and the first
 * should be second and the second should be third.
 * When browser width is xs, the  second should be first, the third should be second,
 * and first is last.
 * @param {object} args settings for GridPlus
 */
export default function ReorderExample(args) {
  const { fluid, noBleeds, noGutters } = args;
  return (
    <MockThemeProvider product={PRODUCT_VALUES.gf}>
      <GridPlus
        fluid={fluid}
        noBleeds={noBleeds}
        noGutters={noGutters}
      >
        <GridPlusItem
          lgOrder={2}
          mdOrder={1}
          xsOrder={3}
        >
          <div style={blueprintBoxStyle}>lgOrder=2 mdOrder=1 xsOrder=3</div>
        </GridPlusItem>
        <GridPlusItem
          lgOrder={3}
          mdOrder={2}
          xsOrder={1}
        >
          <div style={greyprintBoxStyle}>lgOrder=3 mdOrder=2 xsOrder=1</div>
        </GridPlusItem>
        <GridPlusItem
          lgOrder={1}
          mdOrder={3}
          xsOrder={2}
        >
          <div style={orangeprintBoxStyle}>lgOrder=1 mdOrder=3 xsOrder=2</div>
        </GridPlusItem>
      </GridPlus>
    </MockThemeProvider>
  );
}
// Override component's args with this example's own args settings.
ReorderExample.args = {
  fluid: true,
  noBleeds: true,
  noGutters: true,
};
