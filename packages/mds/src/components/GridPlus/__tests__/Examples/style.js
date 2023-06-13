import { createUseStyles } from 'react-jss';

export const useGridPlusLayoutStyles = createUseStyles(({
  colors: { brand },
}) => ({
  bodyBackground: {
    background: brand.color3,
  },
  fluidBackground: {
    // when fluid=false, yellow background appears in area when > 1400px
    backgroundColor: brand.color20,
    '& div:first-child': {
      '& div': {
        // green for gutters
        backgroundColor: brand.color10,
      },
    },
  },
  fullHighlight: {
    extend: 'fluidBackground',
    '& div:first-child': {
      // orange for bleeds
      backgroundColor: brand.color25,
      '& div:first-child': {
        // green for gutters
        backgroundColor: brand.color10,
      },
    },
  },
}));

export const blueprintBoxStyle = {
  backgroundColor: 'rgba(45,204,211,.6)',
  border: '2px dashed #2dccd3',
  fontFamily: 'Roboto, Helvetica, Arial',
  padding: '16px',
};

export const blueprintBoxStyleXl = {
  backgroundColor: 'rgba(45,204,211,.6)',
  border: '2px dashed #2dccd3',
  fontFamily: 'Roboto, Helvetica, Arial',
  padding: '40px 16px',
};

export const orangeprintBoxStyle = {
  backgroundColor: '#FAC399',
  border: '2px dashed #E79A5F',
  padding: '16px',
  fontFamily: 'Roboto, Helvetica, Arial',
};

// greyprintBoxStyle
export default {
  backgroundColor: '#D0D0D0',
  border: '2px dashed #9D9D9D',
  padding: '16px',
  fontFamily: 'Roboto, Helvetica, Arial',
};
