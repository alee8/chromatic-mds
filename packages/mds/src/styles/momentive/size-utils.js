import { EMPTY_STRING } from '~mds/constants';
import { getTypeSize } from '~mds/styles/shared/typography';
import { MDS_FONT_SIZE_KEY_VALUES } from '~mds/styles/shared/sizes';
import { MDS_RESPONSIVE_TYPE_SIZES } from '~mds/styles/momentive/sizes';
import { TYPE_TAG_VALUES } from '~mds/constants/html';

/**
 * Returns the object mapping html markup (e.g., h1, p) to responsive type sizes.
 *
 * @constant {object} map from markup to responsive type size
 */
export function getMNResponsiveTypeSizes() {
  return MDS_RESPONSIVE_TYPE_SIZES;
}

/**
 * HTML markup tags to semantic size values for Momentive.
 * The semantic size values match with size<n> keys in MDS_RESPONSIVE_TYPE_SIZES
 *
 * NOTE:
 *   Title aka Jumbo
 *   Default paragraph is P2. List setting is also P2.
 *   Link aka anchor/<a>
 * @constant {object} map of tag to semantic size name
*/
export function getMNTagSemanticSizes() {
  return Object.freeze({
    [TYPE_TAG_VALUES.title]: MDS_FONT_SIZE_KEY_VALUES.size0,
    [TYPE_TAG_VALUES.h1]: MDS_FONT_SIZE_KEY_VALUES.size1,
    [TYPE_TAG_VALUES.h2]: MDS_FONT_SIZE_KEY_VALUES.size2,
    [TYPE_TAG_VALUES.h3]: MDS_FONT_SIZE_KEY_VALUES.size3,
    [TYPE_TAG_VALUES.h4]: MDS_FONT_SIZE_KEY_VALUES.size4,
    [TYPE_TAG_VALUES.h5]: MDS_FONT_SIZE_KEY_VALUES.size5,
    [TYPE_TAG_VALUES.h6]: MDS_FONT_SIZE_KEY_VALUES.size6,
    [TYPE_TAG_VALUES.p]: MDS_FONT_SIZE_KEY_VALUES.size8, // Default paragraph (p2)
    [TYPE_TAG_VALUES.p1]: MDS_FONT_SIZE_KEY_VALUES.size7,
    [TYPE_TAG_VALUES.p2]: MDS_FONT_SIZE_KEY_VALUES.size8, // same as p/p2, li
    [TYPE_TAG_VALUES.p3]: MDS_FONT_SIZE_KEY_VALUES.size9,
    [TYPE_TAG_VALUES.label]: MDS_FONT_SIZE_KEY_VALUES.size10,
    [TYPE_TAG_VALUES.link]: MDS_FONT_SIZE_KEY_VALUES.size11,
    [TYPE_TAG_VALUES.li]: MDS_FONT_SIZE_KEY_VALUES.size8, // same as p/p2, li
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
export function getMNTypography(tag) {
  const sizes = getMNTagSemanticSizes();
  const size = sizes?.[tag] ?? EMPTY_STRING;
  return getTypeSize(size, getMNResponsiveTypeSizes());
}

/**
 * HTML tags to responsive size values for Momentive.
 *
 * @constant {object} map of tag to responsive size value represented by nested
 * object with <md, md, lg keys. <md uses the size value keys.
 */
export function getMNTagResponsiveSizes() {
  return Object.freeze({
    [TYPE_TAG_VALUES.h1]: getMNTypography(TYPE_TAG_VALUES.h1),
    [TYPE_TAG_VALUES.h2]: getMNTypography(TYPE_TAG_VALUES.h2),
    [TYPE_TAG_VALUES.h3]: getMNTypography(TYPE_TAG_VALUES.h3),
    [TYPE_TAG_VALUES.h4]: getMNTypography(TYPE_TAG_VALUES.h4),
    [TYPE_TAG_VALUES.h5]: getMNTypography(TYPE_TAG_VALUES.h5),
    [TYPE_TAG_VALUES.h6]: getMNTypography(TYPE_TAG_VALUES.h6),
    [TYPE_TAG_VALUES.li]: getMNTypography(TYPE_TAG_VALUES.li),
    [TYPE_TAG_VALUES.p]: getMNTypography(TYPE_TAG_VALUES.p),
    [TYPE_TAG_VALUES.p1]: getMNTypography(TYPE_TAG_VALUES.p1),
    // default paragraph & list setting
    [TYPE_TAG_VALUES.p2]: getMNTypography(TYPE_TAG_VALUES.p2),
    [TYPE_TAG_VALUES.p3]: getMNTypography(TYPE_TAG_VALUES.p3),
    [TYPE_TAG_VALUES.li]: getMNTypography(TYPE_TAG_VALUES.li),
    [TYPE_TAG_VALUES.title]: getMNTypography(TYPE_TAG_VALUES.title),
    [TYPE_TAG_VALUES.label]: getMNTypography(TYPE_TAG_VALUES.label),
    [TYPE_TAG_VALUES.link]: getMNTypography(TYPE_TAG_VALUES.link),
  });
}
