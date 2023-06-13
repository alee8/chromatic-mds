import {
  getGFResponsiveTypeSizes,
  getGFTagResponsiveSizes,
  getGFTagSemanticSizes,
  getGFTypography,
} from '~mds/styles/getfeedback/size-utils';
import {
  getMNResponsiveTypeSizes,
  getMNTagResponsiveSizes,
  getMNTagSemanticSizes,
  getMNTypography,
} from '~mds/styles/momentive/size-utils';
import {
  getSMResponsiveTypeSizes,
  getSMTagResponsiveSizes,
  getSMTagSemanticSizes,
  getSMTypography,
} from '~mds/styles/surveymonkey/size-utils';
import { PRODUCT_VALUES } from '~mds/constants/products';

/**
 * Given a product, returns the object mapping html markup (e.g., h1, p) to semantic size.
 *
 * @param {string}   product gf | mntv | sm
 *
 * @returns {object} map from html markup to semantic size
 */
const tagSemanticSizes = {
  [PRODUCT_VALUES.gf]: getGFTagSemanticSizes(),
  [PRODUCT_VALUES.mntv]: getMNTagSemanticSizes(),
  [PRODUCT_VALUES.sm]: getSMTagSemanticSizes(),
  [PRODUCT_VALUES.smHelp]: getSMTagSemanticSizes(),
};
export function getProductSemanticSizes(product) {
  return tagSemanticSizes[product] ?? tagSemanticSizes[PRODUCT_VALUES.sm];
}

/**
 * Given a product, returns the object mapping html markup (e.g., h1, p) to responsive type sizes.
 *
 * @param {string}   product gf | mntv | sm
 *
 * @returns {object} map from html markup to responsive size
 */
const tagSizes = {
  [PRODUCT_VALUES.gf]: getGFTagResponsiveSizes(),
  [PRODUCT_VALUES.mntv]: getMNTagResponsiveSizes(),
  [PRODUCT_VALUES.sm]: getSMTagResponsiveSizes(),
  [PRODUCT_VALUES.smHelp]: getSMTagResponsiveSizes(),
};
export function getProductTagSizes(product) {
  return tagSizes[product] ?? tagSizes[PRODUCT_VALUES.sm];
}

/**
 * Given a product, returns the object mapping html markup (e.g., h1, p) to responsive type sizes.
 *
 * @param {string}    product gf | mntv | sm
 *
 * @constant {object} map from markup to responsive type size
 */
const tagTypeSizes = {
  [PRODUCT_VALUES.gf]: getGFResponsiveTypeSizes(),
  [PRODUCT_VALUES.mntv]: getMNResponsiveTypeSizes(),
  [PRODUCT_VALUES.sm]: getSMResponsiveTypeSizes(),
  [PRODUCT_VALUES.smHelp]: getSMResponsiveTypeSizes(),
};
export function getResponsiveTypeSizes(product) {
  return tagTypeSizes[product] ?? tagTypeSizes[PRODUCT_VALUES.sm];
}

/**
 * Given html markup tag (including pseudo <p> such as p1-p5), returns an object contain responsive type information for mobile, tablet, desktop.
 * NOTE: object has root keys (desktop, tablet) each holding the respective size' type information.
 * mobile's type information has no root key but root keys of mobile's type information.
 * Intended to work with media queries involving min-width < bp where (bp = Wrench's xs, sm, md, lg, xl).
 * mobile = min-width < bp=sm  (i.e., min-width < 576px)
 * tablet = min-width < bp=lg (i.e., min-width < 992px)
 * desktop = min-width above bp=lg
 *
 * @param {String} tag valid values are 'h1, h2, h3, h4, h5, h6, p, p1, p2, p3, p4, p5, li, label, link'
 */
export function getTypography(tag, product) {
  const typography = {
    [PRODUCT_VALUES.gf]: getGFTypography(tag),
    [PRODUCT_VALUES.mntv]: getMNTypography(tag),
    [PRODUCT_VALUES.sm]: getSMTypography(tag),
    [PRODUCT_VALUES.smHelp]: getSMTypography(tag),
  };
  return typography[product] ?? typography[PRODUCT_VALUES.sm];
}
