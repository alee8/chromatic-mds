import React from 'react';

import Box from '~mds/components/Box';
import GridPlus from '~mds/components/GridPlus';
import GridPlusItem from '~mds/components/GridPlus/GridPlusItem';
import Heading from '~mds/blocks/Heading';
import MockThemeProvider from '~tests/setupTests/MockThemeProvider';
import Paragraph from '~mds/blocks/Paragraph';
import { BRAND_COLOR_KEY_VALUES } from '~mds/styles/shared/colors';
import {
  FLEX_ALIGN_OPTIONS,
  FLEX_ALIGN_VALUES,
  FLEX_DIRECTION_OPTIONS,
  FLEX_DIRECTION_VALUES,
  FLEX_DISPLAY_VALUES,
  FLEX_JUSTIFY_OPTIONS,
  FLEX_JUSTIFY_VALUES,
} from '~mds/styles/shared/css';
import {
  MARGIN_VALUES,
  SPACING_SIZE_VALUES,
} from '~mds/constants/prop-types';
import { PRODUCT_VALUES } from '~mds/constants/products';

import greyprintBoxStyle, { useGridPlusLayoutStyles } from './style';

/**
 * This story showcases the 3 key props of a GridPlus (i.e., `fluid`, `noBleeds`, `noGutters`) and
 * `flexDirection` flexbox props.  The latter prop is what sets GridPlus apart from Wrench Grid.
 *
 * Using 3 GridPlusItems, each taking 1/3 equal width even when browser is resized.
 * `flexDirection` demonstrates the 3 GridPlusItems can be:
 * 1. placed side-by-side in a row (i.e., `row`, `row-reverse`) OR
 * 2. stacked vertically in a column (i.e., `column`, `column-reverse`).
 * GridPlusItems do not have fluid or bleeds but a boolean `noGutters` to disable its own gutter.
 *
 * @param {object} args settings for GridPlus
 */
function ColorGridLayout(props) {
  const { bodyBackground, fullHighlight } = useGridPlusLayoutStyles();
  return (
    <Box
      className={bodyBackground}
      pb={6}
      pt={4}
    >
      <Box px={4}>
        <Heading
          isBare
          level={3}
          marginBottom={SPACING_SIZE_VALUES.none}
          textColor={BRAND_COLOR_KEY_VALUES.color0}
        >
          GridPlus props
        </Heading>
        <Paragraph
          isBare
          margin={MARGIN_VALUES.removeAll}
          textColor={BRAND_COLOR_KEY_VALUES.color20}
        >
          Yellow highlights fluid area when fluid=false
        </Paragraph>
        <Paragraph
          isBare
          margin={MARGIN_VALUES.removeAll}
          textColor={BRAND_COLOR_KEY_VALUES.color25}
        >
          Orange highlights bleed area when noBleeds=false
        </Paragraph>
        <Paragraph
          isBare
          margin={MARGIN_VALUES.removeTop}
          textColor={BRAND_COLOR_KEY_VALUES.color10}
        >
          Green highlights gutter areas when noGutters=false
        </Paragraph>
      </Box>
      <Box
        className={fullHighlight}
        px={6}
        py={6}
      >
        <GridPlus {...props}>
          {[...Array(3)].map((item, idx) => (
            <GridPlusItem key={`${idx}`}>
              <div style={greyprintBoxStyle}>
                {`Item ${idx}`}
              </div>
            </GridPlusItem>
          ))}
        </GridPlus>
      </Box>
    </Box>
  );
}

function BasicExample(args) {
  return (
    <MockThemeProvider product={PRODUCT_VALUES.mntv}>
      <ColorGridLayout {...args} />
    </MockThemeProvider>
  );
}

BasicExample.argTypes = {
  display: {
    control: { table: { disable: true } },
  },
  flexAlign: {
    control: { type: 'select' },
    description: '🚫 CSS align-items property sets the alignment of items on the cross axis for all direct children as a group.',
    options: FLEX_ALIGN_OPTIONS,
  },
  flexDirection: {
    control: { type: 'radio' },
    description: '🚫 CSS flex-direction property defines direction (normal or reversed) that the flex items are placed in the main axis.',
    options: FLEX_DIRECTION_OPTIONS,
  },
  flexJustify: {
    control: { type: 'select' },
    description: '🚫 CSS justify-content property defines how the browser distributes spaces between and around content items along the main axis.',
    options: FLEX_JUSTIFY_OPTIONS,
  },
};
BasicExample.args = {
  display: FLEX_DISPLAY_VALUES.flex,
  flexAlign: FLEX_ALIGN_VALUES.normal,
  flexDirection: FLEX_DIRECTION_VALUES.row,
  flexJustify: FLEX_JUSTIFY_VALUES.flexStart,
};
BasicExample.parameters = {
  controls: {
    include: [
      'flexAlign',
      'flexDirection',
      'flexJustify',
      'fluid',
      'noBleeds',
      'noGutters',
    ],
    sort: 'alpha', // https://storybook.js.org/docs/react/essentials/controls#sorting-controls
  },
};

export default BasicExample;
