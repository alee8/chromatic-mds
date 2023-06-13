import { generateObject } from '~mds/utils/utils';

import { HERITAGE_GREEN1 } from '../momentive/colors';

export const GFP_DARK_BACKGROUND_COLOR = Object.freeze([
  'color1',
  'color2',
]);
export const GFP_LOGO_OPTIONS = Object.freeze(['colored', 'white']);
export const GFP_LOGO_VALUES = Object.freeze(generateObject(GFP_LOGO_OPTIONS));

// bgColor folded into color.background
// exported colors are in hex format

// Based on Core UI Colors: https://zpl.io/VxN179X,
// Names from Visual Identity Guidelines: https://surveymonkey.invisionapp.com/share/R3YR6ABNYXU
const _PALETTE = {
  // Primary colors
  black: '#0F1013',
  growthgreen: '#258060',
  white: '#FFFFFF',

  // Secondary colors
  sabaeus: '#00BF6F',
  seablue: '#34B2D5',
  yellow: '#FFB100',

  // Accent plus gray700
  navy: '#113451',
  orange: '#DE6449',
  raspberry: '#A13D60',
  red: '#C43E3E',

  // Gray shades
  gray100: '#F9F9FA',
  gray200: '#F3F3F5',
  gray300: '#EAEBEE',
  gray400: '#D7D9DF',
  gray500: '#CACDD5',
  gray600: '#B8BBC6',
  gray700: '#555B6E',
  gray800: '#31353F',

  // Text colors - includes black, gray100, gray700, white plus these 2
};

export const GFP_FILL_MARK_VALUES = Object.freeze({
  growthgreen: _PALETTE.growthgreen,
  white: _PALETTE.white,
});
export const GFP_FILL_MARK_OPTIONS = Object.freeze(Object.values(GFP_FILL_MARK_VALUES));

// TODO: Eventually merge with Wrench but for now embed as sub-level in theme while exploring this organization for MDS.
const GFPColors = {
  accent: {
    // Accent colors includes gray700
    color1: _PALETTE.gray700,
    color2: _PALETTE.navy,
    color3: _PALETTE.orange,
    color4: _PALETTE.raspberry,
    color5: _PALETTE.red,
  },
  background: {
    // Background colors - includes black, growthgreen plus these 2
    color0: _PALETTE.white,
    color1: _PALETTE.black,
    color2: _PALETTE.growthgreen,
    color3: _PALETTE.gray100,
    color4: _PALETTE.gray200,
  },
  brand: {
    // Per GetFeedback Visual Identity Guidelines - https://surveymonkey.invisionapp.com/share/R3YR6ABNYXU#/screens/431495072
    color0: _PALETTE.white,
    color1: _PALETTE.black,
    color2: _PALETTE.growthgreen,
    color3: _PALETTE.sabaeus,
    color4: _PALETTE.seablue,
    color5: _PALETTE.yellow,
    color6: _PALETTE.navy,
    color7: _PALETTE.orange,
    color8: _PALETTE.raspberry,
    color9: _PALETTE.red,

    // Gray shades
    color10: _PALETTE.gray100,
    color11: _PALETTE.gray200,
    color12: _PALETTE.gray300,
    color13: _PALETTE.gray400,
    color14: _PALETTE.gray500,
    color15: _PALETTE.gray600,
    color16: _PALETTE.gray700,
    color17: _PALETTE.gray800,
  },
  link: {
    dark: _PALETTE.black,
    light: _PALETTE.white,
  },
  logo: {
    [GFP_LOGO_VALUES.colored]: {
      mark: HERITAGE_GREEN1,
      text: _PALETTE.black,
    },
    [GFP_LOGO_VALUES.white]: {
      mark: _PALETTE.white,
      text: _PALETTE.white,
    },
    growthgreen: _PALETTE.growthgreen,
  },
  text: {
    // Text colors - includes black, gray100, gray700, white plus these 2
    color0: _PALETTE.white,
    color1: _PALETTE.black,
    color2: _PALETTE.gray700,
    color3: _PALETTE.gray600,
    color4: _PALETTE.gray100,

    // parking link here until decision on whether GF has link colors
    link: _PALETTE.black,
    on: {
      // the keys are those in colors.button except link
      // GF assignments are best guess by Alison
      alt: _PALETTE.black, // $color--type-dark
      info: _PALETTE.black,
      link: _PALETTE.white,
      muted: _PALETTE.black,
      primary: _PALETTE.white,
      secondary: _PALETTE.white,
      success: _PALETTE.white,
      upgrade: _PALETTE.black, // TODO: might not be best choice - possibly white - as it is the White+GrowthGreen GF Solid/LayeredButton
      warning: _PALETTE.white,
    },
  },
};

export default GFPColors;
