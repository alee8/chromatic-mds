import { generateObject } from '~mds/utils/utils';
import { MAX_NUM_GRIDS } from '~mds/constants/sizes';

const BOX_ELEMENT_OPTIONS = Object.freeze(['div', 'form', 'header', 'section', 'span']);
export const BOX_ELEMENT_VALUES = Object.freeze(generateObject(BOX_ELEMENT_OPTIONS));

/**
 * Two column constants
 * @constant
 */
export const EVEN_SPLIT = MAX_NUM_GRIDS / 2;
export const LEFT_COLUMN = 0;
export const RIGHT_COLUMN = 1;

const NUM_COLUMN_OPTIONS = Object.freeze(['one', 'two', 'three']);
export const NUM_COLUMN_VALUES = Object.freeze(generateObject(NUM_COLUMN_OPTIONS));
