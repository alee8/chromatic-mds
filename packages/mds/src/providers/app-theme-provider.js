import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'react-jss';

import GFTheme from '~mds/styles/getfeedback/theme';
import MNTheme from '~mds/styles/momentive/theme';
import SMTheme from '~mds/styles/surveymonkey/theme';

import {
  PRODUCT_OPTIONS,
  PRODUCT_PROP_KEY,
  PRODUCT_VALUES,
} from '~mds/constants/products';
import { spacing } from '~mds/styles/shared/spacing';
import { WRENCH_BREAKPOINT_SETTINGS } from '~mds/constants/wrench-breakpoints';

const WrenchTheme = {
  breakpoints: WRENCH_BREAKPOINT_SETTINGS,
  spacing
}

/**
 * SM_THEME and SMHELP_THEME are currently the same. Product value is key difference
 * @constant {Object}
 */
const SM_THEME = Object.freeze({
  ...WrenchTheme,
  ...SMTheme,
});
const SMHELP_THEME = Object.freeze({
  ...SM_THEME,
  [PRODUCT_PROP_KEY]: PRODUCT_VALUES.smHelp,
});

/**
 * GFP_THEME and GFPHELP_THEME are currently the same. Product value is key difference
 * @constant {Object}
 */
const GFP_THEME = Object.freeze({
  ...WrenchTheme,
  ...GFTheme,
});

const MNTV_THEME = Object.freeze({
  ...WrenchTheme,
  ...MNTheme,
});

const THEMES = Object.freeze({
  [PRODUCT_VALUES.gf]: GFP_THEME,
  [PRODUCT_VALUES.mntv]: MNTV_THEME,
  [PRODUCT_VALUES.sm]: SM_THEME,
  [PRODUCT_VALUES.smHelp]: SMHELP_THEME,
});

/**
 * Retrieve the theme object, given a product.
 * Fallback is SurveyMonkey theme.
 * @param {string} product one of PRODUCT_VALUES
 */
function getThemeByProduct(product) {
  return THEMES[product] ?? THEMES[PRODUCT_VALUES.sm];
}

/**
 * A JSX theme provider that should be wrapped around an app indicated by product.
 * It also attaches a @global to a stylesheet.
 *
 * @see https://cssinjs.org/jss-api/?v=v10.4.0#create-style-sheet
 *
 * @param {object}      props           AppThemeProvider's props
 * @param {React.Node}  props.children  App's react nodes
 * @param {string}      props.product   gf|sm as proxy for product
 *
 * @returns {React.Element}             App's theme provider markup
 */
export default function AppThemeProvider({ children, product }) {
  const theme = getThemeByProduct(product);

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}

AppThemeProvider.propTypes /* remove-proptypes */ = {
  children: PropTypes.node,
  product: PropTypes.oneOf(PRODUCT_OPTIONS).isRequired,
};
