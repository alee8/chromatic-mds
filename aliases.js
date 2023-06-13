const path = require('path');

const packagesPath = path.resolve(__dirname, './packages');
const srcPath = path.resolve(__dirname, './src');

module.exports = {
  '~mds': path.resolve(packagesPath, 'mds/src'),
  '~mdsimages': path.resolve(packagesPath, 'mdsimages/src'),
  '~storybits': path.resolve(packagesPath, 'storybits/src'),
  '~tests': path.resolve(srcPath, '__tests__'),
};
