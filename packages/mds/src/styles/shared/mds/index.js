import Grid from '~mds/components/GridPlus/constants';
import IconSize from '~mds/styles/shared/mds/icon-size';
import LogoSize from '~mds/styles/shared/mds/logos';

const SharedMds = {
  // mds components and their theme specific info
  column: {
    bleed: {
      none: 0,
      sm: '10%',
      md: '15%',
      lg: '20%',
    },
    image: {
      minHeight: '400px',
    },
  },
  grid: Grid,
  iconSize: IconSize,
  icon: {
    fontSize: {
      xl: 96,
    },
    squareSize: 64,
    circleRadius: 32,
  },
  logoSize: LogoSize,
};

export default SharedMds;
