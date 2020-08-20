const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./common');

const ROOT = path.join(__dirname, '..');
const SOURCE_ROOT = path.join(ROOT, 'src');
const DIST_ROOT = path.join(ROOT, 'dist');

config.entry = path.join(SOURCE_ROOT, 'client', 'index.ts');

config.output = {
  filename: 'index.js',
  path: path.join(DIST_ROOT, 'client'),
};

config.plugins.push(new HtmlWebpackPlugin({
  template: path.join(SOURCE_ROOT, 'client', 'index.html'),
  filename: path.join(DIST_ROOT, 'client', 'index.html'),
}));

module.exports = config;
