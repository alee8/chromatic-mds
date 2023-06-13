/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';

import ComponentWrappers from '~tests/setupTests/ComponentWrappers';

import {
  Basic,
} from './Examples';

import { TESTS } from '../useStylesGridItem';

const TEST_OBJECT_PROP_OPTIONS = [
  { width: 0.3, size: '', expected: '30%' },
  { width: 476, size: 768, expected: 476 },
  { width: 998, size: 768, expected: undefined },
  { width: 0.90, size: 768, expected: '90%' },
  { width: 0, size: 768, expected: undefined },
  { width: 1, size: 768, expected: '100%' },
  { width: 1.0, size: 768, expected: '100%' },
  { width: 'calc(100% - 2 * 24px)', size: 768, expected: 'calc(100% - 2 * 24px)' },
];

describe('Test maxWidth function in GridPlusItem', () => {
  test('test maxwidth with different values', () => {
    TEST_OBJECT_PROP_OPTIONS.forEach(
      (test) => {
        expect(TESTS.maxWidth(test.width, test.size)).toBe(test.expected);
      }
    );
  });
});

describe('Render GridPlus Snapshot', () => {
  test('Basic GridPlus', () => {
    const { container, unmount } = render(
      <ComponentWrappers>
        <Basic />
      </ComponentWrappers>
    );

    expect(container).toMatchSnapshot();
    unmount(container);
  });
});
