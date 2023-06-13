import PropTypes from 'prop-types';
import React from 'react';
import { useTheme } from 'react-jss';

import GridPlus from '~mds/components/GridPlus';
import GridPlusItem from '~mds/components/GridPlus/GridPlusItem';
import {
  ALIGN_COLUMN_WIDTH_OPTIONS,
  ALIGN_COLUMN_WIDTH_VALUES,
  GRID_SETTINGS,
  GRID_SIZES,
  SPACING_SIZE_OPTIONS,
  SPACING_SIZE_VALUES,
  TEXT_ALIGNMENT_OPTIONS,
} from '~mds/constants/prop-types';
import {
  BRAND_COLOR_KEY_OPTIONS,
  BRAND_COLOR_KEY_VALUES,
} from '~mds/styles/shared/colors';
import { EMPTY_STRING } from '~mds/constants';
import {
  FLEX_DIRECTION_VALUES,
  FLEX_DISPLAY_VALUES,
  FLEX_JUSTIFY_VALUES,
} from '~mds/styles/shared/css';
import {
  getMarginSpacing,
  getPaddingSpacing,
} from '~mds/styles/shared/responsive-spacing-styles';
import { parseHtml } from '~mds/utils/inline-links';
import {
  PRODUCT_PROP_KEY,
  PRODUCT_VALUES,
} from '~mds/constants/products';
import { WP_FONT_SIZE_OPTIONS } from '~mds/styles/shared/sizes';

import useHeadingStyles from './style';
import { removeHTag } from './utils';

const INIT_COLUMN_SETTINGS = { xs: 10, md: 8, xl: 6 };
const INIT_GRID_SETTINGS = {
  fluid: false,
  noBleeds: true,
  noGutters: true,
};

/**
 * A block of text with header tags.
 * Some notes regarding defaultProps for Heading.
 * Do not set default for `fontSize` - `undefined` is fine.
 * EMPTY_STRING and `undefined` defers to intrinsic fontSize depending on `level`.
 *
 * There are four sizing options, from H1-H4 (refer to following for header sizing).
 * @see https://code.corp.surveymonkey.com/pages/cms/web/?path=/docs/intro-basics-typography--page
 */
export default function Heading({
  align = ALIGN_COLUMN_WIDTH_VALUES.left,
  anchorLink = EMPTY_STRING,
  backgroundColor = EMPTY_STRING,
  children,
  className = EMPTY_STRING,
  columnSettings = INIT_COLUMN_SETTINGS,
  content = EMPTY_STRING,
  fontSize,
  gridSettings = INIT_GRID_SETTINGS,
  ignoreInlineLinkAndColor = false,
  indentationLevel = 0,
  isBare = false,
  level = 1,
  marginBottom = SPACING_SIZE_VALUES.xs,
  marginTop = SPACING_SIZE_VALUES.md,
  paddingBottom = SPACING_SIZE_VALUES.none,
  paddingTop = SPACING_SIZE_VALUES.none,
  resetMargin = false,
  /* with pre-WordPress 5.8 content, `textAlign` does not exist. Do not set default so style can fallback to `align` that exist pre-WordPress 5.8 */
  textAlign,
  textColor = BRAND_COLOR_KEY_VALUES.color1,
}) {
  const HTag = `h${level}`;
  const {
    heading,
    headingSize,
    headingWithLink,
  } = useHeadingStyles({
    align,
    backgroundColor,
    fontSize,
    HTag,
    indentationLevel,
    level,
    paddingBottom,
    paddingTop,
    resetMargin,
    textAlign,
    textColor,
  });

  // Enabling heading inline anchor link color for SurveyMonkey to keep it consistent with legacy. Inline anchor link behaviour of Heading is not yet defined for
  // GFP and MNTV w.r.t to background colors. Once that is available from design this logic will be modified to include anchor link functionality across networks.
  // @todo https://momentiveai.atlassian.net/browse/CMS-9299
  const { [PRODUCT_PROP_KEY]: product } = useTheme();

  const {
    marginBottomClass,
    marginTopClass,
  } = getMarginSpacing({
    marginBottom,
    marginTop,
  });

  const {
    paddingBottomClass,
    paddingTopClass,
  } = getPaddingSpacing({
    paddingBottom,
    paddingTop,
  });
  const isSurveyMonkey = product === PRODUCT_VALUES.smHelp || product === PRODUCT_VALUES.sm;
  const headingStyle = `${heading} ${isSurveyMonkey && !ignoreInlineLinkAndColor ? headingWithLink : EMPTY_STRING} ${headingSize}  ${className}`;

  // If an h[1-6] tag is present, replace it with the appropriate h<n> tag for the level (HTag)
  const newContent = content && removeHTag(content);

  const innerJSX = (
    <div
      className={`${marginBottomClass} ${marginTopClass} ${paddingBottomClass} ${paddingTopClass} ${headingStyle}`}
      id={anchorLink}
    >
      <HTag>{newContent ? parseHtml(newContent) : children}</HTag>
    </div>
  );
  if (isBare) {
    return innerJSX;
  }

  return (
    <GridPlus
      display={FLEX_DISPLAY_VALUES.flex}
      flexDirection={FLEX_DIRECTION_VALUES.row}
      flexJustify={FLEX_JUSTIFY_VALUES.center}
      id={anchorLink}
      {...gridSettings}
    >
      <GridPlusItem
        {...columnSettings}
        noGutters={gridSettings.noGutters}
      >
        {innerJSX}
      </GridPlusItem>
    </GridPlus>
  );
}

Heading.propTypes /* remove-proptypes */ = {
  /**
   * 📝 Content/text alignment - left, center, or right the heading block.
   *    `align` is oneOf(ALIGN_COLUMN_WIDTH_OPTIONS) for legacy blocks that may have any of these settings.
   *    The legacy CSS implementation of Core Heading allowed for the possibility that it could be used inside of another block (in various column layouts as well as custom blocks). With the JSS implementation of Core Heading, the custom block use case is supported by the `isBare` prop. This prop allows the Heading to discard its own Wrench grid and defer to its container to provide desired margin and padding. Only one column layout block is currently present in JSS (i.e., OneColumn) that provides `full` or `wide` options.  `full` uses the full 12 grids while `wide` makes use of different number of grids (see ~mds/styles/shared/mds/multi-column.js).
   *    Heading has `columnSettings` that allows its Wrench grid to be adjusted in standalone use or when parent container does not use isBare and has its desired influence on Heading's Grid.
   *    When MDS implements its own custom Heading, this propType should switch to oneOf(TEXT_ALIGNMENT_OPTIONS) as support for `'full'` and `'wide'` will be handled by containers of Heading.
   */
  align: PropTypes.oneOf([...ALIGN_COLUMN_WIDTH_OPTIONS, EMPTY_STRING]),
  /**
   * 📝 Can add an anchor link to the header.
   */
  anchorLink: PropTypes.string,
  /**
   * 📝 Can change the background color.
   */
  backgroundColor: PropTypes.oneOf(BRAND_COLOR_KEY_OPTIONS),
  /**
   * 🚫 The child components to render inside the heading, if any.
   */
  children: PropTypes.node,
  /**
   * 🚫 Any additional CSS classes to apply to the heading block.
   */
  className: PropTypes.string,
  /**
   * 🚫 Grid sizes to apply to the column element to adjust its responsive width.
   *   Formerly, columnClasses.
   */
  columnSettings: PropTypes.shape(GRID_SIZES),
  /**
   * 📝 Can edit the header text. (Note for Engineering: Supersedes `children` prop if present.)
   */
  content: PropTypes.string,
  /**
   * 📝 Can change text size that overrides the text size for given `h<level>`.
   * Values are hyphenated versions of MDS_FONT_SIZE_KEY_VALUES
   */
  fontSize: PropTypes.oneOf([...WP_FONT_SIZE_OPTIONS, EMPTY_STRING]),
  /**
   * 🚫 The gridSettings to apply to the outer grid element.  Formerly, gridClass.
   * TODO: possibly https://momentiveai.atlassian.net/browse/CMS-6660
   */
  gridSettings: PropTypes.shape(GRID_SETTINGS),
  /**
   * 🚫 This is set to true when SMLink is wrapped by Heading for LinkText
   */
  ignoreInlineLinkAndColor: PropTypes.bool,
  /**
   * 📝 Can add indentation to heading.
   */
  indentationLevel: PropTypes.number,
  /**
   * 🚫 Whether the component is rendered without (true) or with (false) its Grid wrapper
   */
  isBare: PropTypes.bool,
  /**
   * 📝 Heading level that uses `h<level>` tag.
   */
  level: PropTypes.number,
  /**
   * 📝 The amount of margin you add below the heading.
   */
  marginBottom: PropTypes.oneOf(SPACING_SIZE_OPTIONS),
  /**
   * 📝 The amount of margin you add above the heading.
   */
  marginTop: PropTypes.oneOf(SPACING_SIZE_OPTIONS),
  /**
   * 📝 The amount of padding you can add below the logos. Choices include Default, Small, Medium, Large, XL, and None.
   */
  paddingBottom: PropTypes.oneOf(SPACING_SIZE_OPTIONS),
  /**
   * 📝 The amount of padding you can add above the logos. Choices include Default, Small, Medium, Large, XL, and None.
   */
  paddingTop: PropTypes.oneOf(SPACING_SIZE_OPTIONS),
  /**
   * 🚫 Whether or not to reset any default block margins as a result of being nested inside a layout component.
   */
  resetMargin: PropTypes.bool,
  /**
   * 📝 Text alignment - left, center, or right `align` the heading block;
   *    This prop was introduced in WordPress 5.8.  Moving forwards, `text-align` settings will use
   *    this prop if present. Otherwise `align` (for pre-WordPress 5.8) that has same values.
   */
  textAlign: PropTypes.oneOf(TEXT_ALIGNMENT_OPTIONS),
  /**
   * 📝 Can change the text color.
   */
  textColor: PropTypes.oneOf([...BRAND_COLOR_KEY_OPTIONS, EMPTY_STRING]),
};
