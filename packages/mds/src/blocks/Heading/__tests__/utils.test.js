import { removeHTag } from '~mds/blocks/Heading/utils';

const REMOVEHTAG_TESTS = [
  { input: '<h1>Heading</h1>', expected: 'Heading' },
  { input: '<h2>Heading</h2><p>A paragraph.</p><h3>SubHeading</h3><p>Another paragraph.</p>', expected: 'Heading<p>A paragraph.</p>SubHeading<p>Another paragraph.</p>' },
  { input: '<p>Paragraph with no h-tags</p>', expected: '<p>Paragraph with no h-tags</p>' },
];

describe('Test Heading utils', () => {
  it('Test removeHTag util', () => {
    REMOVEHTAG_TESTS.forEach(
      (test) => {
        expect(removeHTag(test.input)).toBe(test.expected);
      }
    );
  });
});
