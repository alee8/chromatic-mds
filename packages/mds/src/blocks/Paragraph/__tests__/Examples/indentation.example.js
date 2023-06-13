import React from 'react';

import MockThemeProvider from '~tests/setupTests/MockThemeProvider';
import Paragraph from '~mds/blocks/Paragraph';
import { PRODUCT_VALUES } from '~mds/constants/products';

const content = '<p>Innovation is getting a lot of attention recently. Terms like disrupt, ideate, incentivize, and amplify have sprung up to describe how start-ups and enterprises alike are trying to stand out in crowded fields and create new markets for products that consumers didn’t even know they wanted.</p>';

export default function IndentationExample() {
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
          indentationLevel={1}
        />
      </MockThemeProvider>
      <hr />
      <MockThemeProvider product={PRODUCT_VALUES.mntv}>
        <Paragraph
          columnSettings={{ xs: 12 }}
          content={content}
          gridSettings={{}}
          indentationLevel={1}
        />
      </MockThemeProvider>
      <hr />
      <MockThemeProvider>
        <Paragraph
          columnSettings={{ xs: 12 }}
          content={content}
          gridSettings={{}}
          indentationLevel={1}
        />
        <hr />
      </MockThemeProvider>
    </>
  );
}
