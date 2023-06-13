import getThemeObject from '~mds/styles/shared/theme';
import { PRODUCT_VALUES } from '~mds/constants/products';

import mds from './mds';
import MNTVColors from './colors';
import typography from './typography';

export default getThemeObject(
  PRODUCT_VALUES.mntv,
  {
    colors: MNTVColors,
    mds,
    typography,
  }
);
