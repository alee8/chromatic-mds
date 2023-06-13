/**
 */
import {
  WRENCH_BREAKPOINT_SETTINGS,
  WRENCH_BREAKPOINT_VALUES,
} from '~mds/constants/wrench-breakpoints';

/** ----------------- Private ResponsiveBreakpointsProvider utilities -------------------------
 *
 * These utils are exported to support ResponsiveBreakpoints.
 * DO NOT IMPORT this file directly.
*/

/**
 * Small helper to formulate the CSS min-width media query given a breakpoint.
 *
 * @param   {number} breakpoint
 * @returns {string} media query
 */
function getMinWidthMediaQuery(breakpoint) {
  return `(min-width: ${breakpoint}px)`;
}

export function getMinWidthMediaQueryObject() {
  return {
    [WRENCH_BREAKPOINT_VALUES.xs]: getMinWidthMediaQuery(WRENCH_BREAKPOINT_SETTINGS.xs),
    [WRENCH_BREAKPOINT_VALUES.sm]: getMinWidthMediaQuery(WRENCH_BREAKPOINT_SETTINGS.sm),
    [WRENCH_BREAKPOINT_VALUES.md]: getMinWidthMediaQuery(WRENCH_BREAKPOINT_SETTINGS.md),
    [WRENCH_BREAKPOINT_VALUES.lg]: getMinWidthMediaQuery(WRENCH_BREAKPOINT_SETTINGS.lg),
    [WRENCH_BREAKPOINT_VALUES.xl]: getMinWidthMediaQuery(WRENCH_BREAKPOINT_SETTINGS.xl),
  };
}

/**
 * Handler that is called when media-query match results change.
 * Each media query is checked against the document using the parsed media query's `matches` method for its match result.
 * The resulting `updatedMatches` is recorded using the `setMediaQueryMatches`.
 *
 * @param {string}   bpNameKeys from custom hook's provided `mediaQueries`
 * @param {object}   parsedMediaQueryList set of parsed `mediaQueries`
 * @param {function} setMediaQueryMatches records `updatedMatches`
 */
export function handleMediaQueryListener(bpNameKeys, parsedMediaQueryList, setMediaQueryMatches) {
  const updatedMatches = bpNameKeys.reduce((acc, media) => {
    acc[media] = !!(parsedMediaQueryList?.[media]?.matches);
    return acc;
  }, {});
  setMediaQueryMatches(updatedMatches);
}
