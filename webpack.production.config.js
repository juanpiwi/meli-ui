const webpack = require('webpack')
const path = require('path')
// const CopyWebpackPlugin = require('copy-webpack-plugin')
// const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
// const Config = require('./src/config/config')

const PATHS = {
  app: path.join(__dirname, 'src'),
  js: path.join(__dirname, 'src', 'js'),
  html: path.join(__dirname, 'src'),
  sass: path.join(__dirname, 'src', 'styles', 'scss'),
  build: path.join(__dirname, 'build'),
}

module.exports = {
  context: PATHS.app,
  devtool: 'cheap-module-source-map',
  entry: path.join(PATHS.js, './app.js'),
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
      },
      /* {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },*/
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        })
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/i,
        include: [
          path.resolve(__dirname, 'src/styles/fonts'),
        ],
        use: [
          'file-loader?name=[path][name].[ext]',
          'image-webpack',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        /* include: [
          path.resolve(__dirname, '/../src/images'),
        ], */
        use: [
          {
            loader: 'file-loader',
            /* query: {
              publicPath: '/../src/images',
              outputPath: 'build/images',
            }*/
          },
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
            },
          },
        ],
      },
    ],
  },
  output: {
    path: PATHS.build,
    filename: 'meli.[hash].bundle.js',
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      inject: 'body',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      mangle: {
        except: ['$super', '$', 'exports', 'require'],
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ],
}
