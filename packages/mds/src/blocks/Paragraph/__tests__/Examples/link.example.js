import React from 'react';

import MockThemeProvider from '~tests/setupTests/MockThemeProvider';
import Paragraph from '~mds/blocks/Paragraph';
import { PRODUCT_VALUES } from '~mds/constants/products';

const content = '<p class="has-text-align-center">Tap into what the world is thinking—whenever you want.&nbsp;<a href="/mp/market-research-surveys/">Market research surveys</a>&nbsp;make it easy to get opinions from potential and existing customers, test concepts, measure brand awareness, and more.</p>';

export default function LinkExample() {
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
          fontSize="size-6"
          gridSettings={{}}
        />
      </MockThemeProvider>
      <hr />
      <MockThemeProvider product={PRODUCT_VALUES.mntv}>
        <Paragraph
          columnSettings={{ xs: 12 }}
          content={content}
          fontSize="size-6"
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
