import SharedMds from '~mds/styles/shared/mds';
import { BRAND_COLOR_KEY_VALUES } from '~mds/styles/shared/colors';

const mds = {
  ...SharedMds,

  paragraph: {
    capDrop: {
      fontSize: '400%', // fs=<paragraph_fontsize>*4 for 400%
      green: BRAND_COLOR_KEY_VALUES.color5, // sabaeus
      lineHeight: '128px', // means lh=32*4=128px
      topOffset: '-50px',
    },
  },
};

export default mds;
