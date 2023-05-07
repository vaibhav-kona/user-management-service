const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const webpackNodeExternals = require('webpack-node-externals')

const config = {
  // Target env on where to run the output code
  target: 'node',

  // Root file for server application
  entry: './src/index.js',

  // Output path
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  externals: [webpackNodeExternals()]
}

module.exports = merge(baseConfig, config)
