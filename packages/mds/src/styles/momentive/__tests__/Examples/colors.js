import React from 'react';

import MDSColorTable from '~storybits/MDSColorTable';
import MockThemeProvider from '~tests/setupTests/MockThemeProvider';
import { PRODUCT_VALUES } from '~mds/constants/products';

const backgroundColorMap = [
  [
    { color: 'color0', isLight: true },
  ],
  [
    { color: 'color1', isLight: false },
    { color: 'color2', isLight: false },
    { color: 'color3', isLight: true },
  ],
  [
    { color: 'color4', isLight: false },
    { color: 'color5', isLight: true },
    { color: 'color6', isLight: true },
  ],
  [
    { color: 'color7', isLight: true },
    { color: 'color8', isLight: true },
  ],
  [
    { color: 'color9', isLight: true },
    { color: 'color10', isLight: true },
  ],
  [
    { color: 'color11', isLight: true },
    { color: 'color12', isLight: true },
  ],
];

export const brandColorMap = [
  [
    { color: 'color1', isLight: false },
    { color: 'color0', isLight: true },
    { color: 'color9', isLight: false },
    { color: 'color14', isLight: false },
    { color: 'color19', isLight: true },
    { color: 'color24', isLight: true },
  ],
  [
    { color: 'color3', isLight: false },
    { color: 'color7', isLight: true },
    { color: 'color8', isLight: false },
    { color: 'color13', isLight: true },
    { color: 'color18', isLight: true },
    { color: 'color23', isLight: true },
  ],
  [
    { color: 'color2', isLight: false },
    { color: 'color6', isLight: true },
    { color: 'color10', isLight: true },
    { color: 'color15', isLight: true },
    { color: 'color20', isLight: true },
    { color: 'color25', isLight: true },
  ],
  [
    { color: 'color4', isLight: false },
    { color: 'color5', isLight: true },
    { color: 'color11', isLight: true },
    { color: 'color16', isLight: true },
    { color: 'color21', isLight: true },
    { color: 'color26', isLight: true },
  ],
  [
    {},
    {},
    { color: 'color12', isLight: true },
    { color: 'color17', isLight: true },
    { color: 'color22', isLight: true },
    { color: 'color27', isLight: true },
  ],
];

const textColorMap = [
  [
    { color: 'color0', isLight: true },
    { color: 'color1', isLight: false },
    { color: 'color2', isLight: false },
    { color: 'color3', isLight: false },
    { color: 'color4', isLight: false },
  ],
];

const utilityColorMap = [
  [
    { color: 'color0', isLight: false },
    { color: 'color2', isLight: false },
    { color: 'color4', isLight: false },
    { color: 'color6', isLight: false },
  ],
  [
    { color: 'color1', isLight: true },
    { color: 'color3', isLight: true },
    { color: 'color5', isLight: true },
    { color: 'color7', isLight: true },
  ],
];

export default function Colors() {
  return (
    <MockThemeProvider product={PRODUCT_VALUES.mntv}>
      <MDSColorTable
        backgroundColorMap={backgroundColorMap}
        brandColorMap={brandColorMap}
        textColorMap={textColorMap}
        utilityColorMap={utilityColorMap}
      />
    </MockThemeProvider>
  );
}
