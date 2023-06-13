import {
  BOTTOM,
  CUSTOM_SPACING,
  DESKTOP,
  MARGIN_STRING,
  MOBILE,
  PADDING_STRING,
  TABLET,
  TOP,
} from '~mds/styles/shared/custom-spacing';
import { EMPTY_STRING } from '~mds/constants';
import {
  LG_MEDIA_QUERY,
  MD_MEDIA_QUERY,
} from '~mds/styles/shared/media-query';
import {
  SPACING_NONE,
  SPACING_SIZE_OPTIONS,
} from '~mds/constants/prop-types';

/**
 *
 * @param {String} end - Bottom | Top
 * @param {String} marginOrPadding - Margin | Padding
 * @param {String} size - none | xs | sm | md | lg | xl
 * @param {Boolean} withDot
 * @returns
 */
export function getSpacingClassnames(end, marginOrPadding, size, withDot = false) {
  return `${withDot ? '.' : EMPTY_STRING}${size}${marginOrPadding}${end}`;
}

/**
 * Generates css style object.
 *
 * {
 *  .noneMarginTop: {
 *    marginTop: 0,
 *  },
 *  .jbMarginTop: {
 *    [cssProp]: CUSTOM_SPACING.mobile[SPACING_SIZE_VALUES.jb]
 *    [MD_MEDIA_QUERY]: {
 *      [cssProp]: CUSTOM_SPACING.tablet[SPACING_SIZE_VALUES.jb]
 *    }
 *    [LG_MEDIA_QUERY]: {
 *      [cssProp]: CUSTOM_SPACING.desktop[SPACING_SIZE_VALUES.jb]
 *    }
 *  }
 *  ...
 *  .xsMarginTop: {
 *    [`${SPACING_SIZE_VALUES.xs}${cssProp}`: {
 *    [cssProp]: CUSTOM_SPACING.mobile[SPACING_SIZE_VALUES.xs]
 *    [MD_MEDIA_QUERY]: {
 *      [cssProp]: CUSTOM_SPACING.tablet[SPACING_SIZE_VALUES.xs]
 *    }
 *    [LG_MEDIA_QUERY]: {
 *      [`${cssMarginOrPadding}${bottomOrTop}`]: CUSTOM_SPACING.desktop[SPACING_SIZE_VALUES.xs]
 *    }
 *  }
 * }
 *
 * @param {String} deviceSize - mobile | tablet | desktop
 * @param {String} marginOrPadding - Margin | Padding
 * @param {String} bottomOrTop - Bottom | Top
 * @returns {Object}
 */
function _generateSpacing(deviceSize, marginOrPadding, bottomOrTop) {
  const cssMarginOrPadding = marginOrPadding.toLowerCase();
  const spacingSizesWONone = SPACING_SIZE_OPTIONS.filter((size) => size !== SPACING_NONE);
  // marginBottom | marginTop | paddingBottom | paddingTop
  const cssProp = `${cssMarginOrPadding}${bottomOrTop}`;
  // noneMarginBottom | noneMarginTop | nonePaddingBottom | nonePaddingTop
  const cssNone = getSpacingClassnames(bottomOrTop, marginOrPadding, SPACING_NONE, true);

  const sizeMediaCssValues = spacingSizesWONone.reduce((cumObj, spacingSize) => {
    const className = getSpacingClassnames(bottomOrTop, marginOrPadding, spacingSize, true);
    cumObj[className] = {
      [cssProp]: CUSTOM_SPACING.mobile[spacingSize],
      [MD_MEDIA_QUERY]: {
        [cssProp]: CUSTOM_SPACING.tablet[spacingSize],
      },
      [LG_MEDIA_QUERY]: {
        [cssProp]: CUSTOM_SPACING.desktop[spacingSize],
      },
    };
    return cumObj;
  }, {});

  return {
    [cssNone]: {
      [cssProp]: 0,
    },
    ...sizeMediaCssValues,
  };
}

function _responsiveSpacingStyles() {
  let marginClasses = [DESKTOP, TABLET, MOBILE].reduce((cumObj, size) => {
    const result = _generateSpacing(size, MARGIN_STRING, BOTTOM);
    return {
      ...cumObj,
      ...result,
    };
  }, {});

  marginClasses = [DESKTOP, TABLET, MOBILE].reduce((cumObj, size) => {
    const result = _generateSpacing(size, MARGIN_STRING, TOP);
    return {
      ...cumObj,
      ...result,
    };
  }, marginClasses);

  let paddingClasses = [DESKTOP, TABLET, MOBILE].reduce((cumObj, size) => {
    const result = _generateSpacing(size, PADDING_STRING, BOTTOM);
    return {
      ...cumObj,
      ...result,
    };
  }, {});

  paddingClasses = [DESKTOP, TABLET, MOBILE].reduce((cumObj, size) => {
    const result = _generateSpacing(size, PADDING_STRING, TOP);
    return {
      ...cumObj,
      ...result,
    };
  }, paddingClasses);

  return {
    ...marginClasses,
    ...paddingClasses,
  };
}

export const CSS_SPACING_MEDIA_STYLES = _responsiveSpacingStyles();

/**
 * Determines the JSS margin style prop name for marginBottom, marginTop, and extraMarginsClass.
 * @param {string} marginBottom spacing size for marginBottom.
 * @param {string} marginTop spacing size for marginTop.
 * @param {string} component type of component where the hook is used, to determine extra niche cases.
 * @returns {Object} JSS margin style prop name.
 */
export function getMarginSpacing({
  marginBottom,
  marginTop,
}) {
  const marginBottomClass = getSpacingClassnames(BOTTOM, MARGIN_STRING, marginBottom);
  const marginTopClass = getSpacingClassnames(TOP, MARGIN_STRING, marginTop);

  return {
    marginBottomClass,
    marginTopClass,
  };
}

/**
 * Determines the JSS padding style prop name for paddingBottom and paddingTop, respectively.
 * @param {Object} semantic spacing size for paddingBottom, paddingTop, respectively.
 * @returns {Object} JSS padding style prop name.
 */
export function getPaddingSpacing({
  paddingBottom,
  paddingTop,
}) {
  const paddingBottomClass = getSpacingClassnames(BOTTOM, PADDING_STRING, paddingBottom);
  const paddingTopClass = getSpacingClassnames(TOP, PADDING_STRING, paddingTop);

  return {
    paddingBottomClass,
    paddingTopClass,
  };
}

export const _TEST = {
  _responsiveSpacingStyles,
};
