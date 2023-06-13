import React from 'react';

import MockThemeProvider from '~tests/setupTests/MockThemeProvider';
import Paragraph from '~mds/blocks/Paragraph';
import { PRODUCT_VALUES } from '~mds/constants/products';

export default function DirectContentExample() {
  return (
    <>
      <p style={{ fontWeight: '500', padding: '10px 20px' }}>
        JSS GF, JSS MNTV, JSS SM
      </p>
      <hr />
      <MockThemeProvider product={PRODUCT_VALUES.gf}>
        <Paragraph
          columnSettings={{ xs: 12 }}
          gridSettings={{}}
        >
          Be sure to check out SurveyMonkey at Dreamforce ‘18 (booth #447) in the meantime.
        </Paragraph>
      </MockThemeProvider>
      <hr />
      <MockThemeProvider product={PRODUCT_VALUES.mntv}>
        <Paragraph
          columnSettings={{ xs: 12 }}
          gridSettings={{}}
        >
          Be sure to check out SurveyMonkey at Dreamforce ‘18 (booth #447) in the meantime.
        </Paragraph>
      </MockThemeProvider>
      <hr />
      <MockThemeProvider>
        <Paragraph
          columnSettings={{ xs: 12 }}
          gridSettings={{}}
        >
          Be sure to check out SurveyMonkey at Dreamforce ‘18 (booth #447) in the meantime.
        </Paragraph>
      </MockThemeProvider>
      <hr />
    </>
  );
}
