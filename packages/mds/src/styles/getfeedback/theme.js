import getThemeObject from '~mds/styles/shared/theme';
import { PRODUCT_VALUES } from '~mds/constants/products';

import GFPColors from './colors';
import mds from './mds';
import typography from './typography';

export default getThemeObject(
  PRODUCT_VALUES.gf,
  {
    colors: GFPColors,
    mds,
    typography,
  }
);
