import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

/** @type {import('webpack').Configuration} */
const baseConfig = {
  entry: {
    index: './src/index.ts',
    'components/Button/index': './src/components/Button/index.ts',
    'components/Input/index': './src/components/Input/index.ts',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@nex-ui': path.resolve(import.meta.dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            compilerOptions: {
              declaration: false,
              declarationMap: false,
              declarationDir: undefined,
              sourceMap: true,
            },
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
        ],
      },
    ],
  },
  externals: {
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      module: 'react',
      root: 'React',
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'react-dom',
      module: 'react-dom',
      root: 'ReactDOM',
    },
    'react/jsx-runtime': {
      commonjs: 'react/jsx-runtime',
      commonjs2: 'react/jsx-runtime',
      module: 'react/jsx-runtime',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  devtool: 'source-map',
};

export default baseConfig;
