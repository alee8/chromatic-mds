import React from 'react';

import MDSColorTable from '~storybits/MDSColorTable';
import MockThemeProvider from '~tests/setupTests/MockThemeProvider';
import { PRODUCT_VALUES } from '~mds/constants/products';

const backgroundColorMap = [
  [
    { color: 'color0', isLight: true },
    { color: 'color1', isLight: false },
    { color: 'color2', isLight: false },
    { color: 'color3', isLight: true },
    { color: 'color4', isLight: true },
  ],
];

export const brandColorMap = [
  [
    { color: 'color1', isLight: false },
    { color: 'color0', isLight: true },
    { color: 'color2', isLight: false },
    { color: 'color6', isLight: false },
    { color: 'color5', isLight: false },
    { color: 'color8', isLight: false },
  ],
  [
    { color: 'color17', isLight: false },
    { color: 'color10', isLight: true },
    { color: 'color3', isLight: false },
    { color: 'color4', isLight: false },
    {},
    { color: 'color9', isLight: false },
  ],
  [
    { color: 'color16', isLight: false },
    { color: 'color11', isLight: true },
    {},
    {},
    {},
    { color: 'color7', isLight: false },
  ],
  [
    { color: 'color15', isLight: false },
    { color: 'color12', isLight: true },
  ],
  [
    { color: 'color14', isLight: true },
    { color: 'color13', isLight: true },
  ],
];

const textColorMap = [
  [
    { color: 'color0', isLight: true },
    { color: 'color1', isLight: false },
    { color: 'color2', isLight: false },
    { color: 'color3', isLight: false },
    { color: 'color4', isLight: true },
  ],
];

export default function Colors() {
  return (
    <MockThemeProvider product={PRODUCT_VALUES.gf}>
      <MDSColorTable
        backgroundColorMap={backgroundColorMap}
        brandColorMap={brandColorMap}
        textColorMap={textColorMap}
      />
    </MockThemeProvider>
  );
}
