import {
  SPACING_SIZE_OPTIONS,
  SPACING_SIZE_VALUES,
} from '~mds/constants/prop-types';

import { HeadingSpacing } from './Examples';

export default {
  title: 'MDS/Global CSS/Responsive Heading Spacing',
  args: {
    marginBottom: SPACING_SIZE_VALUES.xs,
    marginTop: SPACING_SIZE_VALUES.md,
    paddingBottom: SPACING_SIZE_VALUES.none,
    paddingTop: SPACING_SIZE_VALUES.none,
  },
  argTypes: {
    marginBottom: {
      control: { type: 'radio' },
      description: 'Responsive marginBottom spacing size',
      options: SPACING_SIZE_OPTIONS,
      table: { defaultValue: { summary: SPACING_SIZE_VALUES.xs } },
    },
    marginTop: {
      control: { type: 'radio' },
      description: 'Responsive marginTop spacing size',
      options: SPACING_SIZE_OPTIONS,
      table: { defaultValue: { summary: SPACING_SIZE_VALUES.md } },
    },
    paddingBottom: {
      control: { type: 'radio' },
      description: 'Responsive paddingBottom spacing size',
      options: SPACING_SIZE_OPTIONS,
      table: { defaultValue: { summary: SPACING_SIZE_VALUES.none } },
    },
    paddingTop: {
      control: { type: 'radio' },
      description: 'Responsive paddingTop spacing size',
      options: SPACING_SIZE_OPTIONS,
      table: { defaultValue: { summary: SPACING_SIZE_VALUES.none } },
    },
  },
};

export { HeadingSpacing };
