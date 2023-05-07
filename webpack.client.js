const path = require('path')

module.exports = {
  // Root file for server application
  entry: './src/client/client.js',

  // Output path
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  // babel setup - need to be same on both server and client webpack
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
