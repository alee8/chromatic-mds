import { createUseStyles } from 'react-jss';

import {
  arbitrateOnBottomTopMargins,
  getIndentationMarginStyle,
  getParagraphMarginSettings,
} from '~mds/styles/shared/margins';
import { DISPLAY_SIZE_VALUES } from '~mds/constants/sizes';
import { getALinkTextColor } from '~mds/styles/shared/color-utils';
import {
  getALinkUnderline,
  getALinkUnderlineOnHover,
} from '~mds/styles/shared/text-underline-utils';

import {
  LG_MEDIA_QUERY,
  MD_MEDIA_QUERY,
  XL_MEDIA_QUERY,
} from '~mds/styles/shared/media-query';
import {
  PRODUCT_PROP_KEY,
} from '~mds/constants/products';

/**
 * resetMargin is only in legacy SM Paragraph (ignore for GF).
 * margin is not a WP Block property but provided to allow a wrapperClass to
 * use margin = remove_all in places on cmsweb or as replacement to resetMargin.
 */
const useParagraphStyles = createUseStyles(({
  [PRODUCT_PROP_KEY]: product,
  colors: { brand, link },
  mds: { paragraph: { capDrop } },
  spacing,
}) => {
  return {
    background: {
      backgroundColor: ({ backgroundColor }) => (backgroundColor && brand[backgroundColor]),
      padding: ({ backgroundColor }) => (backgroundColor && [[spacing[5], spacing[2] + spacing[3]]]),
      [MD_MEDIA_QUERY]: {
        padding: ({ backgroundColor }) => (backgroundColor && [[spacing[6], spacing[2] + spacing[6]]]),
      },
      [XL_MEDIA_QUERY]: {
        padding: ({ backgroundColor }) => (backgroundColor && [[spacing[8], spacing[4] + spacing[5]]]),
      },
    },

    dropCap: ({ dropCap }) => (dropCap
      ? {
        '&::first-letter': {
          color: brand[capDrop.green],
          float: 'left',
          fontSize: capDrop.fontSize,
          lineHeight: capDrop.lineHeight, // means lh=32*4=128px
          marginTop: capDrop.topOffset,
        },
      }
      : undefined),

    paragraph: ({
      align, backgroundColor, ignoreInlineLinkAndColor, indentationLevel, margin, resetMargin, textColor,
    }) => {
      // Kwantae: Paragraph has margin top,bottom at 8px; Butting 2 paragraphs, the combined is 16px
      const marginSettings = getParagraphMarginSettings({ spacing });
      const resetMarginSettings = {
        noReset: [[spacing[4], 0]],
        reset: [[spacing[2], 0]],
      };
      return {
        '& a': !ignoreInlineLinkAndColor && {
          // @see https://momentiveai.atlassian.net/browse/CMS-7568
          ...getALinkTextColor(backgroundColor, product, link),
          textDecoration: getALinkUnderline(backgroundColor, product),
          '&:hover': {
            textDecoration: getALinkUnderlineOnHover(product),
          },
        },

        color: !ignoreInlineLinkAndColor && brand[textColor],

        margin: arbitrateOnBottomTopMargins({
          margin,
          marginSettings,
          product,
          resetMargin,
          resetMarginSettings,
        }),
        marginLeft: getIndentationMarginStyle({ indentationLevel, spacing }),

        textAlign: align,
      };
    },

    paragraphTypography: {
      // No actual DISPLAY_SIZE_VALUES.sm but rather use the appropriate top-level _fontSize
      // media-query bug in JSS: Avoid arrow function. Instead build static object with media query props.
      // Also, this https://github.com/cssinjs/jss/issues/1327#issuecomment-707967909 noted that function rules/values have higher source order specificity
      fontFamily: ({ productTypographySize: { [DISPLAY_SIZE_VALUES.sm]: mobileTypeSize } }) => mobileTypeSize.fontFamily,
      fontSize: ({ productTypographySize: { [DISPLAY_SIZE_VALUES.sm]: mobileTypeSize } }) => mobileTypeSize.fontSize,
      fontWeight: ({ productTypographySize: { [DISPLAY_SIZE_VALUES.sm]: mobileTypeSize } }) => mobileTypeSize.fontWeight,
      letterSpacing: ({ productTypographySize: { [DISPLAY_SIZE_VALUES.sm]: mobileTypeSize } }) => mobileTypeSize.letterSpacing,
      lineHeight: ({ productTypographySize: { [DISPLAY_SIZE_VALUES.sm]: mobileTypeSize } }) => mobileTypeSize.lineHeight,
      [MD_MEDIA_QUERY]: {
        fontFamily: ({ productTypographySize: { [DISPLAY_SIZE_VALUES.md]: tabletTypeSize } }) => tabletTypeSize.fontFamily,
        fontSize: ({ productTypographySize: { [DISPLAY_SIZE_VALUES.md]: tabletTypeSize } }) => tabletTypeSize.fontSize,
        fontWeight: ({ productTypographySize: { [DISPLAY_SIZE_VALUES.md]: tabletTypeSize } }) => tabletTypeSize.fontWeight,
        letterSpacing: ({ productTypographySize: { [DISPLAY_SIZE_VALUES.md]: tabletTypeSize } }) => tabletTypeSize.letterSpacing,
        lineHeight: ({ productTypographySize: { [DISPLAY_SIZE_VALUES.md]: tabletTypeSize } }) => tabletTypeSize.lineHeight,
      },
      [LG_MEDIA_QUERY]: {
        fontFamily: ({ productTypographySize: { [DISPLAY_SIZE_VALUES.lg]: desktopTypeSize } }) => desktopTypeSize.fontFamily,
        fontSize: ({ productTypographySize: { [DISPLAY_SIZE_VALUES.lg]: desktopTypeSize } }) => desktopTypeSize.fontSize,
        fontWeight: ({ productTypographySize: { [DISPLAY_SIZE_VALUES.lg]: desktopTypeSize } }) => desktopTypeSize.fontWeight,
        letterSpacing: ({ productTypographySize: { [DISPLAY_SIZE_VALUES.lg]: desktopTypeSize } }) => desktopTypeSize.letterSpacing,
        lineHeight: ({ productTypographySize: { [DISPLAY_SIZE_VALUES.lg]: desktopTypeSize } }) => desktopTypeSize.lineHeight,
      },
    },
  };
});

export default useParagraphStyles;
