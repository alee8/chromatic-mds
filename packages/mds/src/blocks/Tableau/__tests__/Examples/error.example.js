import PropTypes from 'prop-types';
import React from 'react';

import MockThemeProvider from '~tests/setupTests/MockThemeProvider';
import TableauError from '~mds/blocks/Tableau/TableauError';

import ComponentWrappers from '~tests/setupTests/ComponentWrappers';
import useTableauStyles from '~mds/blocks/Tableau/style';

import { LANG_ES_LA } from '~mds/constants/locales';
import { PRODUCT_VALUES } from '~mds/constants/products';

function ErrorExample(args) {
  const { isDesktop } = args;
  return (
    <ComponentWrappers>
      <MockThemeProvider product={PRODUCT_VALUES.mntv}>
        <TestComponent isDesktop={isDesktop} />
      </MockThemeProvider>
    </ComponentWrappers>
  );
}

const MOCK_TABLEAU = {
  desktopHeight: 827,
  desktopWidth: 1110,
  mobileHeight: 827,
  mobileWidth: 270,
};

function TestComponent({ isDesktop }) {
  const {
    desktopHeight,
    desktopWidth,
    mobileHeight,
    mobileWidth,
  } = MOCK_TABLEAU;
  const {
    desktopSize,
    errorContainer,
    nonDesktopSize,
  } = useTableauStyles({
    desktopHeight,
    desktopWidth,
    isDesktop,
    mobileHeight,
    mobileWidth,
  });
  const errorClass = `${errorContainer} ${isDesktop ? desktopSize : nonDesktopSize}`;

  return (
    <TableauError
      className={errorClass}
      my={isDesktop ? 8 : 6}
    />
  );
}
TestComponent.propTypes = {
  isDesktop: PropTypes.bool.isRequired,
};

ErrorExample.args = {
  isDesktop: true,
  locale: LANG_ES_LA,
};
ErrorExample.argTypes = {
  isDesktop: {
    control: { type: 'boolean' },
    description: 'For the TableauError component only, choose either desktop or mobile version.',
    table: { defaultValue: { summary: true } },
  },
};

ErrorExample.parameters = {
  controls: { include: ['isDesktop'] },
};

export default ErrorExample;
