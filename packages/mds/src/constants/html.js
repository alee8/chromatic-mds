import { generateObject } from '~mds/utils/utils';

export const TYPE_TAG_OPTIONS = [
  'h1', // Large Title
  'h2', // Medium Title
  'h3', // Small Title
  'h4',
  'h5',
  'h6',
  'label',
  'li',
  'link', // aka 'a'
  'p', // default paragraph
  'p1', // Paragraph Large
  'p2', // Paragraph Medium
  'p3', // Paragraph Small
  'p4',
  'p5',
  'title', // Used by MN, SM only. aka 'Jumbo Title'
];
export const TYPE_TAG_VALUES = Object.freeze(generateObject(TYPE_TAG_OPTIONS));
