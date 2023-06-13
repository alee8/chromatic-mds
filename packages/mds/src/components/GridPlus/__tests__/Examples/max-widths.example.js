import React from 'react';

import GridPlus from '~mds/components/GridPlus';
import GridPlusItem from '~mds/components/GridPlus/GridPlusItem';
import MockThemeProvider from '~tests/setupTests/MockThemeProvider';
import { PRODUCT_VALUES } from '~mds/constants/products';

import greyprintBoxStyle from './style';

const gridBox = (label) => (<div style={greyprintBoxStyle}>{label || 'Item'}</div>);

/**
 * MaxWidths example.
 * @param {object} args settings for GridPlus
 */
export default function MaxWidthsExample(args) {
  const { fluid, noBleeds, noGutters } = args;
  return (
    <MockThemeProvider product={PRODUCT_VALUES.gf}>
      <GridPlus
        display="flex"
        flexDirection="row"
        flexJustify="center"
        fluid={fluid}
        noBleeds={noBleeds}
        noGutters={noGutters}
      >
        {[...Array(1)].map((item, idx) => (
          <GridPlusItem
            key={`r1${idx}`}
            noGutters={noGutters}
          >
            {gridBox()}
          </GridPlusItem>
        ))}
      </GridPlus>
      <GridPlus
        display="flex"
        flexDirection="row"
        flexJustify="center"
        fluid={fluid}
        noBleeds={noBleeds}
        noGutters={noGutters}
      >
        {[...Array(1)].map((item, idx) => (
          <GridPlusItem
            key={`r1mW${idx}`}
            noGutters={noGutters}
            xsMaxWidth={0.90}
          >
            {gridBox('xs=12 xsMaxWidth=0.90')}
          </GridPlusItem>
        ))}
      </GridPlus>
      <GridPlus
        display="flex"
        flexDirection="row"
        flexJustify="center"
        fluid={fluid}
        noBleeds={noBleeds}
        noGutters={noGutters}
      >
        {[...Array(2)].map((item, idx) => (
          <GridPlusItem
            key={`r2${idx}`}
            noGutters={noGutters}
          >
            {gridBox()}
          </GridPlusItem>
        ))}
      </GridPlus>
      <GridPlus
        display="flex"
        flexDirection="row"
        flexJustify="center"
        fluid={fluid}
        noBleeds={noBleeds}
        noGutters={noGutters}
      >
        {[...Array(2)].map((item, idx) => (
          <GridPlusItem
            key={`r2mW${idx}`}
            lgMaxWidth={0.40}
            noGutters={noGutters}
          >
            {gridBox('2 Items each xs=6 lgMaxWidth=0.40')}
          </GridPlusItem>
        ))}
      </GridPlus>
      <GridPlus
        display="flex"
        flexDirection="row"
        flexJustify="center"
        fluid={fluid}
        noBleeds={noBleeds}
        noGutters={noGutters}
      >
        {[...Array(3)].map((item, idx) => (
          <GridPlusItem
            key={`r3${idx}`}
            noGutters={noGutters}
          >
            {gridBox()}
          </GridPlusItem>
        ))}
      </GridPlus>
      <GridPlus
        display="flex"
        flexDirection="row"
        flexJustify="center"
        fluid={fluid}
        noBleeds={noBleeds}
        noGutters={noGutters}
      >
        {[...Array(3)].map((item, idx) => (
          <GridPlusItem
            key={`r3mw${idx}`}
            mdMaxWidth={0.305}
            noGutters={noGutters}
          >
            {gridBox('3 Items each xs=4 mdMaxWidth=0.305')}
          </GridPlusItem>
        ))}
      </GridPlus>
      <GridPlus
        display="flex"
        flexDirection="row"
        flexJustify="center"
        fluid={fluid}
        noBleeds={noBleeds}
        noGutters={noGutters}
      >
        {[...Array(4)].map((item, idx) => (
          <GridPlusItem
            key={`r4${idx}`}
            noGutters={noGutters}
          >
            {gridBox()}
          </GridPlusItem>
        ))}
      </GridPlus>
      <GridPlus
        display="flex"
        flexDirection="row"
        flexJustify="center"
        fluid={fluid}
        noBleeds={noBleeds}
        noGutters={noGutters}
      >
        {[...Array(4)].map((item, idx) => (
          <GridPlusItem
            key={`r4mw${idx}`}
            lgMaxWidth={0.22}
            noGutters={noGutters}
            xlMaxWidth={0.20}
          >
            {gridBox('xs=3 lgMaxWidth=0.22 xlMaxWidth=0.20')}
          </GridPlusItem>
        ))}
      </GridPlus>
      <GridPlus
        display="flex"
        flexDirection="row"
        flexJustify="center"
        fluid={fluid}
        noBleeds={noBleeds}
        noGutters={noGutters}
      >
        {[...Array(6)].map((item, idx) => (
          <GridPlusItem
            key={`r5${idx}`}
            noGutters={noGutters}
          >
            {gridBox()}
          </GridPlusItem>
        ))}
      </GridPlus>
      <GridPlus
        display="flex"
        flexDirection="row"
        flexJustify="center"
        fluid={fluid}
        noBleeds={noBleeds}
        noGutters={noGutters}
      >
        {[...Array(6)].map((item, idx) => (
          <GridPlusItem
            key={`r5mw${idx}`}
            lgMaxWidth={0.15}
            mdMaxWidth={0.16}
            noGutters={noGutters}
          >
            {gridBox('xs=2 lgMW=0.15 mdMW=0.16')}
          </GridPlusItem>
        ))}
      </GridPlus>
      <GridPlus
        display="flex"
        flexDirection="row"
        flexJustify="center"
        fluid={fluid}
        noBleeds={noBleeds}
        noGutters={noGutters}
      >
        {[...Array(2)].map((item, idx) => (
          <GridPlusItem
            key={`r6${idx}`}
            noGutters={noGutters}
          >
            {gridBox()}
          </GridPlusItem>
        ))}
      </GridPlus>
      <GridPlus
        display="flex"
        flexDirection="row"
        flexJustify="center"
        fluid={fluid}
        noBleeds={noBleeds}
        noGutters={noGutters}
      >
        {[...Array(2)].map((item, idx) => (
          <GridPlusItem
            key={`r6mW${idx}`}
            lgMaxWidth={424}
            mdMaxWidth={0.30}
            noGutters={noGutters}
          >
            {gridBox('2 Items each xs=6 mdMaxWidth=0.30 lgMaxWidth=424')}
          </GridPlusItem>
        ))}
      </GridPlus>
    </MockThemeProvider>
  );
}

// Override component's args with this example's own args settings.
MaxWidthsExample.args = {
  fluid: false,
  noBleeds: true,
  noGutters: true,
};
