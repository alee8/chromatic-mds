/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';

import ComponentWrappers from '~tests/setupTests/ComponentWrappers';

import {
  Basic,
  CenteredContent,
  DirectContent,
  Translated,
  WithALink,
  WithDropcap,
  WithIndentation,
  WithResetMargin,
  WithTextAndBackgroundColor,
} from './Examples';

describe('Render Paragraph Snapshot', () => {
  test('Basic', () => {
    const { container, unmount } = render(
      <Basic />
    );

    expect(container).toMatchSnapshot();
    unmount(container);
  });

  test('Translated', () => {
    const { container, unmount } = render(
      <Translated />
    );

    expect(container).toMatchSnapshot();
    unmount(container);
  });

  test('Centered', () => {
    const { container, unmount } = render(
      <CenteredContent />
    );

    expect(container).toMatchSnapshot();
    unmount(container);
  });

  test('Reset Margin', () => {
    const { container, unmount } = render(
      <WithResetMargin />
    );

    expect(container).toMatchSnapshot();
    unmount(container);
  });

  test('Direct Content', () => {
    const { container, unmount } = render(
      <DirectContent />
    );

    expect(container).toMatchSnapshot();
    unmount(container);
  });

  test('With ALink', () => {
    // Need ComponentWrappers so that parseHtml that invokes SMLink can call useLocation
    const { container, unmount } = render(
      <ComponentWrappers>
        <WithALink />
      </ComponentWrappers>
    );

    expect(container).toMatchSnapshot();
    unmount(container);
  });

  test('With Dropcap', () => {
    const { container, unmount } = render(
      <WithDropcap />
    );

    expect(container).toMatchSnapshot();
    unmount(container);
  });

  test('Text & Background Color', () => {
    const { container, unmount } = render(
      <ComponentWrappers>
        <WithTextAndBackgroundColor />
      </ComponentWrappers>
    );

    expect(container).toMatchSnapshot();
    unmount(container);
  });

  test('With Indentation', () => {
    const { container, unmount } = render(
      <WithIndentation />
    );

    expect(container).toMatchSnapshot();
    unmount(container);
  });
});
