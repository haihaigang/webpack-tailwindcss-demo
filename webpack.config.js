const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.resolve('./src'),
        use: [
          {
            // loader: require.resolve('style-loader'),
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: require.resolve('css-loader')
          },
          {
            loader: require.resolve('postcss-loader')
          }
        ]
      },
      {
        test: /\.js$/,
        include: path.resolve('./src'),
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('@babel/preset-react')]
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new MiniCssExtractPlugin(),
  ]
}