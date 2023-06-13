import { createUseStyles } from 'react-jss';

const useBoxStyles = createUseStyles(({ spacing }) => ({
  marginBottom: ({ my, mb }) => ({ marginBottom: (my || mb) ? spacing[my ?? mb] : 0 }),
  marginLeft: ({ mx, ml }) => ({ marginLeft: (mx || ml) ? spacing[mx ?? ml] : 0 }),
  marginRight: ({ mx, mr }) => ({ marginRight: (mx || mr) ? spacing[mx ?? mr] : 0 }),
  marginTop: ({ my, mt }) => ({ marginTop: (my || mt) ? spacing[my ?? mt] : 0 }),
  paddingBottom: ({ py, pb }) => ({ paddingBottom: (py || pb) ? spacing[py ?? pb] : 0 }),
  paddingLeft: ({ px, pl }) => ({ paddingLeft: (px || pl) ? spacing[px ?? pl] : 0 }),
  paddingRight: ({ px, pr }) => ({ paddingRight: (px || pr) ? spacing[px ?? pr] : 0 }),
  paddingTop: ({ py, pt }) => ({ paddingTop: (py || pt) ? spacing[py ?? pt] : 0 }),
}));

export default useBoxStyles;
