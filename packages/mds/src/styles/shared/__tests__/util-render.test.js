/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';

import MockThemeProvider from '~tests/setupTests/MockThemeProvider';
import Paragraph from '~mds/blocks/Paragraph';

import {
  getALinkTextColor,
  getProductColors,
} from '~mds/styles/shared/color-utils';
import { getALinkUnderline } from '~mds/styles/shared/text-underline-utils';
import { PRODUCT_VALUES } from '~mds/constants/products';
import { TEXT_DECORATION_VALUES } from '~mds/styles/shared/css';

describe('Exercise getSpecificTypeSize with an invalid Paragraph size', () => {
  /* eslint-disable no-console -- mock console.error for this test */
  const originalError = console.error;
  beforeEach(() => {
    console.error = jest.fn();
  });

  afterEach(() => {
    console.error = originalError;
  });
  /* eslint-enable no-console -- end of mock setup */

  test('Test invalid Paragraph typography size value for SurveyMonkey', () => {
    expect(() => render(
      <MockThemeProvider product={PRODUCT_VALUES.sm}>
        <Paragraph fontSize="size-99" />
      </MockThemeProvider>
    ))
      .toThrowError('The requested type size (size99) is undefined|null|EMPTY_STRING for this product.');
  });

  test('Test invalid Paragraph typography size value for SurveyMonkey HelpCenter', () => {
    expect(() => render(
      <MockThemeProvider product={PRODUCT_VALUES.smHelp}>
        <Paragraph fontSize="size-99" />
      </MockThemeProvider>
    ))
      .toThrowError('The requested type size (size99) is undefined|null|EMPTY_STRING for this product.');
  });

  test('Test invalid Paragraph typography size value for for GetFeedback', () => {
    expect(() => render(
      <MockThemeProvider product={PRODUCT_VALUES.gf}>
        <Paragraph fontSize="size-99" />
      </MockThemeProvider>
    ))
      .toThrowError('The requested type size (size99) is undefined|null|EMPTY_STRING for this product.');
  });

  test('Test invalid Paragraph typography size value for for Momentive', () => {
    expect(() => render(
      <MockThemeProvider product={PRODUCT_VALUES.mntv}>
        <Paragraph fontSize="size-99" />
      </MockThemeProvider>
    ))
      .toThrowError('The requested type size (size99) is undefined|null|EMPTY_STRING for this product.');
  });
});

describe('Test getALinkTextColor for SM', () => {
  const { link } = getProductColors(PRODUCT_VALUES.sm);

  const backgroundColors = [
    { backgroundColor: 'color1', expected: { color: link.dark, textDecorationColor: link.dark } },
    { backgroundColor: 'color4', expected: { color: link.dark, textDecorationColor: link.dark } },
    { backgroundColor: 'color5', expected: { color: link.dark, textDecorationColor: link.dark } },
    { backgroundColor: 'color9', expected: { color: link.dark, textDecorationColor: link.dark } },
    { backgroundColor: 'color2', expected: { color: link.light, textDecorationColor: link.light } },
    { backgroundColor: 'color3', expected: { color: link.light, textDecorationColor: link.light } },
    { backgroundColor: 'color6', expected: { color: link.light, textDecorationColor: link.light } },
    { backgroundColor: 'color7', expected: { color: link.light, textDecorationColor: link.light } },
  ];
  backgroundColors.forEach(({
    backgroundColor,
    expected,
  }) => test(`Test against background color ${backgroundColor} is ${expected}`, () => {
    const result = getALinkTextColor(backgroundColor, PRODUCT_VALUES.sm, link);
    expect(result).toStrictEqual(expected);
  }));
});

describe('Test getALinkUnderline for SM', () => {
  const backgroundColors = [
    { backgroundColor: 'color1', expected: TEXT_DECORATION_VALUES.underline },
    { backgroundColor: 'color4', expected: TEXT_DECORATION_VALUES.underline },
    { backgroundColor: 'color5', expected: TEXT_DECORATION_VALUES.underline },
    { backgroundColor: 'color9', expected: TEXT_DECORATION_VALUES.underline },
    { backgroundColor: 'color2', expected: TEXT_DECORATION_VALUES.none },
    { backgroundColor: 'color3', expected: TEXT_DECORATION_VALUES.none },
    { backgroundColor: 'color6', expected: TEXT_DECORATION_VALUES.none },
    { backgroundColor: 'color7', expected: TEXT_DECORATION_VALUES.none },
  ];
  backgroundColors.forEach(({
    backgroundColor,
    expected,
  }) => test(`Test against background color ${backgroundColor} is ${expected}`, () => {
    const result = getALinkUnderline(backgroundColor, PRODUCT_VALUES.sm);
    expect(result).toStrictEqual(expected);
  }));
});
