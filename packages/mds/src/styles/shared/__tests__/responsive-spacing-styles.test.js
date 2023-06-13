/**
 * @jest-environment jsdom
 */
import {
  BOTTOM,
  MARGIN_STRING,
  PADDING_STRING,
  TOP,
} from '~mds/styles/shared/custom-spacing';

import {
  _TEST,
  getMarginSpacing,
  getPaddingSpacing,
  getSpacingClassnames,
} from '../responsive-spacing-styles';

const SIZES = ['none', 'xs', 'sm', 'md', 'lg', 'xl', 'jb'];
describe('Test getSpacingClassnames for margins and paddings', () => {
  const SPACING_TYPES = [MARGIN_STRING, PADDING_STRING];
  const ENDS = [BOTTOM, TOP];

  SIZES.forEach(
    (size) => SPACING_TYPES.forEach(
      (type) => ENDS.forEach((end) => {
        const expected = `${size}${type}${end}`;
        test(
          `Test size(${size}), spacingType(${type}), end(${end})is ${expected}`,
          () => {
            expect(getSpacingClassnames(end, type, size)).toStrictEqual(expected);
          }
        );
      })
    )
  );
});

describe('Test getMarginSpacing and getPaddingSpacing helpers', () => {
  SIZES.forEach(
    (size1) => SIZES.forEach(
      (size2) => test(
        `Test getMarginSpacing with ${size1}MarginBottom, ${size2}MarginTop`,
        () => {
          const expected = {
            marginBottomClass: `${size1}${MARGIN_STRING}${BOTTOM}`,
            marginTopClass: `${size2}${MARGIN_STRING}${TOP}`,
          };
          expect(getMarginSpacing({ marginBottom: size1, marginTop: size2 })).toStrictEqual(expected);
        }
      )
    )
  );
  SIZES.forEach(
    (size1) => SIZES.forEach(
      (size2) => test(
        `Test getPaddingSpacing with ${size1}PaddingBottom, ${size2}PaddingTop`,
        () => {
          const expected = {
            paddingBottomClass: `${size1}${PADDING_STRING}${BOTTOM}`,
            paddingTopClass: `${size2}${PADDING_STRING}${TOP}`,
          };
          expect(getPaddingSpacing({ paddingBottom: size1, paddingTop: size2 })).toStrictEqual(expected);
        }
      )
    )
  );
});

test('Test internal help to generate CSS_SPACING_MEDIA_STYLES constant', () => {
  const expected = {
    '.noneMarginBottom': { marginBottom: 0 },
    '.xsMarginBottom': {
      marginBottom: 8,
      '@media only screen and (min-width: 768px)': { marginBottom: 8 },
      '@media only screen and (min-width: 992px)': { marginBottom: 8 },
    },
    '.smMarginBottom': {
      marginBottom: 16,
      '@media only screen and (min-width: 768px)': { marginBottom: 16 },
      '@media only screen and (min-width: 992px)': { marginBottom: 16 },
    },
    '.mdMarginBottom': {
      marginBottom: 16,
      '@media only screen and (min-width: 768px)': { marginBottom: 24 },
      '@media only screen and (min-width: 992px)': { marginBottom: 32 },
    },
    '.lgMarginBottom': {
      marginBottom: 32,
      '@media only screen and (min-width: 768px)': { marginBottom: 48 },
      '@media only screen and (min-width: 992px)': { marginBottom: 64 },
    },
    '.xlMarginBottom': {
      marginBottom: 32,
      '@media only screen and (min-width: 768px)': { marginBottom: 64 },
      '@media only screen and (min-width: 992px)': { marginBottom: 96 },
    },
    '.jbMarginBottom': {
      marginBottom: 64,
      '@media only screen and (min-width: 768px)': { marginBottom: 96 },
      '@media only screen and (min-width: 992px)': { marginBottom: 128 },
    },
    '.noneMarginTop': { marginTop: 0 },
    '.xsMarginTop': {
      marginTop: 8,
      '@media only screen and (min-width: 768px)': { marginTop: 8 },
      '@media only screen and (min-width: 992px)': { marginTop: 8 },
    },
    '.smMarginTop': {
      marginTop: 16,
      '@media only screen and (min-width: 768px)': { marginTop: 16 },
      '@media only screen and (min-width: 992px)': { marginTop: 16 },
    },
    '.mdMarginTop': {
      marginTop: 16,
      '@media only screen and (min-width: 768px)': { marginTop: 24 },
      '@media only screen and (min-width: 992px)': { marginTop: 32 },
    },
    '.lgMarginTop': {
      marginTop: 32,
      '@media only screen and (min-width: 768px)': { marginTop: 48 },
      '@media only screen and (min-width: 992px)': { marginTop: 64 },
    },
    '.xlMarginTop': {
      marginTop: 32,
      '@media only screen and (min-width: 768px)': { marginTop: 64 },
      '@media only screen and (min-width: 992px)': { marginTop: 96 },
    },
    '.jbMarginTop': {
      marginTop: 64,
      '@media only screen and (min-width: 768px)': { marginTop: 96 },
      '@media only screen and (min-width: 992px)': { marginTop: 128 },
    },

    '.nonePaddingBottom': { paddingBottom: 0 },
    '.xsPaddingBottom': {
      paddingBottom: 8,
      '@media only screen and (min-width: 768px)': { paddingBottom: 8 },
      '@media only screen and (min-width: 992px)': { paddingBottom: 8 },
    },
    '.smPaddingBottom': {
      paddingBottom: 16,
      '@media only screen and (min-width: 768px)': { paddingBottom: 16 },
      '@media only screen and (min-width: 992px)': { paddingBottom: 16 },
    },
    '.mdPaddingBottom': {
      paddingBottom: 16,
      '@media only screen and (min-width: 768px)': { paddingBottom: 24 },
      '@media only screen and (min-width: 992px)': { paddingBottom: 32 },
    },
    '.lgPaddingBottom': {
      paddingBottom: 32,
      '@media only screen and (min-width: 768px)': { paddingBottom: 48 },
      '@media only screen and (min-width: 992px)': { paddingBottom: 64 },
    },
    '.xlPaddingBottom': {
      paddingBottom: 32,
      '@media only screen and (min-width: 768px)': { paddingBottom: 64 },
      '@media only screen and (min-width: 992px)': { paddingBottom: 96 },
    },
    '.jbPaddingBottom': {
      paddingBottom: 64,
      '@media only screen and (min-width: 768px)': { paddingBottom: 96 },
      '@media only screen and (min-width: 992px)': { paddingBottom: 128 },
    },
    '.nonePaddingTop': { paddingTop: 0 },
    '.xsPaddingTop': {
      paddingTop: 8,
      '@media only screen and (min-width: 768px)': { paddingTop: 8 },
      '@media only screen and (min-width: 992px)': { paddingTop: 8 },
    },
    '.smPaddingTop': {
      paddingTop: 16,
      '@media only screen and (min-width: 768px)': { paddingTop: 16 },
      '@media only screen and (min-width: 992px)': { paddingTop: 16 },
    },
    '.mdPaddingTop': {
      paddingTop: 16,
      '@media only screen and (min-width: 768px)': { paddingTop: 24 },
      '@media only screen and (min-width: 992px)': { paddingTop: 32 },
    },
    '.lgPaddingTop': {
      paddingTop: 32,
      '@media only screen and (min-width: 768px)': { paddingTop: 48 },
      '@media only screen and (min-width: 992px)': { paddingTop: 64 },
    },
    '.xlPaddingTop': {
      paddingTop: 32,
      '@media only screen and (min-width: 768px)': { paddingTop: 64 },
      '@media only screen and (min-width: 992px)': { paddingTop: 96 },
    },
    '.jbPaddingTop': {
      paddingTop: 64,
      '@media only screen and (min-width: 768px)': { paddingTop: 96 },
      '@media only screen and (min-width: 992px)': { paddingTop: 128 },
    },
  };
  expect(_TEST._responsiveSpacingStyles()).toStrictEqual(expected);
});
