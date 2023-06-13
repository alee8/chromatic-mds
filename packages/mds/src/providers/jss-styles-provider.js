import PropTypes from 'prop-types';
import React from 'react';
import {
  createGenerateId,
  JssProvider,
  SheetsRegistry,
} from 'react-jss';

import LoadScriptProvider from '~mds/providers/LoadScript';
import ResponsiveBreakpointsProvider from '~mds/providers/ResponsiveBreakpoints/ResponsiveBreakpoints';

import {
  PRODUCT_OPTIONS,
  WRENCH_LIBRARY,
} from '~mds/constants/products';

import AppThemeProvider from './app-theme-provider';

/**
 * Wraps all components and ThemeProvider of GetFeedback app experience.
 *
 * @see https://cssinjs.org/jss-api/?v=v10.5.1#generate-your-class-names JSS generation of className
 *
 * @param {React.Element}  children       Enclosed children elements
 * @param {string}         product        One of PRODUCT_VALUES
 * @param {SheetsRegistry} sheetsRegistry Stylesheet aggregator
 * @param {object}         props          Pass-through props
 *
 * @returns {React.Element}
 */
export default function JSSStylesProvider({
  children,
  product,
  sheetsRegistry,
  ...props
}) {
  const generateJssId = React.useMemo(() => createGenerateId(), []);

  const generateId = (rule, srcSheet) => {
    const sheet = srcSheet;
    /*
     * Preserve existing 'wds*' format for Wrench components,
     * for targeting within internal selectors, ex. `class^="wdsIcons"`
     * Apply prefix to all other rules for GF/SM/MNTV components
     */
    if (sheet && !rule.key.startsWith(WRENCH_LIBRARY)) {
      // Prefix exists but does not start with a product already - preserve existing prefix
      if (sheet.options.classNamePrefix && !sheet.options.classNamePrefix.startsWith(product)) {
        sheet.options.classNamePrefix = `${product}-${sheet.options.classNamePrefix}`;
      } else {
        // JSS className with prefix tied to product (gf|mntv|sm)
        sheet.options.classNamePrefix = `${product}-`;
      }
    }

    return generateJssId(rule, sheet);
  };

  return (
    <JssProvider
      {...props}
      generateId={generateId}
      registry={sheetsRegistry}
    >
      <AppThemeProvider
        product={product}
      >
        <LoadScriptProvider>
          <ResponsiveBreakpointsProvider>
            {children}
          </ResponsiveBreakpointsProvider>
        </LoadScriptProvider>
      </AppThemeProvider>
    </JssProvider>
  );
}

JSSStylesProvider.propTypes /* remove-proptypes */ = {
  children: PropTypes.node.isRequired,
  product: PropTypes.oneOf(PRODUCT_OPTIONS).isRequired,
  sheetsRegistry: PropTypes.instanceOf(SheetsRegistry).isRequired,
};
