import React from 'react';

import MockThemeProvider from '~tests/setupTests/MockThemeProvider';
import Paragraph from '~mds/blocks/Paragraph';
import { PRODUCT_VALUES } from '~mds/constants/products';

const content = '<p>Innovation is getting a lot of attention recently. Terms like disrupt, ideate, incentivize, and amplify have sprung up to describe how start-ups and enterprises alike are trying to stand out in crowded fields and create new markets for products that consumers didn’t even know they wanted. Tap into what the world is thinking—whenever you want at <a href="/mp/market-research-surveys/">Market research surveys</a>.</p>';

export default function TextBackgroundColorExample() {
  return (
    <>
      <p style={{ fontWeight: '500', padding: '10px 20px' }}>
        JSS GF, JSS MNTV, JSS SMHelp
      </p>
      <hr />
      <MockThemeProvider product={PRODUCT_VALUES.gf}>
        <Paragraph
          backgroundColor="color2"
          columnSettings={{ xs: 12 }}
          content={content}
          fontSize="size-6"
          gridSettings={{}}
          textColor="color0"
        />
      </MockThemeProvider>
      <hr />
      <MockThemeProvider product={PRODUCT_VALUES.mntv}>
        <Paragraph
          backgroundColor="color8"
          columnSettings={{ xs: 12 }}
          content={content}
          fontSize="size-6"
          gridSettings={{}}
          textColor="color0"
        />
      </MockThemeProvider>
      <hr />
      <MockThemeProvider product={PRODUCT_VALUES.smHelp}>
        <Paragraph
          backgroundColor="color9"
          columnSettings={{ xs: 12 }}
          content={content}
          gridSettings={{}}
          textColor="color0"
        />
      </MockThemeProvider>
      <hr />
    </>
  );
}
