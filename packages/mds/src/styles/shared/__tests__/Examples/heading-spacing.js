import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import Box from '~mds/components/Box';
import Heading from '~mds/blocks/Heading';
import MockThemeProvider from '~tests/setupTests/MockThemeProvider';
import { PRODUCT_VALUES } from '~mds/constants/products';

const DATA = [
  {
    className: 'gfBoxWrapper',
    product: PRODUCT_VALUES.gf,
  },
  {
    className: 'mntvBoxWrapper',
    product: PRODUCT_VALUES.mntv,
  },
  {
    className: 'smHelpBoxWrapper',
    product: PRODUCT_VALUES.smHelp,
  },
  {
    className: 'smBoxWrapper',
    product: PRODUCT_VALUES.sm,
  },
];

const useHeadingSpacingStyle = createUseStyles(({ colors: { brand } }) => ({
  gfBoxWrapper: {
    backgroundColor: brand.color5,
    border: [1, 'solid', brand.color1],
  },
  mntvBoxWrapper: {
    backgroundColor: brand.color18,
    border: [1, 'solid', brand.color1],
  },
  smHelpBoxWrapper: {
    backgroundColor: brand.color23,
    border: [1, 'solid', brand.color1],
  },
  smBoxWrapper: {
    backgroundColor: brand.color24,
    border: [1, 'solid', brand.color1],
  },
}));

export function HeadingStory({
  args, index,
}) {
  const {
    level,
    marginBottom,
    marginTop,
    paddingBottom,
    paddingTop,
  } = args;
  const storyData = DATA[index];
  const classes = useHeadingSpacingStyle();
  return (
    <Box className={classes[storyData.className]}>
      <Heading
        level={level}
        marginBottom={marginBottom}
        marginTop={marginTop}
        paddingBottom={paddingBottom}
        paddingTop={paddingTop}
      >
        {`Responsive spacing for ${storyData.product}`}
      </Heading>
    </Box>
  );
}
HeadingStory.propTypes = {
  args: PropTypes.shape({
    level: PropTypes.number,
    marginBottom: PropTypes.string,
    marginTop: PropTypes.string,
    paddingBottom: PropTypes.string,
    paddingTop: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
export default function HeadingSpacing(args) {
  return (
    <>
      {DATA.map(({ product }, index) => {
        return (
          <MockThemeProvider
            key={product}
            product={product}
          >
            <hr />
            <HeadingStory
              args={args}
              index={index}
            />
            {index === 3 && <hr />}
          </MockThemeProvider>
        );
      })}
    </>
  );
}

HeadingSpacing.args = {
  level: 1,
};
HeadingSpacing.argTypes = {
  level: {
    control: { type: 'radio' },
    description: 'Level for `<hLevel>` markup',
    options: [1, 2, 3, 4],
    table: { defaultValue: { summary: 1 } },
  },
};
