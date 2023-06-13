import SharedMds from '~mds/styles/shared/mds';
import { BRAND_COLOR_KEY_VALUES } from '~mds/styles/shared/colors';

const mds = {
  ...SharedMds,
  paragraph: {
    capDrop: {
      // Same settings as SM because of comparable P1 fs/lh; only color uses text momentive heritage green
      fontSize: '400%', // fs=<paragraph_fontsize>*4 for 400%
      green: BRAND_COLOR_KEY_VALUES.color8, // Text version of heritage green - green1 - brand.color8
      lineHeight: '128px', // means lh=32*4=128px
      topOffset: '-50px',
    },
  },
};

export default mds;
