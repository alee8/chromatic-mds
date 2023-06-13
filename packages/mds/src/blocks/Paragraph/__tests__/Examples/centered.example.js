import React from 'react';

import MockThemeProvider from '~tests/setupTests/MockThemeProvider';
import Paragraph from '~mds/blocks/Paragraph';
import { PRODUCT_VALUES } from '~mds/constants/products';

const content = '<p>Be sure to check out SurveyMonkey at Dreamforce ‘18 (booth #447) in the meantime.</p>';

export default function CenteredExample() {
  return (
    <>
      <p style={{ fontWeight: '500', padding: '10px 20px' }}>
        JSS GF, JSS MNTV, JSS SM
      </p>
      <hr />
      <MockThemeProvider product={PRODUCT_VALUES.gf}>
        <Paragraph
          align="center"
          centerFlexAlign
          columnSettings={{ xs: 12 }}
          content={content}
          gridSettings={{}}
        />
      </MockThemeProvider>
      <hr />
      <MockThemeProvider product={PRODUCT_VALUES.mntv}>
        <Paragraph
          align="center"
          centerFlexAlign
          columnSettings={{ xs: 12 }}
          content={content}
          gridSettings={{}}
        />
      </MockThemeProvider>
      <hr />
      <MockThemeProvider>
        <Paragraph
          align="center"
          centerFlexAlign
          columnSettings={{ xs: 12 }}
          content={content}
          gridSettings={{}}
        />
      </MockThemeProvider>
      <hr />
    </>
  );
}
