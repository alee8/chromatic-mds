import SharedMds from '~mds/styles/shared/mds';
import { BRAND_COLOR_KEY_VALUES } from '~mds/styles/shared/colors';

const mds = {
  ...SharedMds,
  paragraph: {
    capDrop: {
      fontSize: '300%', // fs=<paragraph_fontsize>*4 for 400%
      green: BRAND_COLOR_KEY_VALUES.color2, // Growth green
      lineHeight: '96px', // means lh=32*3=96px
      topOffset: '-35px',
    },
  },
};

export default mds;
