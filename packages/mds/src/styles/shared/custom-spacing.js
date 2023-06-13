import { SPACING_SIZE_VALUES } from '~mds/constants/prop-types';

import { spacing } from './spacing';

export const DESKTOP = 'desktop';
export const BOTTOM = 'Bottom';
export const MARGIN_STRING = 'Margin';
export const MOBILE = 'mobile';
export const PADDING_STRING = 'Padding';
export const TABLET = 'tablet';
export const TOP = 'Top';

/**
 * This is the single-source-of-truth for Responsive Vertical Spacing design.
 * All code related to `useSpacing` builds off this object's values.
 *
 * See technical sketch: https://docs.google.com/document/d/1ZssCc7pzRCfylV7gnamLzKGZfhQtPZCy-vyaD5UcJqE/edit#bookmark=id.c412yq6ocgyt.
 * @constant
 * @type {Object}
 */
export const CUSTOM_SPACING = Object.freeze({
  desktop: {
    [SPACING_SIZE_VALUES.none]: 0,
    [SPACING_SIZE_VALUES.xs]: spacing[2], // 8
    [SPACING_SIZE_VALUES.sm]: spacing[4], // 16
    [SPACING_SIZE_VALUES.md]: spacing[6], // 32
    [SPACING_SIZE_VALUES.lg]: spacing[8], // 64
    [SPACING_SIZE_VALUES.xl]: spacing[9], // 96
    [SPACING_SIZE_VALUES.jb]: spacing[10], // 128
  },
  tablet: {
    [SPACING_SIZE_VALUES.none]: 0,
    [SPACING_SIZE_VALUES.xs]: spacing[2], // 8
    [SPACING_SIZE_VALUES.sm]: spacing[4], // 16
    [SPACING_SIZE_VALUES.md]: spacing[5], // 24
    [SPACING_SIZE_VALUES.lg]: spacing[7], // 48
    [SPACING_SIZE_VALUES.xl]: spacing[8], // 64
    [SPACING_SIZE_VALUES.jb]: spacing[9], // 96
  },
  mobile: {
    [SPACING_SIZE_VALUES.none]: 0,
    [SPACING_SIZE_VALUES.xs]: spacing[2], // 8
    [SPACING_SIZE_VALUES.sm]: spacing[4], // 16
    [SPACING_SIZE_VALUES.md]: spacing[4], // 16
    [SPACING_SIZE_VALUES.lg]: spacing[6], // 32
    [SPACING_SIZE_VALUES.xl]: spacing[6], // 32
    [SPACING_SIZE_VALUES.jb]: spacing[8], // 64
  },
});
