import PropTypes from 'prop-types';
import React from 'react';

// import { t } from '@sm/intl';

import Heading from '~mds/blocks/Heading';

import { BRAND_COLOR_KEY_VALUES } from '~mds/styles/shared/colors';
import {
  DISPLAY_VALUES,
  FLEX_ALIGN_VALUES,
  FLEX_DIRECTION_VALUES,
  FLEX_JUSTIFY_VALUES,
} from '~mds/styles/shared/css';
import {
  SPACING_SIZE_VALUES,
  TEXT_ALIGNMENT_VALUES,
} from '~mds/constants/prop-types';
import { WP_FONT_SIZE_VALUES } from '~mds/styles/shared/sizes';
import Box from '~mds/components/Box';

import COPY from './copy';

const ERROR_FONTSIZE = WP_FONT_SIZE_VALUES.size9;
const GUIDANCE_FONTSIZE = WP_FONT_SIZE_VALUES.size7;

/**
 * Render a Tableau error component.
 *
 * @returns {React.Element} Tableau react component.
 */
export default function TableauError({ className, my }) {
  return (
    <Box
      className={className}
      display={DISPLAY_VALUES.flex}
      flexAlign={FLEX_ALIGN_VALUES.center}
      flexDirection={FLEX_DIRECTION_VALUES.column}
      flexJustify={FLEX_JUSTIFY_VALUES.center}
      my={my}
    >
      <Box
        display={DISPLAY_VALUES.flex}
        flexAlign={FLEX_ALIGN_VALUES.center}
        flexDirection={FLEX_DIRECTION_VALUES.column}
        flexJustify={FLEX_JUSTIFY_VALUES.center}
        mx={5}
      >
        <Box
          display={DISPLAY_VALUES.block}
          mb={2}
        >
          <Heading
            fontSize={ERROR_FONTSIZE}
            isBare
            level={5}
            marginBottom={SPACING_SIZE_VALUES.none}
            marginTop={SPACING_SIZE_VALUES.none}
            textColor={BRAND_COLOR_KEY_VALUES.color2}
          >
            {COPY.ERROR.defaultMessage}
          </Heading>
        </Box>
        <Heading
          align={TEXT_ALIGNMENT_VALUES.center}
          isBare
          level={3}
          marginBottom={SPACING_SIZE_VALUES.none}
          marginTop={SPACING_SIZE_VALUES.none}
          textColor={BRAND_COLOR_KEY_VALUES.color2}
        >
          {COPY.MESSAGE.defaultMessage}
        </Heading>
        <Box
          display={DISPLAY_VALUES.block}
          mt={5}
        >
          <Heading
            align={TEXT_ALIGNMENT_VALUES.center}
            fontSize={GUIDANCE_FONTSIZE}
            isBare
            level={6}
            marginBottom={SPACING_SIZE_VALUES.none}
            marginTop={SPACING_SIZE_VALUES.none}
            textColor={BRAND_COLOR_KEY_VALUES.color2}
          >
            {COPY.GUIDANCE.defaultMessage}
          </Heading>
        </Box>
      </Box>
    </Box>
  );
}

TableauError.propTypes /* remove-proptypes */ = {
  className: PropTypes.string.isRequired,
  my: PropTypes.number.isRequired,
};
