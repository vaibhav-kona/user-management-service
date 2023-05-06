const path = require('path')

module.exports = {
  // Target env on where to run the output code
  target: 'node',

  // Root file for server application
  entry: './src/index.js',

  // Output path
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  // babel setup
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  }
}
