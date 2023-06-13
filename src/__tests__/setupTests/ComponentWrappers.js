import PropTypes from 'prop-types';
import React from 'react';

import { AppProvider } from '~mds/providers/AppProvider';

const ComponentWrappers = ({
  appContext: {
    canonicalHostname = 'www.surveymonkey.com',
    currentHostname = 'www.surveymonkey.com',
    currentLocale = 'en-US',
  } = {},
  children = null,
  locale = 'en-US',
}) => {
  const appContext = {
    canonicalHostname,
    currentHostname,
    currentLocale,
  };

  return (
    <AppProvider
      value={appContext}
    >
      {children}
    </AppProvider>
  );
};

ComponentWrappers.propTypes /* remove-proptypes */ = {
  appContext: PropTypes.object,
  children: PropTypes.node,
  locale: PropTypes.string,
};

export default ComponentWrappers;
