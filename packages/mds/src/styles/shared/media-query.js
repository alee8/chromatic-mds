import { DISPLAY_SIZE_VALUES } from '~mds/constants/sizes';
import { MAX_WIDTH_GRID_SYSTEM } from '~mds/components/GridPlus/constants';
import { WRENCH_BREAKPOINT_SETTINGS } from '../../constants/wrench-breakpoints';

// CSS Constants
/**
 * Breakpoints to delineate special handling
 */
const MDS_SMALL_BREAKPOINT = 320;

// If mixing lowerBPMediaQUery with upperBPMediaQuery at same WrenchTheme.breakpoints[size],
// most recent (in sequence) or most specific css rules would apply.
// For MDS_MOBILE (768 and below rule) in conjunction with MDS_TABLET(768 and above rule), place
// MDS_MOBILE first, followed by MDS_TABLET
const lowerBPMediaQuery = (size, overrideSize) => `@media only screen and (min-width: ${overrideSize || WRENCH_BREAKPOINT_SETTINGS[size]}px)`;
const upperBPMediaQuery = (size, overrideSize) => `@media only screen and (max-width: ${overrideSize || WRENCH_BREAKPOINT_SETTINGS[size]}px)`;

/**
 * This set of media queries are designed to work with Wrench's breakpoints.
 * In particular, use alongside GridPlus/Wrench Grid and other divs (e.g., FlexContainer).
 *
 * NOTE: media queries cascade from small to large.
 * Thus specify in the following order for ease of use, ease of understanding, and to leverage CSS
 * cascading and rule specificity precedence.
 * XS_MEDIA_QUERY, SM_MEDIA_QUERY, MD_MEDIA_QUERY, LG_MEDIA_QUERY, XL_MEDIA_QUERY.

* All browser widths > WrenchTheme.breakpoints.xl conform to XL_MEDIA_QUERY.
 * Similarly, if XS_MEDIA_QUERY is not stated and others are stated, e.g., SM_MEDIA_QUERY,
 * then widths from 0 to < WrenchTheme.breakpoints.sm use default CSS rules.
 */
// Wrench.breakpoints - lg: '992px'
export const LG_MEDIA_QUERY = lowerBPMediaQuery(DISPLAY_SIZE_VALUES.lg); // eslint-disable-line import/no-unused-modules
// Wrench.breakpoints - md: '768px'
export const MD_MEDIA_QUERY = lowerBPMediaQuery(DISPLAY_SIZE_VALUES.md); // eslint-disable-line import/no-unused-modules
// Wrench.breakpoints - sm: '576px'
export const SM_MEDIA_QUERY = lowerBPMediaQuery(DISPLAY_SIZE_VALUES.sm); // eslint-disable-line import/no-unused-modules
// MDS_SMALL_BREAKPOINT = '320px'
export const SM_MOBILE_MEDIA_QUERY = lowerBPMediaQuery(null, MDS_SMALL_BREAKPOINT); // eslint-disable-line import/no-unused-modules
// Wrench.breakpoints - xs: '0'
export const XS_MEDIA_QUERY = lowerBPMediaQuery(DISPLAY_SIZE_VALUES.xs); // eslint-disable-line import/no-unused-modules
// Wrench.breakpoints - xl: '1200px'
export const XL_MEDIA_QUERY = lowerBPMediaQuery(DISPLAY_SIZE_VALUES.xl); // eslint-disable-line import/no-unused-modules
// xxl: '1400px'
export const XXL_MEDIA_QUERY = lowerBPMediaQuery(null, MAX_WIDTH_GRID_SYSTEM); // eslint-disable-line import/no-unused-modules

/**
 * This group of media queries should be used sparingly and generally due to special MDS design
 * callout. Order them from smallest to largest if several are used.
 *
 * MDS mobile <= WrenchTheme.breakpoints.md (i.e., 768px and below)
 * MDS tablet <= WrenchTheme.breakpoints.lg (i.e., 992px and below)
 * MDS desktop <= WrenchTheme.breakpoints.xl (i.e., 1200px and below)
 * MDS big desktop <= WrenchTheme.breakpoints.xl (i.e., 1400px and below)
 *
 * NOTE: media queries cascade from small to large.
 * Thus specify in the following order for ease of use, ease of understanding, and to leverage CSS
 * cascading and rule specificity precedence.
 * MDS_MOBILE_SMALL_MEDIA_QUERY, MDS_MOBILE_MEDIA_QUERY, MDS_TABLET_MOBILE_MEDIA_QUERY, MDS_TABLET_MEDIA_QUERY, MDS_DESKTOP_MEDIA_QUERY, MDS_BIG_DESKTOP_MEDIA_QUERY
*
 * Two special media rules for handling background images
 * MDS_BIG_DESKTOP_MEDIA_QUERY uses MDS_FULL_WIDTH_BREAKPOINT. At this breakpoint, background image
 * reaches max width and extra L/R is filled with background color.
 * Prior to that, image centered in background and more L/R edges of image are exposed.
 *
 * MDS_MOBILE_SMALL_MEDIA_QUERY uses MDS_SMALL_BREAKPOINT. At this breakpoint, background image vanishes.
 */
// xxl: '1400px'
export const MDS_BIG_DESKTOP_MEDIA_QUERY = upperBPMediaQuery(null, MAX_WIDTH_GRID_SYSTEM); // eslint-disable-line import/no-unused-modules
// Wrench.breakpoints - xl: '1200px'
export const MDS_DESKTOP_MEDIA_QUERY = upperBPMediaQuery(DISPLAY_SIZE_VALUES.xl); // eslint-disable-line import/no-unused-modules
// Wrench.breakpoints - lg: '992px'
export const MDS_TABLET_MEDIA_QUERY = upperBPMediaQuery(DISPLAY_SIZE_VALUES.lg); // eslint-disable-line import/no-unused-modules
// Wrench.breakpoints - md: '768px'
export const MDS_TABLET_MOBILE_MEDIA_QUERY = upperBPMediaQuery(DISPLAY_SIZE_VALUES.md); // eslint-disable-line import/no-unused-modules
// Wrench.breakpoints - sm: '576px'
export const MDS_MOBILE_MEDIA_QUERY = upperBPMediaQuery(DISPLAY_SIZE_VALUES.sm); // eslint-disable-line import/no-unused-modules
// MDS' xsm: '320px'
export const MDS_MOBILE_SMALL_MEDIA_QUERY = upperBPMediaQuery(null, MDS_SMALL_BREAKPOINT); // eslint-disable-line import/no-unused-modules

// General media query for print preview
export const PRINT_MEDIA_QUERY = '@media print';
