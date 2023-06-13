import getThemeObject from '~mds/styles/shared/theme';
import { PRODUCT_VALUES } from '~mds/constants/products';

import mds from './mds';
import SMColors from './colors';
import typography from './typography';

const smThemeObject = {
  colors: SMColors,
  mds,
  typography,
};

const themeObject = getThemeObject(
  PRODUCT_VALUES.sm,
  smThemeObject
);

export default themeObject;
