import { EMPTY_STRING } from '~mds/constants';
import { getTypeSize } from '~mds/styles/shared/typography';
import { MDS_FONT_SIZE_KEY_VALUES } from '~mds/styles/shared/sizes';
import { MDS_RESPONSIVE_TYPE_SIZES } from '~mds/styles/surveymonkey/sizes';
import { TYPE_TAG_VALUES } from '~mds/constants/html';

/**
 * Returns the object mapping html markup (e.g., h1, p) to responsive type sizes.
 *
 * @constant {object} map from markup to responsive type size
 */
export function getSMResponsiveTypeSizes() {
  return MDS_RESPONSIVE_TYPE_SIZES;
}

/**
 * HTML tags to semantic size values for SurveyMonkey.
 *
 * @see https://code.corp.surveymonkey.com/pages/cms/web/?path=/docs/intro-basics-typography--page
 *
 * @returns {object} map of tag to semantic size name
 */
export function getSMTagSemanticSizes() {
  return Object.freeze({
    [TYPE_TAG_VALUES.h1]: MDS_FONT_SIZE_KEY_VALUES.size2, // Large Title
    [TYPE_TAG_VALUES.h2]: MDS_FONT_SIZE_KEY_VALUES.size3, // Medium Title
    [TYPE_TAG_VALUES.h3]: MDS_FONT_SIZE_KEY_VALUES.size4, // Small Title
    [TYPE_TAG_VALUES.h4]: MDS_FONT_SIZE_KEY_VALUES.size12, // Menu Title Medium
    [TYPE_TAG_VALUES.h5]: MDS_FONT_SIZE_KEY_VALUES.size9, // Card Title
    [TYPE_TAG_VALUES.h6]: MDS_FONT_SIZE_KEY_VALUES.size10, // Eyebrow
    // Verify with Design that li gets treated the same as Paragraph 1
    [TYPE_TAG_VALUES.li]: MDS_FONT_SIZE_KEY_VALUES.size5, // same as P1
    [TYPE_TAG_VALUES.p]: MDS_FONT_SIZE_KEY_VALUES.size5, // Paragraph Large
    [TYPE_TAG_VALUES.p1]: MDS_FONT_SIZE_KEY_VALUES.size5, // Paragraph Large
    [TYPE_TAG_VALUES.p2]: MDS_FONT_SIZE_KEY_VALUES.size6, // Paragraph Medium
    [TYPE_TAG_VALUES.p3]: MDS_FONT_SIZE_KEY_VALUES.size7, // Paragraph Small
    [TYPE_TAG_VALUES.title]: MDS_FONT_SIZE_KEY_VALUES.size1, // Jumbo Title
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
export function getSMTypography(tag) {
  const sizes = getSMTagSemanticSizes();
  const size = sizes?.[tag] ?? EMPTY_STRING;
  return getTypeSize(size, getSMResponsiveTypeSizes());
}

/**
 * HTML tags to responsive size values for SurveyMonkey.
 *
 * @returns {object} map of tag to responsive size value
 */
export function getSMTagResponsiveSizes() {
  return Object.freeze({
    [TYPE_TAG_VALUES.h1]: getSMTypography(TYPE_TAG_VALUES.h1),
    [TYPE_TAG_VALUES.h2]: getSMTypography(TYPE_TAG_VALUES.h2),
    [TYPE_TAG_VALUES.h3]: getSMTypography(TYPE_TAG_VALUES.h3),
    // Verify with Design about same SM treatment h4, li, p
    [TYPE_TAG_VALUES.h4]: getSMTypography(TYPE_TAG_VALUES.h4),
    [TYPE_TAG_VALUES.h5]: getSMTypography(TYPE_TAG_VALUES.h5), // Card Title
    [TYPE_TAG_VALUES.h6]: getSMTypography(TYPE_TAG_VALUES.h6), // Eyebrow
    [TYPE_TAG_VALUES.li]: getSMTypography(TYPE_TAG_VALUES.li),
    [TYPE_TAG_VALUES.p]: getSMTypography(TYPE_TAG_VALUES.p),
  });
}
