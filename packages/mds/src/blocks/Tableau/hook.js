import {
  useEffect,
  useState,
} from 'react';

import createScriptTag from '~mds/providers/LoadScript/create-script-tag';
import { useLoadScriptContext } from '~mds/providers/LoadScript';

import {
  instantiateViz,
  TABLEAU_API,
} from './utils';

export default function useTableauScriptAPI({
  desktopHeight,
  desktopTableauRef,
  desktopWidth,
  embedShortname,
  mobileHeight,
  mobileTableauRef,
  mobileWidth,
}) {
  const [hasError, setHasError] = useState(false);
  const [scriptLoaded, setLoadedScript] = useState(false);
  const onloadCallback = () => {
    setLoadedScript(true);
  };
  const onerrorCallback = () => {
    // Log error to debugLog, observability, and set hasError state.
    const errorText = `LoadScript: The Tableau script - ${TABLEAU_API} - failed to load.`;
    debugLog(errorText);
    reportError({ error: new Error(errorText) });
    setHasError(true);
  };

  const { tableauScriptRef } = useLoadScriptContext();
  if (!tableauScriptRef) {
    // Log error to debugLog, observability, and set hasError state.
    const errorText = 'LoadScript: The LoadScript context value is missing tableauScriptRef prop.';
    debugLog(errorText);
    reportError({ error: new Error(errorText) });
    setHasError(true);
  }

  useEffect(() => {
    // This useEffect is intended to be only run on component mount because tableauScriptRef object is readOnly and is never changed; but tableauScriptRef.current can be updated.
    // tableauScriptRef.current is undefined initially. It becomes associated with the script element that loads the tableau API.

    // Step 1: If scriptTag was created by another Tableau dashboard instance, this instance adds listeners for script load and error.
    if (tableauScriptRef.current) {
      tableauScriptRef.current.addEventListener('load', onloadCallback);
      tableauScriptRef.current.addEventListener('error', onerrorCallback);
      return;
    }

    // Step 2: create tableau script tag as no previous instance of this component has done it
    tableauScriptRef.current = createScriptTag(TABLEAU_API, onloadCallback, onerrorCallback);
  }, [tableauScriptRef]);

  useEffect(() => {
    // Should run when any of the dependencies change
    // Step 1: Will bail if error from createTableauScriptTag or !scriptLoaded.
    if (hasError || !scriptLoaded) {
      return;
    }

    // Step 2: Bail if all the dependencies are unavailable.
    if (
      !desktopHeight
      || !desktopTableauRef?.current
      || !desktopWidth
      || !embedShortname
      || !mobileHeight
      || !mobileTableauRef?.current
      || !mobileWidth
    ) {
      return;
    }

    // Step 3: Instantiate desktop and mobile tableau dashboards.
    try {
      const tableauDetails = {
        desktop: {
          ref: desktopTableauRef,
          size: {
            height: desktopHeight,
            width: desktopWidth,
          },
        },
        embedShortname,
        mobile: {
          ref: mobileTableauRef,
          size: {
            height: mobileHeight,
            width: mobileWidth,
          },
        },
      };
      instantiateViz(tableauDetails);
    } catch (error) {
      // Log unknown error to debugLog, observability, and set hasError state.
      debugLog(`useTableauScriptAPIL ${error.toString()}`);
      reportError({ error });
      setHasError(true);
    }
  }, [
    desktopHeight,
    desktopTableauRef,
    desktopWidth,
    embedShortname,
    hasError,
    mobileHeight,
    mobileTableauRef,
    mobileWidth,
    scriptLoaded,
  ]);
  return hasError;
}
