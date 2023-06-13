import { getTypeSize } from '~mds/styles/shared/typography';
import { MDS_RESPONSIVE_TYPE_SIZES } from '~mds/styles/getfeedback/sizes';
import { TYPE_TAG_VALUES } from '~mds/constants/html';

import { EMPTY_STRING } from '~mds/constants';

import { MDS_FONT_SIZE_KEY_VALUES } from '../shared/sizes';

/**
 * Returns the object mapping html markup (e.g., h1, p) to responsive type sizes.
 *
 * @constant {object} map from markup to responsive type size
 */
export function getGFResponsiveTypeSizes() {
  return MDS_RESPONSIVE_TYPE_SIZES;
}

/**
 * HTML tags to semantic size values for GetFeedback.
 * The semantic size values match with size<n> keys in MDS_RESPONSIVE_TYPE_SIZES
 *
 * @see From https://code.corp.surveymonkey.com/pages/cms/web/?path=/docs/intro-basics-typography--page
 *
 * @returns {object} map of tag to semantic size name
*/
export function getGFTagSemanticSizes() {
  return Object.freeze({
    [TYPE_TAG_VALUES.h1]: MDS_FONT_SIZE_KEY_VALUES.size1,
    [TYPE_TAG_VALUES.h2]: MDS_FONT_SIZE_KEY_VALUES.size2,
    [TYPE_TAG_VALUES.h3]: MDS_FONT_SIZE_KEY_VALUES.size3,
    [TYPE_TAG_VALUES.h4]: MDS_FONT_SIZE_KEY_VALUES.size4,
    [TYPE_TAG_VALUES.h5]: MDS_FONT_SIZE_KEY_VALUES.size11,
    [TYPE_TAG_VALUES.h6]: MDS_FONT_SIZE_KEY_VALUES.size16, // Eyebrow
    [TYPE_TAG_VALUES.label]: MDS_FONT_SIZE_KEY_VALUES.size11,
    // LI/li's size10 is same as size6 used for P2/p2
    [TYPE_TAG_VALUES.li]: MDS_FONT_SIZE_KEY_VALUES.size10,
    [TYPE_TAG_VALUES.p]: MDS_FONT_SIZE_KEY_VALUES.size5,
    [TYPE_TAG_VALUES.p1]: MDS_FONT_SIZE_KEY_VALUES.size5,
    [TYPE_TAG_VALUES.p2]: MDS_FONT_SIZE_KEY_VALUES.size6,
    [TYPE_TAG_VALUES.p3]: MDS_FONT_SIZE_KEY_VALUES.size7,
    [TYPE_TAG_VALUES.p4]: MDS_FONT_SIZE_KEY_VALUES.size8,
    [TYPE_TAG_VALUES.p5]: MDS_FONT_SIZE_KEY_VALUES.size9,
  });
}

/**
 * Given html markup tag (including pseudo <p> such as p1-p5), returns an object with typography
 * information for mobile, tablet, desktop.
 * NOTE: object has root keys (md/tablet, lg/desktop) for object holding the typography size information.
 * Mobile's typography size information has no root key but root keys of mobile's type information.
 * This is intended to work with media queries involving min-width < bp where (bp = Wrench's xs, sm, md, lg, xl).
 * mobile = min-width < bp=sm  (i.e., min-width < 576px)
 * tablet = min-width < bp=lg (i.e., min-width < 992px)
 * desktop = min-width above bp=lg
 *
 * @param {String} tag valid values are 'h1, h2, h3, h4, h5, h6, p, p1, p2, p3, p4, p5, li, label, link'
 */
export function getGFTypography(tag) {
  const sizes = getGFTagSemanticSizes();
  const size = sizes?.[tag] ?? EMPTY_STRING;
  return getTypeSize(size, getGFResponsiveTypeSizes());
}

/**
 * HTML tags to responsive size values for SurveyMonkey.
 *
 * @returns {object} map of tag to responsive size value
 */
export function getGFTagResponsiveSizes() {
  return Object.freeze({
    [TYPE_TAG_VALUES.h1]: getGFTypography(TYPE_TAG_VALUES.h1),
    [TYPE_TAG_VALUES.h2]: getGFTypography(TYPE_TAG_VALUES.h2),
    [TYPE_TAG_VALUES.h3]: getGFTypography(TYPE_TAG_VALUES.h3),
    [TYPE_TAG_VALUES.h4]: getGFTypography(TYPE_TAG_VALUES.h4),
    [TYPE_TAG_VALUES.h5]: getGFTypography(TYPE_TAG_VALUES.h5),
    [TYPE_TAG_VALUES.h6]: getGFTypography(TYPE_TAG_VALUES.h6), // eyebrow
    [TYPE_TAG_VALUES.li]: getGFTypography(TYPE_TAG_VALUES.li),
    [TYPE_TAG_VALUES.p]: getGFTypography(TYPE_TAG_VALUES.p),
    [TYPE_TAG_VALUES.p1]: getGFTypography(TYPE_TAG_VALUES.p1),
    [TYPE_TAG_VALUES.p2]: getGFTypography(TYPE_TAG_VALUES.p2),
    [TYPE_TAG_VALUES.p3]: getGFTypography(TYPE_TAG_VALUES.p3),
    [TYPE_TAG_VALUES.p4]: getGFTypography(TYPE_TAG_VALUES.p4),
    [TYPE_TAG_VALUES.p5]: getGFTypography(TYPE_TAG_VALUES.p5),
  });
}
