import { createUseStyles } from 'react-jss';

import { MDS_FONT_WEIGHT_VALUES } from '~mds/constants/font-info';
import { TEXT_ALIGNMENT_VALUES } from '~mds/constants/prop-types';

function createStyleObject(data) {
  if (!data) {
    return {};
  }
  return Object.keys(data).reduce((colors, color) => {
    colors[color] = {
      background: data[color],
    };
    return colors;
  }, {});
}

export const useBackgroundStyles = createUseStyles(
  ({ colors: { background } }) => (createStyleObject(background))
);

export const useBrandStyles = createUseStyles(
  ({ colors: { brand } }) => (createStyleObject(brand))
);

export const useTextStyles = createUseStyles(
  ({ colors: { text } }) => (createStyleObject(text))
);

export const useUtilityStyles = createUseStyles(
  ({ colors: { utility } }) => (createStyleObject(utility))
);

export const useTableStyles = createUseStyles(({
  spacing,
}) => ({
  blankCell: {
    padding: [[spacing[4], spacing[5]]],
  },
  cell: {
    padding: [[spacing[4], spacing[5]]],
    fontSize: 14,
    fontWeight: MDS_FONT_WEIGHT_VALUES.bold,
    minHeight: spacing[8] + spacing[4],
    textAlign: TEXT_ALIGNMENT_VALUES.center,
  },
  table: {
    width: '100%',
    tableLayout: 'fixed',
    borderCollapse: 'collapse',
  },
}));

export const useTextColorStyles = createUseStyles(({ colors: { brand } }) => ({
  darkText: {
    color: brand.color1,
  },
  lightText: {
    color: brand.color0,
  },
  superscript: {
    fontSize: 24,
    fontWeight: 500,
  },
}));
