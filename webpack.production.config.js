const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
// const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Config = require('./src/config/config')

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
  entry: path.join(PATHS.js, './client.js'),
  module: {
    loaders: [
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
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
    /* {
        test: /manifest.json$/,
        loader: 'file-loader?name=manifest.json!web-app-manifest-loader',
      },*/
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/i,
        include: [
          path.resolve(__dirname, 'src/styles/fonts'),
        ],
        loaders: [
          'file-loader?name=[path][name].[ext]',
          'image-webpack',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        include: [
          path.resolve(__dirname, '/../src/images'),
        ],
        loaders: [
          'file-loader',
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
    // publicPath: Config.cdn,
    filename: 'package.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.template.ejs',
      inject: 'body',
    }),
    /*new CopyWebpackPlugin([
      {
        from: path.join(PATHS.html, './index.html'),
        to: 'index.html',
      },
    ]),*/
    new webpack.optimize.UglifyJsPlugin(
      {
        compress: {
          warnings: false,
        },
        mangle: {
          except: ['$super', '$', 'exports', 'require'],
        }
      }
    ),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      }
    }),
    /*new SWPrecacheWebpackPlugin({
      cacheId: 'webapp-car',
      filename: 'car-service-worker.js',
      maximumFileSizeToCacheInBytes: 4194304,
      runtimeCaching: [
        {
          handler: 'cacheFirst',
          urlPattern: /[.]mp3$/,
        },
      ],
    }),*/
  ],
}
