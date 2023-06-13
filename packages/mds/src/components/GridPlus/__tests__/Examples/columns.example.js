import React from 'react';

import Box from '~mds/components/Box';
import GridPlus from '~mds/components/GridPlus';
import GridPlusItem from '~mds/components/GridPlus/GridPlusItem';
import MockThemeProvider from '~tests/setupTests/MockThemeProvider';
import { PRODUCT_VALUES } from '~mds/constants/products';

import { EMPTY_OBJECT } from '~mds/constants';

import greyprintBoxStyle, { useGridPlusLayoutStyles } from './style';

const gridBox = (label) => (<div style={greyprintBoxStyle}>{label || 'Item'}</div>);

/**
 * Example with columns laid out in column fashion.
 * @param {object} args settings for GridPlus
 */
function Columns(args) {
  const { fluid, noBleeds, noGutters } = args;
  const { fluidBackground } = useGridPlusLayoutStyles();
  return (
    <Box
      className={fluid ? fluidBackground : EMPTY_OBJECT}
      px={fluid ? 1 : 0}
      py={fluid ? 1 : 0}
    >
      <GridPlus {...args}>
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
        fluid={fluid}
        noBleeds={noBleeds}
        noGutters={noGutters}
      >
        {[...Array(12)].map((item, idx) => (
          <GridPlusItem
            key={`r6${idx}`}
            noGutters={noGutters}
          >
            {gridBox()}
          </GridPlusItem>
        ))}
      </GridPlus>
      <GridPlus
        fluid={fluid}
        noBleeds={noBleeds}
        noGutters={noGutters}
      >
        {[...Array(2)].map((item, idx) => (
          <GridPlusItem
            key={`r7${idx}`}
            lg={3}
            noGutters={noGutters}
            xs={4}
          >
            {gridBox('xs=4 lg=3')}
          </GridPlusItem>
        ))}
      </GridPlus>
      <GridPlus
        fluid={fluid}
        noBleeds={noBleeds}
        noGutters={noGutters}
      >
        <GridPlusItem
          key="r8-1"
          md={4}
          noGutters={noGutters}
          xs={12}
        >
          {gridBox('xs=12 md=4')}
        </GridPlusItem>
        <GridPlusItem
          key="r8-2"
          md={6}
          noGutters={noGutters}
          xs={12}
        >
          {gridBox('xs=12 md=6')}
        </GridPlusItem>
      </GridPlus>
      <GridPlus
        fluid={fluid}
        noBleeds={noBleeds}
        noGutters={noGutters}
      >
        <GridPlusItem
          key="r9-1"
          lg={3}
          md={4}
          noGutters={noGutters}
          sm={6}
          xl={2}
          xs={12}
        >
          {gridBox('xs=12 sm=6 md=4 lg=3 xl=2')}
        </GridPlusItem>
        <GridPlusItem
          key="r9-2"
          noGutters={noGutters}
          xs={6}
        >
          {gridBox('xs=6')}
        </GridPlusItem>
      </GridPlus>
      <GridPlus
        fluid={fluid}
        noBleeds={noBleeds}
        noGutters={noGutters}
      >
        <GridPlusItem
          key="r10"
          noGutters={noGutters}
          xs={12}
        >
          {gridBox('xs=12')}
        </GridPlusItem>
      </GridPlus>
    </Box>
  );
}

export default function ColumnsExample(args) {
  return (
    <MockThemeProvider product={PRODUCT_VALUES.gf}>
      <Columns {...args} />
    </MockThemeProvider>
  );
}
