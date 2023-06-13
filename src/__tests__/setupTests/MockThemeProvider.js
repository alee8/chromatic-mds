import PropTypes from 'prop-types';
import React from 'react';
import {
  jss,
  SheetsRegistry,
} from 'react-jss';

import globalStyle from '~mds/styles/shared/global';
import JSSStylesProvider from '~mds/providers/jss-styles-provider';
import {
  PRODUCT_OPTIONS,
  PRODUCT_VALUES,
} from '~mds/constants/products';

export default function MockThemeProvider({
  product = PRODUCT_VALUES.sm,
  children,
}) {
  const sheetsRegistry = new SheetsRegistry();
  const style = globalStyle(product);
  jss.createStyleSheet(style).attach();

  return (
    <JSSStylesProvider
      product={product}
      sheetsRegistry={sheetsRegistry}
      classNamePrefix={`${product}-`}
    >
      {children}
    </JSSStylesProvider>
  );
}

MockThemeProvider.propTypes = {
  product: PropTypes.oneOf(PRODUCT_OPTIONS),
  children: PropTypes.node,
};
