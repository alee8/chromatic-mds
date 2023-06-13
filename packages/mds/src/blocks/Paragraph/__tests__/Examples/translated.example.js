import React from 'react';

import MockThemeProvider from '~tests/setupTests/MockThemeProvider';
import Paragraph from '~mds/blocks/Paragraph';
import { PRODUCT_VALUES } from '~mds/constants/products';

const content = '<p>Bé~ súr~é tó~ ché~ck ó~út S~úrvé~ýMóñ~kéý ~át D~réám~fórc~é ‘1~8 (b~óóth~ #44~7) í~ñ th~é mé~áñtí~mé.</p>';

export default function TranslatedExample() {
  return (
    <>
      <p style={{ fontWeight: '500', padding: '10px 20px' }}>
        JSS GF, JSS MNTV, JSS SM
      </p>
      <hr />
      <MockThemeProvider product={PRODUCT_VALUES.gf}>
        <Paragraph
          columnSettings={{ xs: 12 }}
          content={content}
          gridSettings={{}}
        />
      </MockThemeProvider>
      <hr />
      <MockThemeProvider product={PRODUCT_VALUES.mntv}>
        <Paragraph
          columnSettings={{ xs: 12 }}
          content={content}
          gridSettings={{}}
        />
      </MockThemeProvider>
      <hr />
      <MockThemeProvider>
        <Paragraph
          columnSettings={{ xs: 12 }}
          content={content}
          gridSettings={{}}
        />
      </MockThemeProvider>
      <hr />
    </>
  );
}
