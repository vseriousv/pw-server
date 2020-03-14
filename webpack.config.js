const path = require('path');
const NodemonPlugin = require('nodemon-webpack-plugin');
const TSLintPlugin = require('tslint-webpack-plugin');
const PrettierPlugin = require("prettier-webpack-plugin");

module.exports = {
  entry: './src/server.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new PrettierPlugin(),
    new TSLintPlugin({
      files: ['./src/**/*.ts']
    }),
    new NodemonPlugin()
  ],
};
