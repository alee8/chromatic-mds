/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';

import createScriptTag from '../create-script-tag';
import LoadScriptProvider, { useLoadScriptContext } from '..';

jest.mock('../create-script-tag');
beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.useRealTimers();
});

describe('LoadScript', () => {
  test('initial', () => {
    const { container } = render(
      <LoadScriptProvider>
        <TestComponent />
      </LoadScriptProvider>
    );
    expect(container.textContent).toStrictEqual('{"tableauScriptRef":{"current":null},"wistiaScriptRef":{"current":null}}');
  });

  test('createScriptTag success', async () => {
    const onload = jest.fn();
    const onerror = jest.fn();
    createScriptTag('success', onload, onerror);
    jest.runAllTimers();
    expect(onload).toBeCalledTimes(1);
  });

  test('createScriptTag failure', async () => {
    const onload = jest.fn();
    const onerror = jest.fn();
    createScriptTag('failure', onload, onerror);
    jest.runAllTimers();
    expect(onerror).toBeCalledTimes(1);
  });
});

function TestComponent() {
  const ref = useLoadScriptContext();
  return JSON.stringify(ref);
}
