import path from 'path';
import { merge } from 'webpack-merge';
import baseConfig from './webpack.config.base.mjs';

/** @type {import('webpack').Configuration} */
const cjsConfig = merge(baseConfig, {
  mode: 'production',
  output: {
    path: path.resolve(import.meta.dirname, 'dist/cjs'),
    filename: '[name].js',
    library: {
      type: 'commonjs2',
    },
    clean: true,
  },
  optimization: {
    minimize: false,
  },
});

export default cjsConfig;
