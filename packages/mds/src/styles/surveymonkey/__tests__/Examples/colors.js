import React from 'react';

import MDSColorTable from '~storybits/MDSColorTable';
import MockThemeProvider from '~tests/setupTests/MockThemeProvider';

export const brandColorMap = [
  [
    { color: 'color1', isLight: false, isUpdated: true },
    { color: 'color14', isLight: false, isUpdated: true },
    { color: 'color15', isLight: false, isUpdated: true },
    { color: 'color12', isLight: true, isUpdated: true },
    { color: 'color10', isLight: false, isUpdated: true },
    { color: 'color11', isLight: false, isUpdated: true },
    { color: 'color27', isLight: false },
    { color: 'color32', isLight: false },
  ],
  [
    { color: 'color4', isLight: false, isUpdated: true },
    { color: 'color5', isLight: false },
    { color: 'color9', isLight: false },
    { color: 'color13', isLight: true },
    { color: 'color21', isLight: true, isUpdated: true },
    { color: 'color16', isLight: true, isUpdated: true },
    { color: 'color28', isLight: false },
    { color: 'color33', isLight: false },
  ], [
    { color: 'color3', isLight: true, isUpdated: true },
    { color: 'color17', isLight: true, isUpdated: true },
    { color: 'color8', isLight: true, isUpdated: true },
    { color: 'color23', isLight: true, isUpdated: true },
    { color: 'color25', isLight: true, isUpdated: true },
    { color: 'color19', isLight: true, isUpdated: true },
    { color: 'color29', isLight: false },
    { color: 'color34', isLight: false },
  ], [
    { color: 'color2', isLight: true, isUpdated: true },
    { color: 'color18', isLight: true, isUpdated: true },
    { color: 'color22', isLight: true, isUpdated: true },
    { color: 'color24', isLight: true, isUpdated: true },
    { color: 'color26', isLight: true, isUpdated: true },
    { color: 'color20', isLight: true, isUpdated: true },
    { color: 'color30', isLight: false },
    { color: 'color35', isLight: false },
  ], [
    { color: 'color7', isLight: true, isUpdated: true },
    {},
    {},
    {},
    {},
    {},
    { color: 'color31', isLight: false },
  ], [
    { color: 'color6', isLight: true, isUpdated: true },
  ], [
    { color: 'color0', isLight: true },
  ],
];

export default function Colors() {
  return (
    <MockThemeProvider>
      <MDSColorTable
        brandColorMap={brandColorMap}
        subtext="Updated (July 2022) or added (Sept 2022) as part of brand refresh"
      />
    </MockThemeProvider>
  );
}
