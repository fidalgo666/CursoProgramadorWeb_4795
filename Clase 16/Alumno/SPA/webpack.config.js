var CopyWebpackPlugin = require('copy-webpack-plugin')
var webpack = require('webpack')

var path = require('path')

module.exports = {
<<<<<<< HEAD
  entry: [ './src/js/index.js' ],
=======
  entry: ['./src/index.js'],
>>>>>>> ee853b8e9b81555893392142982d3e2ca54d9f9f
  output: {
    filename: 'js/index.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
<<<<<<< HEAD
        use: [ 'style-loader', 'css-loader' ]
=======
        use: ['style-loader', 'css-loader']
>>>>>>> ee853b8e9b81555893392142982d3e2ca54d9f9f
      },
      {
        test: /\.(png|jpg|gif|svg|ico|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    port: 3000,
    hot: true
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, './template'),
        to: path.resolve(__dirname, './public')
      }
    ]),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
}