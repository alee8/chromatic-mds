/**
 * Wherever `colorN` is used, color0 is white and color1 is black proxy.
 *
 * Never use (externally) colors that are not exported or prefixed with _.
 * All theme-accessible colors are referenced by `colorN`.
 *
 * bgColor folded into color.background
 * exported colors are in hex format
 * @see https://zpl.io/2Zw109E
 */
// bgColor folded into color.background
// exported colors are in hex format

import { generateObject } from '~mds/utils/utils';


/**
 * Theme color options
 * @constant
 * @type {Object}
 */
// Determine mntv circle fill color given color prop key matching this object's prop key.
export const MNTVCircleColor = {
  color12: 'color10',
  color17: 'color15',
  color22: 'color20',
  color27: 'color25',
};

export const MNTV_COLOR_OPTIONS = Object.freeze([
  'dark',
  'light',
]);
export const MNTV_COLOR_VALUES = Object.freeze(generateObject(MNTV_COLOR_OPTIONS));

export const MNTV_DARK_BACKGROUND_COLORS = Object.freeze([
  'color1',
  'color2',
  'color4',
  'color8',
]);

const _PALETTE = {
  // universal
  black: '#000000', // RGB: 0, 0, 0
  white: '#FFFFFF', // RGB: 255, 255, 255

  // innovative-apricot
  apricot1: '#F8AA6E', // primary:   RGB: 248, 170, 110
  apricot2: '#E79A5F', // secondary: RGB: 231, 154, 95
  apricot3: '#FAC399', // secondary: RGB: 250, 195, 153
  apricot4: '#FEEEE2', // secondary: RGB: 254, 238, 226
  apricot5: '#FFF8F3', // secondary: RGB: 255, 248, 243

  // sky-blue
  blue1: '#2CB2F1', // primary:    RGB: 44, 178, 241
  blue2: '#0A7CC1', // secondary:  RGB: 10, 124, 193
  blue3: '#6BC9F5', // secondary:  RGB: 107, 201, 245
  blue4: '#D5F0FC', // secondary:  RGB: 213, 240, 252
  blue5: '#EEF9FE', // secondary:  RGB: 238, 249, 254

  // heritage-green
  green1: '#008323', // primary:   RGB: 0, 131, 35
  green2: '#00621A', // secondary: RGB: 0,98,26
  green3: '#99CDA7', // secondary: RGB: 153, 205, 167
  green4: '#E5F3E9', // secondary: RGB: 229, 243, 233
  green5: '#F5FAF6', // secondary: RGB: 245, 250, 246

  // utility - red
  red1: '#CC0000', // utility: RGB: 204, 0, 0
  red2: '#FBEAEA', // utility: RGB: 251, 234, 234

  // slate
  slate1: '#404040', // primary:   RGB: 64, 64, 64
  slate2: '#202020', // secondary: RGB: 32, 32, 32
  slate3: '#757575', // secondary: RGB: 117, 117, 117
  slate4: '#9D9D9D', // secondary: RGB: 157, 157, 157
  slate5: '#D0D0D0', // secondary: RGB: 208, 208, 208
  slate6: '#EFEFEF', // secondary: RGB: 239, 239, 239

  // hello-yellow
  yellow1: '#FFE11B', // primary:  RGB: 255, 255, 27
  yellow2: '#E5C700', // secondary:RGB: 255, 255, 27
  yellow3: '#FFEA5F', // secondary:RGB: 255, 234, 95
  yellow4: '#FFF9D1', // secondary:RGB: 255, 234, 95
  yellow5: '#FFFDED', // secondary:RGB: 255, 253, 237
  yellow6: '#F7B500', // utility  :RGB: 247, 181, 0
  yellow7: '#FFEEC0', // utility  :RGB: 255, 238, 192

  // rgba-based background colors with 5% opacity - rgb color's numeric plus `b` at end
  apricot3b: 'rgba(250, 195, 153, .05)',
  blue3b: 'rgba(107, 201, 245, .05)',
  green3b: 'rgba(76, 168, 101, .05)',
  yellow3b: 'rgba(255, 234, 95, .05)',
};

// rgb(0, 131, 35)
export const HERITAGE_GREEN1 = _PALETTE.green1;

export default {
  background: {
    // background colors - color0 is white (implicit background)
    // ordered by importance (slate, green, blue, yellow, apricot), and includes:
    // - 3 shades of black (aka slate) and green
    // - 2 shades of apricot, blue, yellow
    color0: _PALETTE.white,

    color1: _PALETTE.slate1, // slates (aka blacks)
    color2: _PALETTE.slate3,
    color3: _PALETTE.slate6,

    color4: _PALETTE.green1, // greens
    color5: _PALETTE.green5,
    color6: _PALETTE.green3b,

    color7: _PALETTE.blue5, // blues
    color8: _PALETTE.blue3b,

    color9: _PALETTE.yellow5, // yellows
    color10: _PALETTE.yellow3b,

    color11: _PALETTE.apricot5, // apricots
    color12: _PALETTE.apricot3b,
  },
  button: { // aka semantic in SM
    /* Unused - future if additional colors desired
        alt: _PALETTE.slate1 (light background)
        info: _PALETTE.blue1 (light background),
        link: _PALETTE.yellow1 (light background),
        upgrade: _PALETTE.apricot1 (light background),

        muted: _PALETTE.slate6 (as button background in dark background and matches light gray for SM light gray),
        success: _PALETTE.blue5/_PALETTE.yellow5/apricot5 (as button background in dark background; but success is not used in SM),
    */
    warning: _PALETTE.red1, // fallback
    boxShadow: {
      focus: [[0, 0, 4, 5, 'rgba(6, 113, 195, 0.5)']], // shadow all around
      hoverGhost: [[0, 2, 8, 0, 'rgba(0, 0, 0, 0.12)']], // shadow all around
      hoverSolid: [[0, 2, 8, 0, 'rgba(0, 0, 0, 0.16)']], // shadow all around
    },
    ghost: { // variant value
      primary: { // aka light background
        text: _PALETTE.green1, // text and button border
        active: _PALETTE.green2, // text and button border
      },
      secondary: { // aka dark background
        text: _PALETTE.white, // text and button border
        active: _PALETTE.slate6, // text and button border; note zeplin design uses #CFCFCF
      },
    },
    solid: { // variant value
      primary: { // aka light background
        background: _PALETTE.green1,
        text: _PALETTE.white,
        active: _PALETTE.green2, // background
      },
      secondary: { // aka dark background
        background: _PALETTE.white,
        text: _PALETTE.green1,
        active: _PALETTE.green2, // text - border rgba(0, 0, 0, 0.2)?
      },
    },
    text: { // variant value
      primary: {
        text: _PALETTE.green1, // text and underline
        active: 'n/a', // always active so no change
        focus: 'rgba(6, 113, 195, 0.5)', // shadow all around
        hover: _PALETTE.slate1, // underline
      },
      secondary: { // aka dark background
        text: _PALETTE.white, // text and underline
        active: 'n/a', // always active so no change
        focus: 'rgba(6, 113, 195, 0.5)', // shadow all around
        hover: _PALETTE.yellow1, // underline
      },
    },
  },
  brand: {
    // Per Momentive colors: https://zpl.io/2Zw109E
    // Exclude the background colors with 5% opacity. They are available in `.background`
    color0: _PALETTE.white,

    // blacks - shades are called slate
    color1: _PALETTE.black,
    color2: _PALETTE.slate1,
    color3: _PALETTE.slate2,
    color4: _PALETTE.slate3,
    color5: _PALETTE.slate4,
    color6: _PALETTE.slate5,
    color7: _PALETTE.slate6,

    // heritage greens
    color8: _PALETTE.green1,
    color9: _PALETTE.green2,
    color10: _PALETTE.green3,
    color11: _PALETTE.green4,
    color12: _PALETTE.green5,

    // sky blues
    color13: _PALETTE.blue1,
    color14: _PALETTE.blue2,
    color15: _PALETTE.blue3,
    color16: _PALETTE.blue4,
    color17: _PALETTE.blue5,

    // hello yellow
    color18: _PALETTE.yellow1,
    color19: _PALETTE.yellow2,
    color20: _PALETTE.yellow3,
    color21: _PALETTE.yellow4,
    color22: _PALETTE.yellow5,

    // hello innovative-apricot
    color23: _PALETTE.apricot1,
    color24: _PALETTE.apricot2,
    color25: _PALETTE.apricot3,
    color26: _PALETTE.apricot4,
    color27: _PALETTE.apricot5,
  },
  link: {
    dark: _PALETTE.green1,
    light: _PALETTE.white,
  },
  logo: {
    [MNTV_COLOR_VALUES.dark]: {
      textColor: _PALETTE.slate1,
    },
    [MNTV_COLOR_VALUES.light]: {
      textColor: _PALETTE.white,
    },
    blue: _PALETTE.blue1,
    green: _PALETTE.green1,
    yellow: _PALETTE.yellow1,
  },
  text: {
    color0: _PALETTE.white,
    color1: _PALETTE.black,
    color2: _PALETTE.slate1,
    color3: _PALETTE.slate3,
    color4: _PALETTE.green1,
  },

  utility: {
    color0: _PALETTE.red1,
    color1: _PALETTE.red2,
    color2: _PALETTE.yellow6,
    color3: _PALETTE.yellow7,
    color4: _PALETTE.green1,
    color5: _PALETTE.green4,
    color6: _PALETTE.blue2,
    color7: _PALETTE.blue4,
  },
};
