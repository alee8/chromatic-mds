import { createUseStyles } from 'react-jss';

import { getIndentationMarginStyle } from '~mds/styles/shared/margins';
import { getProductTagSizes } from '~mds/styles/shared/size-utils';
import { getTypeSize } from '~mds/styles/shared/typography';
import { PRODUCT_PROP_KEY } from '~mds/constants/products';
import { TEXT_DECORATION_VALUES } from '~mds/styles/shared/css';
import { unHyphenateNumber } from '~mds/utils/utils';

/**
 * margin and resetMargin can be consolidated as resetMargin is subsumed into margin as
 * 'remove-all' which can get .mds-heading--nested per
 * src/properties/shared/blocks/Heading/heading.scss:.mds-heading--nested.
 *
 * wrapperClass: margin = remove_all should be used in place of resetMargin
 */
const useHeadingStyles = createUseStyles(({
  [PRODUCT_PROP_KEY]: product,
  colors: { brand, link },
  spacing,
  typography: { fontSizes },
}) => {
  return {
    heading: ({
      align,
      backgroundColor,
      indentationLevel,
      textAlign,
      textColor,
    }) => ({
      color: brand[textColor] ?? undefined,
      backgroundColor: brand[backgroundColor] ?? undefined,
      textAlign: textAlign ?? align,
      marginLeft: getIndentationMarginStyle({ indentationLevel, spacing }),
    }),
    // headingSize is for handling explicitly provided `fontSize` prop.
    // Handled separately due to getTypeSize use of media query for responsive browser sizing.
    headingSize: ({ HTag, fontSize }) => ({
      [`& ${HTag}`]: fontSize
        ? getTypeSize(unHyphenateNumber(fontSize), fontSizes)
        : getProductTagSizes(product)[HTag],
    }),
    headingWithLink: {
      '& a': {
        color: link.light,
        textDecoration: TEXT_DECORATION_VALUES.none,
        textDecorationColor: link.light,
        '&:hover': {
          textDecoration: TEXT_DECORATION_VALUES.underline,
        },
      },
    },
  };
});

export default useHeadingStyles;
