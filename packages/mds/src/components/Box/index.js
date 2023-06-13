import React from 'react';

import useBoxStyles from './style';

function useClassnames({ className, mb, ml, mr, mt, mx, my, pb, pl, pr, pt, px, py }) {
  const {
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop
  } = useBoxStyles({ mb, ml, mr, mt, mx, my, pb, pl, pr, pt, px, py });

  let classNames = className;
  if (mx || ml) {
    classNames = `${classNames} ${marginLeft}`;
  }
  if (mx || mr) {
    classNames = `${classNames} ${marginRight}`;
  }
  if (my || mb) {
    classNames = `${classNames} ${marginBottom}`;
  }
  if (my || mt) {
    classNames = `${classNames} ${marginTop}`;
  }
  if (px || pl) {
    classNames = `${classNames} ${paddingLeft}`;
  }
  if (px || pr) {
    classNames = `${classNames} ${paddingRight}`;
  }
  if (py || pb) {
    classNames = `${classNames} ${paddingBottom}`;
  }
  if (py || pt) {
    classNames = `${classNames} ${paddingTop}`;
  }

  return classNames;
}

export default function Box(props) {
  const {
    containerRef,
    className,
    children,
    element = 'div',
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    pb,
    pl,
    pr,
    pt,
    px,
    py,
    ...rest
  } = props;
  const classNames = useClassnames({ className, mb, ml, mr, mt, mx, my, pb, pl, pr, pt, px, py });
  const Element = element;

  return (
    <Element className={classNames} ref={containerRef} {...rest}>
      {children}
    </Element>
  );
}
