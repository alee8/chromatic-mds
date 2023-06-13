/**
 * @jest-environment jsdom
 */
import PropTypes from 'prop-types';
import React from 'react';
import {
  act,
  render,
} from '@testing-library/react';

import ResponsiveBreakpointsProvider, {
  useMdsDeviceSize,
} from '~mds/providers/ResponsiveBreakpoints/ResponsiveBreakpoints';

import {
  BOTTOM,
  CUSTOM_SPACING,
  TOP,
} from '~mds/styles/shared/custom-spacing';
import {
  createMockMatchMedia,
  MOCK_INIT_MQL,
  updateMatchMedia,
} from '~tests/setupTests/media-query-list-helpers';
import {
  SPACING_SIZE_OPTIONS,
  SPACING_SIZE_VALUES,
} from '~mds/constants/prop-types';

import { HeadingSpacing } from './Examples';

import {
  getMarginSpacing,
  getPaddingSpacing,
} from '../responsive-spacing-styles';

const MARGIN_STRING = 'Margin';
const PADDING_STRING = 'Padding';

let originalMatchMedia;
beforeAll(() => {
  originalMatchMedia = window.matchMedia;
  // Mock window functions used in the Header to avoid errors.
  window.matchMedia = createMockMatchMedia(MOCK_INIT_MQL);
  window.scrollTo = jest.fn();
});
afterAll(() => window.matchMedia = originalMatchMedia);

function TestComponentMarginBottom({ device, marginBottom }) {
  const {
    marginBottomClass,
  } = getMarginSpacing({
    marginBottom,
  });
  const isDevice = useMdsDeviceSize();
  const content = isDevice[`is${device}`] ? CUSTOM_SPACING[device.toLowerCase()][marginBottom] : 'cannotDetermine';
  return (
    <ResponsiveBreakpointsProvider>
      <div
        className={marginBottomClass}
        data-testid="marginBottom"
      >
        {content}
      </div>
    </ResponsiveBreakpointsProvider>
  );
}
TestComponentMarginBottom.propTypes = {
  device: PropTypes.string.isRequired,
  marginBottom: PropTypes.string.isRequired,
};

function TestComponentMarginTop({ device, marginTop }) {
  const {
    marginTopClass,
  } = getMarginSpacing({
    marginTop,
  });
  const isDevice = useMdsDeviceSize();
  const content = isDevice[`is${device}`] ? CUSTOM_SPACING[device.toLowerCase()][marginTop] : 'cannotDetermine';
  return (
    <ResponsiveBreakpointsProvider>
      <div
        className={marginTopClass}
        data-testid="marginTop"
      >
        {content}
      </div>
    </ResponsiveBreakpointsProvider>
  );
}
TestComponentMarginTop.propTypes = {
  device: PropTypes.string.isRequired,
  marginTop: PropTypes.string.isRequired,
};

function TestComponentPaddingBottom({ device, paddingBottom }) {
  const {
    paddingBottomClass,
  } = getPaddingSpacing({
    paddingBottom,
  });
  const isDevice = useMdsDeviceSize();
  const content = isDevice[`is${device}`] ? CUSTOM_SPACING[device.toLowerCase()][paddingBottom] : 'cannotDetermine';
  return (
    <ResponsiveBreakpointsProvider>
      <div
        className={paddingBottomClass}
        data-testid="paddingBottom"
      >
        {content}
      </div>
    </ResponsiveBreakpointsProvider>
  );
}
TestComponentPaddingBottom.propTypes = {
  device: PropTypes.string.isRequired,
  paddingBottom: PropTypes.string.isRequired,
};

function TestComponentPaddingTop({ device, paddingTop }) {
  const {
    paddingTopClass,
  } = getPaddingSpacing({
    paddingTop,
  });
  const isDevice = useMdsDeviceSize();
  const content = isDevice[`is${device}`] ? CUSTOM_SPACING[device.toLowerCase()][paddingTop] : 'cannotDetermine';
  return (
    <ResponsiveBreakpointsProvider>
      <div
        className={paddingTopClass}
        data-testid="paddingTop"
      >
        {content}
      </div>
    </ResponsiveBreakpointsProvider>
  );
}
TestComponentPaddingTop.propTypes = {
  device: PropTypes.string.isRequired,
  paddingTop: PropTypes.string.isRequired,
};

// Tests
const SimpleTests = [
  {
    device: 'Desktop', sizes: SPACING_SIZE_OPTIONS, spacings: CUSTOM_SPACING.desktop, width: 992,
  },
  {
    device: 'Desktop', sizes: SPACING_SIZE_OPTIONS, spacings: CUSTOM_SPACING.desktop, width: 1000,
  },
  {
    device: 'Desktop', sizes: SPACING_SIZE_OPTIONS, spacings: CUSTOM_SPACING.desktop, width: 1250,
  },
  {
    device: 'Tablet', sizes: SPACING_SIZE_OPTIONS, spacings: CUSTOM_SPACING.tablet, width: 768,
  },
  {
    device: 'Tablet', sizes: SPACING_SIZE_OPTIONS, spacings: CUSTOM_SPACING.tablet, width: 900,
  },
  {
    device: 'Mobile', sizes: SPACING_SIZE_OPTIONS, spacings: CUSTOM_SPACING.mobile, width: 320,
  },
  {
    device: 'Mobile', sizes: SPACING_SIZE_OPTIONS, spacings: CUSTOM_SPACING.mobile, width: 500,
  },
  {
    device: 'Mobile', sizes: SPACING_SIZE_OPTIONS, spacings: CUSTOM_SPACING.mobile, width: 576,
  },
];

describe('Test getMarginSpacing hook at different browser widths and margin bottom', () => {
  updateMatchMedia(0, MOCK_INIT_MQL); // Set up to a known state
  SimpleTests.forEach((
    {
      device, sizes, spacings, width,
    }
  ) => {
    sizes.forEach(
      (size) => test(`Simple test of ${device} with ${size} at width=${width} should have ${size}${MARGIN_STRING}${BOTTOM}`, () => {
        const marginBottomClass = `${size}${MARGIN_STRING}${BOTTOM}`;
        act(() => updateMatchMedia(width, MOCK_INIT_MQL));
        const { getByTestId } = render(
          <ResponsiveBreakpointsProvider>
            <TestComponentMarginBottom
              device={device}
              marginBottom={size}
            />
          </ResponsiveBreakpointsProvider>
        );
        const element = getByTestId('marginBottom');
        expect(element.getAttribute('class')).toEqual(marginBottomClass);
        expect(element.firstChild.textContent).toEqual(`${spacings[size]}`);
      })
    );
  });
});

describe('Test getMarginSpacing hook at different browser widths and margin top', () => {
  updateMatchMedia(0, MOCK_INIT_MQL); // Set up to a known state
  SimpleTests.forEach((
    {
      device, sizes, spacings, width,
    }
  ) => {
    sizes.forEach(
      (size) => test(`Simple test of ${device} with ${size} at width=${width} should have ${size}${MARGIN_STRING}${TOP}`, () => {
        const marginTopClass = `${size}${MARGIN_STRING}${TOP}`;
        act(() => updateMatchMedia(width, MOCK_INIT_MQL));
        const { getByTestId } = render(
          <ResponsiveBreakpointsProvider>
            <TestComponentMarginTop
              device={device}
              marginTop={size}
            />
          </ResponsiveBreakpointsProvider>
        );
        const element = getByTestId('marginTop');
        expect(element.getAttribute('class')).toEqual(marginTopClass);
        expect(element.firstChild.textContent).toEqual(`${spacings[size]}`);
      })
    );
  });
});

describe('Test getPaddingSpacing hook at different browser widths and padding bottom', () => {
  updateMatchMedia(0, MOCK_INIT_MQL); // Set up to a known state
  SimpleTests.forEach((
    {
      device, sizes, spacings, width,
    }
  ) => {
    sizes.forEach(
      (size) => test(`Simple test of ${device} with ${size} at width=${width} should have ${size}${PADDING_STRING}${BOTTOM}`, () => {
        const paddingBottomClass = `${size}${PADDING_STRING}${BOTTOM}`;
        act(() => updateMatchMedia(width, MOCK_INIT_MQL));
        const { getByTestId } = render(
          <ResponsiveBreakpointsProvider>
            <TestComponentPaddingBottom
              device={device}
              paddingBottom={size}
            />
          </ResponsiveBreakpointsProvider>
        );
        const element = getByTestId('paddingBottom');
        expect(element.getAttribute('class')).toEqual(paddingBottomClass);
        expect(element.firstChild.textContent).toEqual(`${spacings[size]}`);
      })
    );
  });
});

describe('Test getPaddingSpacing hook at different browser widths and padding top', () => {
  updateMatchMedia(0, MOCK_INIT_MQL); // Set up to a known state
  SimpleTests.forEach((
    {
      device, sizes, spacings, width,
    }
  ) => {
    sizes.forEach(
      (size) => test(`Simple test of ${device} with ${size} at width=${width} should have ${size}${PADDING_STRING}${TOP}`, () => {
        const paddingTopClass = `${size}${PADDING_STRING}${TOP}`;
        act(() => updateMatchMedia(width, MOCK_INIT_MQL));
        const { getByTestId } = render(
          <ResponsiveBreakpointsProvider>
            <TestComponentPaddingTop
              device={device}
              paddingTop={size}
            />
          </ResponsiveBreakpointsProvider>
        );
        const element = getByTestId('paddingTop');
        expect(element.getAttribute('class')).toEqual(paddingTopClass);
        expect(element.firstChild.textContent).toEqual(`${spacings[size]}`);
      })
    );
  });
});

describe('Basic HeadingSpacing with getMarginSpacing and getPaddingSpacing Snapshot', () => {
  test('using defaultValues', () => {
    const { container, unmount } = render(
      <ResponsiveBreakpointsProvider>
        <HeadingSpacing
          marginBottom={SPACING_SIZE_VALUES.xs}
          marginTop={SPACING_SIZE_VALUES.md}
          paddingBottom={SPACING_SIZE_VALUES.xs}
          paddingTop={SPACING_SIZE_VALUES.md}
        />
      </ResponsiveBreakpointsProvider>
    );

    expect(container).toMatchSnapshot();
    unmount(container);
  });
});
