/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';

import '~tests/setupTests/matchMedia';
import ComponentWrappers from '~tests/setupTests/ComponentWrappers';
import createScriptTag from '~mds/providers/LoadScript/create-script-tag';

import LoadScriptProvider, { useLoadScriptContext } from '~mds/providers/LoadScript';

import {
  BasicExample,
  ErrorExample,
} from './Examples';

import { TABLEAU_API } from '../utils';

jest.mock('~mds/providers/LoadScript/create-script-tag');
beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.useRealTimers();
});

describe('Render Tableau sanity checks', () => {
  test('Basic Tableau', () => {
    const { container, unmount } = render(
      <ComponentWrappers>
        <BasicExample />
      </ComponentWrappers>
    );

    expect(container).toMatchSnapshot();
    unmount(container);
  });

  test('Tableau Error', () => {
    const { container, unmount } = render(
      <ErrorExample isDesktop />
    );

    expect(container).toMatchSnapshot();
    unmount(container);
  });
});

describe('LoadScript Tableau', () => {
  test('Render with TABLEAU_API load', () => {
    const { container } = render(
      <LoadScriptProvider>
        <TestComponentScriptTag />
      </LoadScriptProvider>
    );
    expect(container.textContent).toStrictEqual('{"tableauScriptRef":{"current":null},"wistiaScriptRef":{"current":null}}');
  });

  test('createScriptTag TABLEAU_API', async () => {
    const onload = jest.fn();
    const onerror = jest.fn();
    createScriptTag(TABLEAU_API, onload, onerror);
    jest.runAllTimers();
    expect(onload).toBeCalledTimes(1);
    expect(onerror).toBeCalledTimes(0);
  });
});

function TestComponentScriptTag() {
  const ref = useLoadScriptContext();
  return JSON.stringify(ref);
}
