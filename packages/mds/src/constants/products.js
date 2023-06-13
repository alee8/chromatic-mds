import { generateObject } from '~mds/utils/utils';

// Theme object is the likely use case for PRODUCT_PROP_KEY
export const PRODUCT_PROP_KEY = '_product';

export const PRODUCT_OPTIONS = Object.freeze(['gf', 'mntv', 'sm', 'smHelp']);
export const PRODUCT_VALUES = Object.freeze(generateObject(PRODUCT_OPTIONS));

// Theme can come from other libraries such as the wrench ui library
export const WRENCH_LIBRARY = 'wrench';
