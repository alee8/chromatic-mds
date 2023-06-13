module.exports = {
  rules: {
    'no-restricted-imports': ['error'],
    'react/sort-default-props': ['error', {
      ignoreCase: true,
    }],
    'react/jsx-sort-props': ['error', {
      ignoreCase: true,
    }],
    'react/sort-prop-types': ['error', {
      ignoreCase: true,
      sortShapeProp: true,
    }],
  },
};
