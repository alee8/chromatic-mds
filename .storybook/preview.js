import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { withPerformance } from 'storybook-addon-performance';

import withProviders from './withProviders';

/**
 * A story sorter function.
 *
 * Largely this aims to sort stories alphabetically,
 * but will force "intro" stories to appear at the top,
 * which technically is technically out of alphabetical order.
 *
 * @param {Object} a The first story to compare.
 * @param {Object} b The second story to compare.
 *
 * @returns {Number}
 */
const storySort = (a, b) => {
  // First, handle sorting the "Welcome" page to the top.
  const isAWelcome = a[1].kind.startsWith('Intro/Welcome');
  const isBWelcome = b[1].kind.startsWith('Intro/Welcome');
  if (isAWelcome && !isBWelcome) {
    // If "a" is the Welcome page and "b" is not, force "a" to sort before "b".
    return -1;
  }
  if (isBWelcome && !isAWelcome) {
    // If "b" is the Welcome page and "a" is not, force "b" to sort before "a".
    return 1;
  }

  // Next handle sorting other "Intro" pages above regular stories.
  const isAIntro = a[1].kind.startsWith('Intro/');
  const isBIntro = b[1].kind.startsWith('Intro/');

  if (isAIntro && !isBIntro) {
    // If "a" is an intro and "b" is not, force "a" to sort before "b".
    return -1;
  }
  if (isBIntro && !isAIntro) {
    // If "b" is an intro and "a" is not, force "b" to sort before "a".
    return 1;
  }

  return a[1].id.localeCompare(b[1].id);
};

export const decorators = [withPerformance, withProviders];

export const parameters = {
  a11y: {
    element: '#root',
    config: {},
    options: {},
    manual: false,
  },
  controls: {
    expanded: true,
    matchers: {
      color: /(Color|color)$/i,
    },
  },
  docs: {
    container: DocsContainer,
    inlineStories: true,
    page: DocsPage,
  },
  layout: 'fullscreen',
  options: {
    storySort,
  },
  // To avoid a slew of React warning of the following, ensure only client-only rendering:
  // 'useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client.'
  // @see https://github.com/atlassian-labs/storybook-addon-performance#usage-filtering-task-groups
  performance: {
    allowedGroups: ['client'],
  },
  viewMode: 'story',
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
};
