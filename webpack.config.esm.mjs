import path from 'path';
import { merge } from 'webpack-merge';
import baseConfig from './webpack.config.base.mjs';

/** @type {import('webpack').Configuration} */
const esmConfig = merge(baseConfig, {
  mode: 'production',
  experiments: {
    outputModule: true,
  },
  output: {
    path: path.resolve(import.meta.dirname, 'dist/esm'),
    filename: '[name].js',
    library: {
      type: 'module',
    },
    clean: true,
    environment: {
      module: true,
    },
  },
  externalsType: 'module',
  optimization: {
    usedExports: true,
    sideEffects: true,
    minimize: false,
    concatenateModules: true,
  },
});

export default esmConfig;
