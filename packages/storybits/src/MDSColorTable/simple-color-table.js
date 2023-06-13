import PropTypes from 'prop-types';
import React from 'react';

import {
  useTableStyles,
  useTextColorStyles,
} from './style';

export default function SimpleColorTable({
  classes, colorData, colorMap, tableId,
}) {
  const tableClasses = useTableStyles();
  const textClasses = useTextColorStyles();
  return (
    <table
      className={tableClasses.table}
      id={tableId}
    >
      <tbody>
        {
          colorMap.map((row, rowIndex) => (
            <tr key={`${tableId}-row-${rowIndex}`}>
              {
                row.map((column, columnIndex) => {
                  const {
                    color: colorKey, isLight, isUpdated,
                  } = column;
                  const isBlank = Object.keys(column).length === 0;
                  const cellStyle = isBlank ? tableClasses.blankCell : tableClasses.cell;
                  const colorStyle = isBlank ? classes.color0 : classes[colorKey];
                  const backgroundStyle = isBlank || isLight ? textClasses.darkText : textClasses.lightText;
                  const classStyle = `${cellStyle} ${colorStyle} ${backgroundStyle}`;
                  return (
                    <td
                      className={classStyle}
                      key={`${tableId}-column-${columnIndex}`}
                    >
                      {!isBlank ? <div>{colorKey}</div> : <div />}
                      {
                        !isBlank && (
                          <div>
                            <span>{colorData[colorKey]}</span>
                            {isUpdated && <span className={textClasses.superscript}>&nbsp;&dagger;</span>}
                          </div>
                        )
                      }
                    </td>
                  );
                })
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

SimpleColorTable.propTypes = {
  classes: PropTypes.object.isRequired,
  colorData: PropTypes.object.isRequired,
  colorMap: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.object)),
  tableId: PropTypes.string.isRequired,
};
