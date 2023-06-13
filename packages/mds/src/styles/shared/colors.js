import { EMPTY_STRING } from '~mds/constants';
import { generateObject } from '~mds/utils/utils';
import { getMaxBrandColors, } from '~mds/styles/shared/color-utils';

export const BRAND_COLOR_KEY_OPTIONS = Object.freeze(Array(getMaxBrandColors()).fill(EMPTY_STRING).map(
  (str, idx) => `color${idx}`
));
export const BRAND_COLOR_KEY_VALUES = Object.freeze(generateObject([...BRAND_COLOR_KEY_OPTIONS, 'transparent', EMPTY_STRING]));
