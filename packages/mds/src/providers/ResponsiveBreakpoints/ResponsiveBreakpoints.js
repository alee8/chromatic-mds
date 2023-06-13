import PropTypes from 'prop-types';
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { WRENCH_BREAKPOINT_VALUES } from '~mds/constants/wrench-breakpoints';

import {
  getMinWidthMediaQueryObject,
  handleMediaQueryListener,
} from './utils';

/*
 * Per index.js, all but the ResponsiveBreakpoints context are exported for public use.
 */

/**
 * Each key is a Wrench breakpoint size name.
 * Each value is a min-width media query on the associated breakpoint size.
 *
 * @constant
 * @type {Object}
 * @default
 */
export const WRENCH_MINWIDTH_MEDIA_QUERIES = Object.freeze(getMinWidthMediaQueryObject());

/* ----------------- Non-public ResponsiveBreakpoints context -------------------------*/

/**
 * For gist of this React context,
 *   @see https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries
 *
 * Details:
 * Context to store a readonly set of min-width media query match results.
 * Each object key is a Wrench breakpoint size name.
 * Each object value is a boolean for the
 * Each breakpoint's key is a Wrench size and the value is a min-width media-query with Wrench breakpoint value.
 *
 * Notes:
 * As a readonly value, the ResponsiveBreakpointsProvider will not trigger re-render on any of its wrapped descendants.
 * Its underlying framework manages a set of CSS min-width media queries (matching the Wrench breakpoint sizes).
 * The context's value changes when a document starts/stops matching any of this context's media queries.
 *
 * Caveat:
 * This Context works with CSS `min-width` media queries.
 * If there is a desire for other formulations of the media query, consult Content Platform.
 *
 * @returns {Object}
 */
const ResponsiveBreakpoints = createContext(undefined);

/* ----------------- Public ResponsiveBreakpointsProvider Hooks -------------------------*/

/**
 * Custom hook to return ResponsiveBreakpointsContext.
 * The context is not exposed; only its Provider and custom hook to retrieve the context value.
 * The rationale is to manage the specific media queries (i.e., CSS `(min-width breakpoint)`) used to match to current browser width.
 * The context implements responsive layout updates per Wrench breakpoints values.
 * If there is a desire for other formulations of the responsive layout, consult Content Platform.
 *
 * @returns {context} ResponsiveBreakpointsContext
 */
export function useResponsiveBreakpointsContext() {
  const ctx = useContext(ResponsiveBreakpoints);
  if (!ctx) {
    throw new Error('useResponsiveBreakpointsContext must be used within a ResponsiveBreakpointsProvider');
  }
  return ctx;
}

/**
 * Based on ResponsiveBreakpoints context value, this custom hook returns an object consisting of 3 key, value pairs; one key for each MDS device size (i.e., isMobile, isTablet, isDesktop) and boolean value indicating media query value for the associated device size.
 *
 * NEW: While React is setting up (breakpointMatch is none), set `isPending=true`, so that
 * components can decide to skip render until breakpointMatch has value.
 *
 * @returns {object} devices with three key, value pairs. The key is the MDS device size and boolean value indicating if the breakpointMatch corresponds to that MDS device.
 */
export function useMdsDeviceSize() {
  const breakpointMatch = useResponsiveBreakpointsContext();

  const deviceSize = {
    isDesktop: breakpointMatch === WRENCH_BREAKPOINT_VALUES.none,
    isMobile: false,
    isTablet: false,
    isPending: breakpointMatch === WRENCH_BREAKPOINT_VALUES.none,
  };

  if (breakpointMatch === WRENCH_BREAKPOINT_VALUES.xs
    || breakpointMatch === WRENCH_BREAKPOINT_VALUES.sm) {
    // isMobile
    deviceSize.isMobile = true;
  }

  if (breakpointMatch === WRENCH_BREAKPOINT_VALUES.md) {
    // isTablet
    deviceSize.isTablet = true;
  }

  if (breakpointMatch === WRENCH_BREAKPOINT_VALUES.lg
    || breakpointMatch === WRENCH_BREAKPOINT_VALUES.xl) {
    // isDesktop
    deviceSize.isDesktop = true;
  }

  return deviceSize;
}

/** ---------- Private ResponsiveBreakpointsProvider constants and hooks -------------
 *
 * These utils are exported to support ResponsiveBreakpoints.
 * DO NOT IMPORT this file directly.
 */

const BREAKPOINT_ORDER = [
  WRENCH_BREAKPOINT_VALUES.xs,
  WRENCH_BREAKPOINT_VALUES.sm,
  WRENCH_BREAKPOINT_VALUES.md,
  WRENCH_BREAKPOINT_VALUES.lg,
  WRENCH_BREAKPOINT_VALUES.xl,
];

/**
 * This custom hook listens and monitors changes in a set of media-query, match results.
 * It takes a set of `mediaQueries`, key-value pair of breakpoint and media query, and:
 * a. creates an object, `parsedMediaQueryList`, with key-value pairs for media query and parsed media-query result from `window.matchMedia`.
 * b. registers match change listener on each media query in the `parsedMediaQueryList` set,
 * c. monitors match changes for each media-query in `parsedMediaQueryList`,
 * c. maintains an object, `matches`, with key-value pairs for media query and match result,
 * d. records changes in `matches` using `setMediaQueryMatches`.
 *
 * Background:
 * 1. `window.matchMedia` returns a ParsedMediaQuery object, the parsed results of a given media-query.
 * 2. `ParsedMediaQuery.matches` returns a match-result boolean indicating if the document matches the ParsedMediaQuery.
 * 3. A listener can be attached to/detached from ParsedMediaQuery to start/stop listening to changes for ParsedMediaQuery. Specifically, `ParsedMediaQuery.addEventListener()` and `ParsedMediaQuery.removeListener()`.
 *    NOTES:
 *    1. The listener is fired when either the document starts or stops matching media query.
 *    2. resize of the document width or change orientation will not trigger the listener.
 *
 * @param {object}   mediaQueries Object with key-value pairs for each breakpoint and media query formulation.
 * @param {function} setMediaQueryMatches Records an object (passed in) key-value pairs for each breakpoint and match result as boolean.
 */
function useListenForMediaQueryMatches(mediaQueries) {
  const [mediaQueryMatches, setMediaQueryMatches] = useState({});

  useEffect(() => {
    const parsedMediaQueryList = {};
    const bpNameKeys = Object.keys(mediaQueries);
    let isAttached = false;
    const mediaQueryListener = () => handleMediaQueryListener(bpNameKeys, parsedMediaQueryList, setMediaQueryMatches);

    if (window?.matchMedia) {
      const matches = {};
      bpNameKeys.forEach((media) => {
        if (typeof mediaQueries[media] === 'string') {
          const mql = window.matchMedia(mediaQueries[media]);
          parsedMediaQueryList[media] = mql;
          matches[media] = parsedMediaQueryList[media].matches;
        } else {
          matches[media] = false;
        }
      });
      setMediaQueryMatches(matches);
      isAttached = true;
      bpNameKeys.forEach((media) => {
        if (typeof mediaQueries[media] === 'string') {
          parsedMediaQueryList[media].addEventListener('change', mediaQueryListener);
        }
      });
    }

    return isAttached ? () => {
      bpNameKeys.forEach((media) => {
        if (typeof mediaQueries[media] === 'string') {
          parsedMediaQueryList[media].removeEventListener('change', mediaQueryListener);
        }
      });
    } : undefined;
  }, [mediaQueries, setMediaQueryMatches]);

  return useMemo(() => {
    if (Object.keys(mediaQueryMatches).length === 0) {
      // This state occurs when React is still initalizing and no context value is available.
      // Rather than default to `WRENCH_BREAKPOINT_VALUES.xs` causing initial mobile and then
      // desktop adjustment, set WRENCH_BREAKPOINT_VALUES.none.
      return WRENCH_BREAKPOINT_VALUES.none;
    }
    return BREAKPOINT_ORDER.reduce((bestSize, size) => (mediaQueryMatches[size] ? size : bestSize), WRENCH_BREAKPOINT_VALUES.xs);
  }, [mediaQueryMatches]);
}

/* ----------------- Public ResponsiveBreakpointsProvider -------------------------*/

export default function ResponsiveBreakpointsProvider({ children, mediaQueries }) {
  const mediaQueryMatch = useListenForMediaQueryMatches(mediaQueries);

  return (
    <ResponsiveBreakpoints.Provider value={mediaQueryMatch}>
      {children}
    </ResponsiveBreakpoints.Provider>
  );
}

ResponsiveBreakpointsProvider.propTypes /* remove-proptypes */ = {
  /**
   * 🚫 The child components to render inside the ResponsiveBreakpointsContext.
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  /**
   * 🚫 An object with media-query as value and breakpoint name as value.
   */
  mediaQueries: PropTypes.shape({
    [WRENCH_BREAKPOINT_VALUES.lg]: PropTypes.string,
    [WRENCH_BREAKPOINT_VALUES.md]: PropTypes.string,
    [WRENCH_BREAKPOINT_VALUES.sm]: PropTypes.string,
    [WRENCH_BREAKPOINT_VALUES.xl]: PropTypes.string,
    [WRENCH_BREAKPOINT_VALUES.xs]: PropTypes.string,
  }),
};

ResponsiveBreakpointsProvider.defaultProps = {
  mediaQueries: WRENCH_MINWIDTH_MEDIA_QUERIES,
};
