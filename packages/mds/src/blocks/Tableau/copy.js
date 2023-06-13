/* eslint-disable max-len */
// import { defineMessages } from '@sm/intl';

function defineMessages(obj) {
  return obj;
}

export default defineMessages({
  ERROR: {
    id: 'MDS.Blocks.Tableau.Error-Label',
    defaultMessage: 'ERROR',
    description: {
      message: 'Error headline shown when a Tableau embed fails to load',
      project: 'surveymonkey_cms_frontend',
    },
  },
  GUIDANCE: {
    id: 'MDS.Blocks.Tableau.Error-Guidance',
    defaultMessage: 'Please refresh your browser or check back later to see if the situation is resolved.',
    description: {
      message: 'Error guidance shown when a Tableau embed fails to load',
      project: 'surveymonkey_cms_frontend',
    },
  },
  MESSAGE: {
    id: 'MDS.Blocks.Tableau.Error-Message',
    defaultMessage: 'Sorry, we cannot find that data visualization.',
    description: {
      message: 'Error message shown when a Tableau embed does not exist',
      project: 'surveymonkey_cms_frontend',
    },
  },
});
