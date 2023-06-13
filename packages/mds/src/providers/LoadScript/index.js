import PropTypes from 'prop-types';
import React, {
  createContext,
  createRef,
  useContext,
  useMemo,
} from 'react';

/**
 * Context to store a readonly object whose object keys are React ref names and their values are React.createRef.
 * Each ref object has a `current` key whose value can be set and updated.
 * Such updates do not change this Context.Provider's value.
 *
 * Notes:
 * As a readonly value, the LoadScriptContext.Provider will not trigger re-render on any of its wrapped descendants.
 * Other mechanisms (e.g., a component's useEffect) should trigger renders if that is desired.
 *
 * @returns {Object}
 */
const LoadScriptContext = createContext(undefined);

export function useLoadScriptContext() {
  const ctx = useContext(LoadScriptContext);
  if (!ctx) {
    throw new Error('useLoadScriptContext must be used within a LoadScriptProvider');
  }
  return ctx;
}

export default function LoadScriptProvider({ children }) {
  const mediaValue = useMemo(() => ({
    tableauScriptRef: createRef(null),
    wistiaScriptRef: createRef(null),
  }), []);

  return (
    <LoadScriptContext.Provider value={mediaValue}>
      {children}
    </LoadScriptContext.Provider>
  );
}

LoadScriptProvider.propTypes /* remove-proptypes */ = {
  /**
   * 🚫 The child components to render inside the LoadScriptContext.
   */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
