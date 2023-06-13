import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { useTheme } from 'react-jss';

import Heading from '~mds/blocks/Heading';
import Paragraph from '~mds/blocks/Paragraph';

import { BRAND_COLOR_KEY_VALUES } from '~mds/styles/shared/colors';
import { EMPTY_STRING } from '~mds/constants';
import {
  SPACING_SIZE_VALUES,
  TEXT_ALIGNMENT_VALUES,
} from '~mds/constants/prop-types';
import {
  WP_FONT_SIZE_OPTIONS,
  WP_FONT_SIZE_VALUES,
} from '~mds/styles/shared/sizes';

import SimpleColorTable from './simple-color-table';
import {
  useBackgroundStyles,
  useBrandStyles,
  useTextStyles,
  useUtilityStyles,
} from './style';

export default function MDSColorTable({
  backgroundColorMap,
  brandColorMap,
  fontSize = WP_FONT_SIZE_VALUES.size3,
  showTitle = true,
  subtext = EMPTY_STRING,
  subtextFontsize = WP_FONT_SIZE_VALUES.size5,
  textColorMap,
  utilityColorMap,
}) {
  const {
    colors: {
      background, brand, text, utility,
    },
  } = useTheme();

  // Always have a brand prop; others are optional
  const colorTableData = [{
    classes: useBackgroundStyles(),
    colorData: background,
    colorMap: backgroundColorMap,
    tableId: 'background',
    title: 'Background',
  }, {
    classes: useBrandStyles(),
    colorData: brand,
    colorMap: brandColorMap,
    tableId: 'brand',
    title: 'Brand',
  }, {
    classes: useTextStyles(),
    colorData: text,
    colorMap: textColorMap,
    tableId: 'text',
    title: 'Text',
  }, {
    classes: useUtilityStyles(),
    colorData: utility,
    colorMap: utilityColorMap,
    tableId: 'utility',
    title: 'Utility',
  }];

  return colorTableData.map(({
    classes, colorData, colorMap, tableId, title,
  }, index) => {
    if (colorData && colorMap) {
      return (
        <Fragment key={`data${index}`}>
          {showTitle && (
            <Heading
              align={TEXT_ALIGNMENT_VALUES.center}
              fontSize={fontSize}
              isBare
              level={1}
              paddingTop={SPACING_SIZE_VALUES.md}
            >
              {title}
            </Heading>
          )}

          <SimpleColorTable
            classes={classes}
            colorData={colorData}
            colorMap={colorMap}
            tableId={tableId}
          />

          {Boolean(subtext) && (
            <Paragraph
              align={TEXT_ALIGNMENT_VALUES.left}
              fontSize={subtextFontsize}
              isBare
              textColor={BRAND_COLOR_KEY_VALUES.color1}
            >
              &dagger;
              {subtext}
            </Paragraph>
          )}
        </Fragment>
      );
    }
    return null;
  });
}

const PROP_TYPE_COLORMAP = PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
  color: PropTypes.string.isRequired,
  isLight: PropTypes.bool.isRequired,
  isUpdated: PropTypes.bool,
})));

MDSColorTable.propTypes /* remove prop-types */ = {
  backgroundColorMap: PROP_TYPE_COLORMAP,
  brandColorMap: PROP_TYPE_COLORMAP.isRequired,
  fontSize: PropTypes.oneOf(WP_FONT_SIZE_OPTIONS),
  showTitle: PropTypes.bool,
  subtext: PropTypes.string,
  subtextFontsize: PropTypes.string,
  textColorMap: PROP_TYPE_COLORMAP,
  utilityColorMap: PROP_TYPE_COLORMAP,
};
