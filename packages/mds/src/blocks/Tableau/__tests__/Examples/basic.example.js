import React from 'react';

import MockThemeProvider from '~tests/setupTests/MockThemeProvider';
import Tableau from '~mds/blocks/Tableau/';

import { PRODUCT_VALUES } from '~mds/constants/products';

export default function BasicExample() {
  return (
    <MockThemeProvider product={PRODUCT_VALUES.mntv}>
      <Tableau
        desktopHeight={827}
        desktopWidth={1110}
        embedShortname="CMStoplinedemo"
        mobileHeight={827}
        mobileWidth={270}
      />
    </MockThemeProvider>
  );
}
