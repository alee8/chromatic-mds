import { DISPLAY_SIZE_VALUES } from '~mds/constants/sizes';
import { getGFTypography } from '~mds/styles/getfeedback/typography';
import { getMNTypography } from '~mds/styles/momentive/typography';
import { getSMTypography } from '~mds/styles/surveymonkey/typography';
import {
  LG_MEDIA_QUERY,
  MD_MEDIA_QUERY,
} from '~mds/styles/shared/media-query';
import { PRODUCT_VALUES } from '~mds/constants/products';

/**
 * Given product, returns the typography object.
 * NOTE: if product is not one of `gf | mntv | sm`, SM typography object is used.
 *
 * @param {String} product - one of `gf | mntv | sm`
 * @returns {Object} typography object
 */
export function getProductTypography(product) {
  const productTypography = {
    [PRODUCT_VALUES.gf]: getGFTypography(),
    [PRODUCT_VALUES.mntv]: getMNTypography(),
    [PRODUCT_VALUES.sm]: getSMTypography(),
    [PRODUCT_VALUES.smHelp]: getSMTypography(),
  };
  return productTypography[product] ?? productTypography[PRODUCT_VALUES.sm];
}

/**
 * Given a product, return an object describing the product's fonts.
 *
 * @param {String} product - one of `gf | mntv | sm`
 * @returns {Object}
 */
export function getMDSFontFaces(product) {
  // Allow for multiple font families; just like the individual font weights in a family, just
  // grow the final array with all of them together, one per font family and font weight
  const typography = getProductTypography(product);
  const fonts = Object.keys(typography.fonts);
  return fonts.reduce((fontFaces, fontFamily) => {
    const font = typography?.fonts?.[fontFamily];
    const {
      assetPath,
      fontName,
      fontWeights,
    } = font;

    fontFaces = fontFaces.concat(
      Object.keys(fontWeights).map((weightName) => {
        const weight = fontWeights[weightName];

        return {
          fontFamily: fontName,
          fontWeight: weight,
          fontDisplay: 'swap',
          src: `url(${assetPath}/${weightName}.woff2) format('woff2')`,
          fallbacks: [
            {
              src: `url(${assetPath}/${weightName}.woff) format('woff')`,
            },
          ],
        };
      })
    );
    return fontFaces;
  }, []);
}

/**
 * Gets the mobile, tablet, desktop type information for specific type `size`.
 *
 * Throws an error if the `size` does not exist in `responsiveTypeSizes`.
 * For example, mistakenly request Momentive `size` when the intended `size` was for SMHelpCenter/SurveyMonkey `size`.
 *
 * @param {MDS_FONT_SIZE_KEY_OPTIONS} size
 * @param {Object} responsiveTypeSizes - Object organized by md, lg and the size options
 * @returns {Object} typeInformation for mobile, tablet, desktop
 */
export function getSpecificTypeSize(size, responsiveTypeSizes) {
  // Guard against requesting a size from the wrong product's Typography (e.g., referencing with Momentive size for SMHelpCenter/SurveyMonkey)
  if (!responsiveTypeSizes[size]) {
    // Check the https://code.corp.surveymonkey.com/pages/cms/web/?path=/story/intro-jss-development-5-mds-typography--page and make sure the right product's Typography table is used.
    debuglog('Invalid type size.', {
      size,
      responsiveTypeSizes,
    });
    throw new Error(`The requested type size (${size}) is undefined|null|EMPTY_STRING for this product.`);
  }

  return {
    [DISPLAY_SIZE_VALUES.sm]: responsiveTypeSizes[size],
    [DISPLAY_SIZE_VALUES.md]: responsiveTypeSizes[DISPLAY_SIZE_VALUES.md][size],
    [DISPLAY_SIZE_VALUES.lg]: responsiveTypeSizes[DISPLAY_SIZE_VALUES.lg][size],
  };
}

/**
 * Gets the responsive typography information for given type `size`.
 * The returned obect can be used directly in JSS style object.
 * This used to be the className mds-type--size-<n>.
 *
 * Throws an error if the `size` does not exist in `responsiveTypeSizes`.
 * For example, mistakenly request Momentive `size` when the intended `size` was for SMHelpCenter/SurveyMonkey `size`.
 *
 * @param {MDS_FONT_SIZE_KEY_OPTIONS} size
 * @param {Object} responsiveTypeSizes - Object organized by md, lg and the size options
 * @returns {Object} responsiveTypeSize for requested `size`
 */
export function getTypeSize(size, responsiveTypeSizes) {
  // Guard against requesting a size from the wrong product's Typography (e.g., request Momentive size for SMHelpCenter/SurveyMonkey).
  if (!responsiveTypeSizes[size]) {
    // Check the https://code.corp.surveymonkey.com/pages/cms/web/?path=/story/intro-jss-development-5-mds-typography--page and make sure the right product's Typography table is used.
    debugLog('Invalid type size.', {
      size,
      responsiveTypeSizes,
    });
    throw new Error(`The requested type size (${size}) is undefined|null|EMPTY_STRING for this product.`);
  }

  // NOTE: media query order must go from sm, md, lg because min-width specifies lower bound.
  // For the lowerbound below DISPLAY_SIZE_VALUES.md, it should be DISPLAY_SIZE_VALUES.sm without any media-query rule (total fallback when really small)
  return {
    ...responsiveTypeSizes[size],
    [MD_MEDIA_QUERY]: responsiveTypeSizes[DISPLAY_SIZE_VALUES.md][size],
    [LG_MEDIA_QUERY]: responsiveTypeSizes[DISPLAY_SIZE_VALUES.lg][size],
  };
}
