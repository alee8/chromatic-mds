import React from 'react';

import MDSColorTable from '~storybits/MDSColorTable';
import MockThemeProvider from '~tests/setupTests/MockThemeProvider';
import Title from '~storybits/Title';
import { brandColorMap as GetFeedbackColorMap } from '~mds/styles/getfeedback/__tests__/Examples/colors';
import { brandColorMap as MomentiveColorMap } from '~mds/styles/momentive/__tests__/Examples/colors';
import { PRODUCT_VALUES } from '~mds/constants/products';
import { brandColorMap as SurveyMonkeyColorMap } from '~mds/styles/surveymonkey/__tests__/Examples/colors';

export default function BrandColors() {
  return (
    <>
      <Title>GetFeedback brand colors</Title>
      <MockThemeProvider product={PRODUCT_VALUES.gf}>
        <MDSColorTable
          brandColorMap={GetFeedbackColorMap}
          showTitle={false}
        />
      </MockThemeProvider>
      <Title>Momentive brand colors</Title>
      <MockThemeProvider product={PRODUCT_VALUES.mntv}>
        <MDSColorTable
          brandColorMap={MomentiveColorMap}
          showTitle={false}
        />
      </MockThemeProvider>
      <Title>SurveyMonkey brand colors</Title>
      <MockThemeProvider>
        <MDSColorTable
          brandColorMap={SurveyMonkeyColorMap}
          showTitle={false}
          subtext="Updated (July 2022) or added (Sept 2022) as part of brand refresh"
        />
      </MockThemeProvider>
    </>
  );
}
