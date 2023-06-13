import { MARGIN_VALUES } from '~mds/constants/prop-types';
import { PRODUCT_VALUES } from '~mds/constants/products';

/**
 * Arbitrate when margin and resetMargin are co-present in a component based on product.
 * resetMargin is a legacy feature that predates block margin options used by SM.
 * On legacy product (SM), when both are co-present, resetMargin (true) takes precedence and margin
 * is overruled.
 * Moving forwards to new products, it will be ignored and block's margin will be definitive.
 * Arbitration based on whether the product is GF or SM.
 * @param {Object} number of margin and product info
 * @returns CSS margin value that deal with marginBottom and marginTop
 */
export function arbitrateOnBottomTopMargins({
  margin,
  marginSettings,
  product,
  resetMargin,
  resetMarginSettings,
}) {
  if ((!product || product === PRODUCT_VALUES.sm) && resetMargin) {
    return resetMarginSettings.reset;
  }
  return marginSettings[margin];
}

/**
 * Given spacing object with prop keys being spacing size as a number, return indentation margin object with prop keys being indentationLevel and values being amount to indent.
 *
 * @param {Object} spacing Wrench's theme.spacing
 * @returns {Object}
 */
const _getIndentationMargin = (spacing) => (
  {
    1: spacing[4] + spacing[5],
    2: spacing[4] + spacing[8],
    3: spacing[5] + spacing[9],
  }
);

/**
 * Given spacing object via theme, return Paragraph's margin settings object
 * with prop keys being margin directives and values being amount to indent.
 *
 * @param   {Object} component Wrench's theme.spacing
 * @returns {Object}
 */
export const getParagraphMarginSettings = ({ spacing }) => ({
  [MARGIN_VALUES.default]: [[spacing[2], 0]],
  [MARGIN_VALUES.removeBottom]: [[spacing[2], 0, 0, 0]],
  [MARGIN_VALUES.removeTop]: [[0, 0, spacing[2], 0]],
  [MARGIN_VALUES.removeAll]: 0,
});

/**
 * Returns the style given indentationLevel and spacing.
 * Formerly, the .mds-block-indentation--<indentationLevel> SCSS rule.
 *
 * @param {Number} indentationLevel propTypes.indentationLevel
 * @param {Object} spacing Wrench's theme.spacing
 * @returns {Object}
 */
export const getIndentationMarginStyle = ({ indentationLevel, spacing }) => {
  if (!Number.isInteger(indentationLevel) || indentationLevel < 1 || indentationLevel > 3) {
    // Must be an integer with value between 1-3, inclusive
    return undefined;
  }

  return _getIndentationMargin(spacing)[indentationLevel];
};
