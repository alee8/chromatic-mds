import PropTypes from 'prop-types';
import React from 'react';

import Heading from '~mds/blocks/Heading';
import MockThemeProvider from '~tests/setupTests/MockThemeProvider';
import { PRODUCT_VALUES } from '~mds/constants/products';
import {
  SPACING_SIZE_VALUES,
  TEXT_ALIGNMENT_VALUES,
} from '~mds/constants/prop-types';

function Title({ children }) {
  return (
    <MockThemeProvider product={PRODUCT_VALUES.mntv}>
      <Heading
        align={TEXT_ALIGNMENT_VALUES.center}
        fontSize="size-4"
        isBare
        level={4}
        paddingTop={SPACING_SIZE_VALUES.sm}
      >
        {children}
      </Heading>
    </MockThemeProvider>
  );
}
Title.propTypes /* remove-proptypes */ = {
  children: PropTypes.node.isRequired,
};

export default Title;
