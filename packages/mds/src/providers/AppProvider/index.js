import hoistStatics from 'hoist-non-react-statics';
import PropTypes from 'prop-types';
import React, {
  createContext,
  useContext,
} from 'react';

import { EMPTY_STRING } from '~mds/constants';
import { LANG_EN_US } from '~mds/constants/locales';

/**
 * Context used for app-wide details.
 *
 * @returns {Object}
 */
const AppContext = createContext({
  canonicalHostname: EMPTY_STRING,
  currentHostname: EMPTY_STRING,
  currentLocale: LANG_EN_US,
});

export const useAppContext = () => useContext(AppContext);

export const AppProvider = AppContext.Provider;

/**
 * A public higher-order component to access the AppContext
 */
export function withAppContext(Component) {
  const C = (props) => {
    const { wrappedComponentRef, ...remainingProps } = props;

    return (
      <AppContext.Consumer>
        {
          (context) => (
            <Component
              {...remainingProps}
              {...context}
              ref={wrappedComponentRef}
            />
          )
        }
      </AppContext.Consumer>
    );
  };

  C.WrappedComponent = Component;

  C.propTypes = {
    wrappedComponentRef: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
      PropTypes.object,
    ]),
  };

  return hoistStatics(C, Component);
}
