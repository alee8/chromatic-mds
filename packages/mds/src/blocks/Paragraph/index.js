import PropTypes from 'prop-types';
import React, { useContext } from 'react';

import GridPlus from '~mds/components/GridPlus';
import GridPlusItem from '~mds/components/GridPlus/GridPlusItem';
import { BRAND_COLOR_KEY_OPTIONS } from '~mds/styles/shared/colors';
import { EMPTY_STRING } from '~mds/constants';
import {
  FLEX_DIRECTION_VALUES,
  FLEX_DISPLAY_VALUES,
  FLEX_JUSTIFY_VALUES,
} from '~mds/styles/shared/css';
import {
  GRID_SETTINGS,
  GRID_SIZES,
  MARGIN_OPTIONS,
  MARGIN_VALUES,
  TEXT_ALIGNMENT_OPTIONS,
  TEXT_ALIGNMENT_VALUES,
} from '~mds/constants/prop-types';
import { parseHtml } from '~mds/utils/inline-links';
import { useTypographySize } from '~mds/styles/shared/hooks';
import { WP_FONT_SIZE_OPTIONS } from '~mds/styles/shared/sizes';

import useParagraphStyles from './style';

export default function Paragraph({
  align,
  backgroundColor,
  className,
  children,
  columnSettings,
  content,
  dataTestid,
  dropCap,
  fontSize,
  gridSettings,
  ignoreInlineLinkAndColor,
  isBare,
  indentationLevel,
  margin,
  resetMargin,
  textColor,
}) {
  const productTypographySize = useTypographySize(fontSize);
  const classes = useParagraphStyles({
    align,
    backgroundColor,
    dropCap,
    ignoreInlineLinkAndColor,
    indentationLevel,
    margin,
    resetMargin,
    textColor,
    productTypographySize,
  });

  let paragraph = content.replace(/<p>|<p .*?>|<\/p>/gm, EMPTY_STRING);

  const innerJSX = (
    <p
      className={`${classes.background}  ${classes.dropCap}  ${classes.paragraph}  ${classes.paragraphTypography}  ${className}`}
      data-testid={dataTestid || null}
    >
      {paragraph ? parseHtml(paragraph) : children}
    </p>
  );

  if (isBare) {
    return innerJSX;
  }

  return (
    <GridPlus
      display={FLEX_DISPLAY_VALUES.flex}
      flexDirection={FLEX_DIRECTION_VALUES.row}
      flexJustify={FLEX_JUSTIFY_VALUES.center}
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

/**
 * columnClasses unsupported. If need to, consider columnSizes approach, based on GRID_SIZES,
 * similar to Button, BlockImage, Wistia, YouTube.
 */
Paragraph.propTypes /* remove-proptypes */ = {
  /**
   * 📝 Content/text alignment - left, center, or right the dual button block.
   */
  align: PropTypes.oneOf([...TEXT_ALIGNMENT_OPTIONS, EMPTY_STRING]),
  /**
   * 📝 Can set a background color behind the paragraph.
   * If unset, it defaults to EMPTY_STRING.
   * @todo alee Verify that backgroundColor in general can be EMPTY_STRING and not just for Paragraph
   * @see https://momentiveai.atlassian.net/browse/CMS-7568
   */
  backgroundColor: PropTypes.oneOf([...BRAND_COLOR_KEY_OPTIONS, EMPTY_STRING]),
  /**
   * 🚫 The child components to render inside the paragraph, if any.
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  /**
   * 🚫 Any additional CSS classes to apply to the paragraph block.
   */
  className: PropTypes.string,
  /**
   * 🚫 Grid sizes to apply to the column element to adjust its responsive width.
   *   Formerly, columnClasses.
   */
  columnSettings: PropTypes.shape(GRID_SIZES),
  /**
   * 🚫 The text content to render in the paragraph, supercedes `children` prop if present.
   */
  content: PropTypes.string,
  /**
   * 🚫 Optional attribute for testing purposes.
   */
  dataTestid: PropTypes.string,
  /**
   * 📝 Can add a drop cap to the paragraph.
   */
  dropCap: PropTypes.bool,
  /**
   * 📝 Can change the font size.
   * Values are based on WP_FONT_SIZE_OPTIONS that are of the form `size-1, size-2, ...`
   */
  fontSize: PropTypes.oneOf(WP_FONT_SIZE_OPTIONS),
  /**
   * 🚫 The gridSettings to apply to the outer grid element.  Formerly, gridClass.
   * TODO: possibly https://momentiveai.atlassian.net/browse/CMS-6660
   */
  gridSettings: PropTypes.shape(GRID_SETTINGS),
  /**
   * 🚫 This is set to true when SMLink is wrapped by Paragraph for LinkText
   */
  ignoreInlineLinkAndColor: PropTypes.bool,
  /**
   * 📝 Can add indentation to paragraph.
   */
  indentationLevel: PropTypes.number,
  /**
   * 🚫 Whether to wrap Grid around <p> tag - isBare is no and !isBare is yes.
   */
  isBare: PropTypes.bool,
  /**
   * 📝 Whether to keep or remove the top, bottom, or both margins outside the logo wall. Removing margins eliminates white space between the logo wall and other components.
   * NOTE: This is not a property of the Block but is one for use as a component
   */
  margin: PropTypes.oneOf(MARGIN_OPTIONS),
  /**
   * 🚫 Whether or not to reset any default block margins as a result of being nested inside a layout component.
   */
  resetMargin: PropTypes.bool,
  /**
   * 📝 Can change the text color.
   */
  textColor: PropTypes.oneOf([...BRAND_COLOR_KEY_OPTIONS, EMPTY_STRING]),
};

Paragraph.defaultProps = {
  align: TEXT_ALIGNMENT_VALUES.left,
  backgroundColor: EMPTY_STRING,
  className: EMPTY_STRING,
  columnSettings: { xs: 10, md: 8, xl: 6 },
  content: EMPTY_STRING,
  dropCap: false,
  gridSettings: {
    fluid: false,
    noBleeds: true,
    noGutters: true,
  },
  ignoreInlineLinkAndColor: false,
  indentationLevel: 0,
  isBare: false,
  margin: MARGIN_VALUES.default,
  resetMargin: false,
  textColor: EMPTY_STRING,
};
