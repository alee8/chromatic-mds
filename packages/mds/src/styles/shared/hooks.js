import { useTheme } from 'react-jss';

import { PRODUCT_PROP_KEY } from '~mds/constants/products';
import { TYPE_TAG_VALUES } from '~mds/constants/html';
import { unHyphenateNumber } from '~mds/utils/utils';

import { getProductSemanticSizes } from './size-utils';
import { getSpecificTypeSize } from './typography';
/**
 * Given a specific `fontSize`, looks up the current product's Theme, and retrieves typeInformation for mobile, tablet, desktop.
 *
 * Throws an error if the `size` does not exist in Theme's `responsiveTypeSizes`.
 * For example, mistakenly request Momentive `size` when the intended `size` was for SMHelpCenter/SurveyMonkey `size`.
 *
 * @param {String} fontSize of form `size-N`
 * @returns typeInformation for mobile, tablet, desktop
 */
export function useTypographySize(fontSize) {
  const {
    [PRODUCT_PROP_KEY]: product,
    typography: { fontSizes },
  } = useTheme();
  const _fontSize = fontSize ? unHyphenateNumber(fontSize) : getProductSemanticSizes(product)[TYPE_TAG_VALUES.p];

  return getSpecificTypeSize(_fontSize, fontSizes);
}
