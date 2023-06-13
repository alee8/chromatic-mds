/**
 * Tableau desktop slug.
 *
 * @constant
 */
const DESKTOP_VIZ = 'Desktop';
/**
 * Tableau mobile slug.
 *
 * @constant
 */
const MOBILE_VIZ = 'Mobile';

/**
 * The constant is internal to Tableau implementation.
 * It references the currently applicable Tableau API url.
 *
 * TABLEAU_API is embedded in the official Tableau API https://public.tableau.com/javascripts/api/tableau-2.min.js.
 * The public Tableau API cannot be used as it does a document.write; React app-friendly action.
 * NOTE: Tableau periodically updates tableau-2.min.js without any official announcement (specifically the value used by TABLEAU_API).
 * Therefore, when TABLEU_API does not load, it is time to view the internals of tableau-2.min.js script for changes.
 *
 * @constant
 */
export const TABLEAU_API = 'https://public.tableau.com/javascripts/api/tableau-2.9.1.min.js';

/**
 * Prefix embed url to Desktop and Mobile Tableau dashboard.
 * The constant is internal to Tableau implementation.
 *
 * @constant
 */
const TABLEAU_URL = 'https://public.tableau.com/views';

/**
 * Instantiate each Tableau Viz object with the provided parameters.
 *
 * @param {Object} config Config parameters for instantiating Tableau Viz.
 * @returns
 */
export function instantiateViz({
  desktop: {
    ref: desktopRef,
    size: {
      height: desktopHeight,
      width: desktopWidth,
    },
  },
  embedShortname,
  mobile: {
    ref: mobileRef,
    size: {
      height: mobileHeight,
      width: mobileWidth,
    },
  },
}) {
  const { tableau = undefined } = window;
  if (!tableau) {
    // window.tableau not available; return and wait to create script tag to get tableau API or if created, for scriptLoaded state to change
    return false;
  }

  const urlPrefix = `${TABLEAU_URL}/${embedShortname}`;

  // Instantiate a Viz instance for desktop and mobile Tableau Dashbooards.
  /* eslint-disable no-new */
  new tableau.Viz(
    desktopRef.current,
    `${urlPrefix}/${DESKTOP_VIZ}`,
    {
      height: desktopHeight,
      width: desktopWidth,
    }
  );
  new tableau.Viz(
    mobileRef.current,
    `${urlPrefix}/${MOBILE_VIZ}`,
    {
      height: mobileHeight,
      width: mobileWidth,
    }
  );
  /* eslint-enable no-new */
  return true;
}
