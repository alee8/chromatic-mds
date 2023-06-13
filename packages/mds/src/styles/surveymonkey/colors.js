// bgColor folded into color.background
import { generateObject } from '~mds/utils/utils';

export const SM_DARK_BACKGROUND_COLORS = Object.freeze([
  'color1',
  'color4',
  'color5',
  'color8', // @todo This color will need to be dropped from this list as part of https://momentiveai.atlassian.net/browse/CMS-9064
  'color9',
  'color10',
  'color12',
  'color11',
  'color13', // @todo This color will need to be dropped from this list as part of https://momentiveai.atlassian.net/browse/CMS-9064
]);

// exported colors are in hex format
const _PALETTE = {
  // Start off with $color-palette - from cmsweb:@src/properties/shared/styles/mds-theme.scss

  arctic: '#ADCFEB',
  arcticData: '#6BC8CD',
  bengal: '#DA7B48',
  bengalData: '#FF8B4F',
  black: '#000000',
  bumblebee: '#F9BE00',
  canvas: '#F7F7F7',
  charcoal: '#1E2124',
  cherry: '#DB4D5C',
  pine: '#224F3C', // color14 -> pine
  denim: '#051C4F', // color15 -> denim
  coral: '#EE838C', // color16 -> coral
  mint: '#CAE8DC', // color17 -> mint
  pear: '#F5FAF6', // color18 -> pear
  blush: '#F8D3D5', // color19 -> blush
  rose: '#FEF0F1', // color20 -> rose
  violet: '#CC8AC6', // color21 -> violet
  cloud: '#EEF9FE', // color22 -> cloud
  honey: '#F7E298', // color23 -> honey
  linen: '#FFFDED', // color24 -> linen
  lavender: '#E4CEE5', // color25 -> lavender
  lilac: '#F7F2FD', // color26 -> lilac
  concord: '#53225B',
  concordData: '#7D5E90',
  flint: '#D1D3D4',
  goldData: '#A38364',
  link: '#007FAA',
  midnight: '#05467E',
  midnightData: '#507CB6',
  pebble: '#ECEDED',
  raspberry: '#902B3C',
  raspberryData: '#D25F90',
  sabaeus: '#00BF6F',
  slate: '#73747A',
  slateData: '#768086',
  stone: '#A1A4A7',
  translucent: 'rgba(0, 0, 0, .15)',
  white: '#FFFFFF',
};

// TODO: Eventually merge with Wrench but for now embed as sub-level in theme while exploring this organization for MDS.
const SMColors = {
  accent: {
    // Accent colors includes gray700
    color1: _PALETTE.sabaeus,
  },
  background: {
    // Copied from wds.wds-core @ packages/wds-core/src/themes/SurveyMonkey.json
    // Dropped `bg-` part in favor of actual value to align with wrench @ packages/styles/Wrench.theme.js
    bg: _PALETTE.canvas,
    accent: _PALETTE.pebble,
    dark: _PALETTE.charcoal,
    light: _PALETTE.white,
    overlay: 'rgba(107, 120, 127, .86)',
  },
  brand: {
    color0: _PALETTE.white,
    color1: _PALETTE.charcoal,
    color2: _PALETTE.flint,
    color3: _PALETTE.stone,
    color4: _PALETTE.slate,
    color5: _PALETTE.sabaeus,
    color6: _PALETTE.canvas,
    color7: _PALETTE.pebble,
    color8: _PALETTE.arctic,
    color9: _PALETTE.midnight,
    color10: _PALETTE.concord,
    color11: _PALETTE.raspberry,
    color12: _PALETTE.bengal,
    color13: _PALETTE.bumblebee,

    // new additions for brand refresh Sept. 1, 2022
    color14: _PALETTE.pine,
    color15: _PALETTE.denim,
    color16: _PALETTE.coral,
    color17: _PALETTE.mint,
    color18: _PALETTE.pear,
    color19: _PALETTE.blush,
    color20: _PALETTE.rose,
    color21: _PALETTE.violet,
    color22: _PALETTE.cloud,
    color23: _PALETTE.honey,
    color24: _PALETTE.linen,
    color25: _PALETTE.lavender,
    color26: _PALETTE.lilac,

    // original SM colors not included color0-color13
    color27: _PALETTE.link,

    // data-vis-colors
    color28: _PALETTE.midnightData,
    color29: _PALETTE.arcticData,
    color30: _PALETTE.concordData,
    color31: _PALETTE.cherry,
    color32: _PALETTE.slateData,
    color33: _PALETTE.raspberryData,
    color34: _PALETTE.goldData,
    color35: _PALETTE.bengalData,
  },
  button: {
    // Same as Wrench.theme.js -> semanticColor and using hexcolor values
    // alt is only in wds@packages/wds-react/src/components/Button/button.scss
    // link added by MDS for SurveyMonkey button color
    alt: _PALETTE.white, // $color--type-dark
    info: _PALETTE.arctic,
    muted: _PALETTE.flint,
    primary: _PALETTE.sabaeus,
    secondary: _PALETTE.slate,
    success: _PALETTE.sabaeus,
    upgrade: _PALETTE.bumblebee,
    warning: _PALETTE.bengal,
    link: _PALETTE.midnight,
  },
  link: {
    dark: _PALETTE.white,
    light: _PALETTE.link,
  },

  logo: {
    sabaeus: _PALETTE.sabaeus,
    white: _PALETTE.white,
  },
  text: {
    // From cmsweb:@src/properties/shared/styles/utilities/font-styles.scss - .mds-u-color
    // Start off by using semantic names - add additional .mds-u-color based on need and function
    // Updated with those that match Wrench.theme.typeColor
    // https://code.corp.surveymonkey.com/wrench/wrench/blob/master/packages/styles/Wrench.theme.js#L40
    // TODO: should !important be added to each color as per font-styles.scss?
    accent1: _PALETTE.sabaeus,
    dark: _PALETTE.charcoal,
    darkMuted: _PALETTE.slate,
    default: _PALETTE.charcoal,
    light: _PALETTE.white,
    lightMuted: _PALETTE.flint,
    link: _PALETTE.link,
    on: {
      // the keys are the 8 colors.button plus link
      alt: _PALETTE.charcoal, // $color--type-dark
      info: _PALETTE.charcoal,
      link: _PALETTE.white,
      muted: _PALETTE.charcoal,
      primary: _PALETTE.white,
      secondary: _PALETTE.white,
      success: _PALETTE.white,
      upgrade: _PALETTE.charcoal,
      warning: _PALETTE.white,
    },
  },
};

export const SMComponentColors = {
  breadcrumbs: {
    hoverColor: 'color27',
    linkTextColor: 'color27',
    linkDecorationColor: 'link',
    textColor: 'color4',
    iconColor: 'muted', // muted or text.lightMuted
  },
};

export const SM_LOGO_FILL_OPTIONS = Object.freeze(['sabaeus', 'white']);
export const SM_LOGO_FILL_VALUES = Object.freeze(generateObject(SM_LOGO_FILL_OPTIONS));

export default SMColors;
