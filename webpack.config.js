const webpack = require('webpack')
const path = require('path')

const PATHS = {
  app: path.join(__dirname, 'src'),
  js: path.join(__dirname, 'src', 'js'),
  build: path.join(__dirname, 'src'),
}

module.exports = {
  context: PATHS.app,
  devtool: 'inline-sourcemap',
  entry: path.join(PATHS.js, 'app.js'),
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
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'url-loader',
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
  devServer: {
    inline: true,
    contentBase: './src',
    host: '0.0.0.0',
    port: 4000,
    historyApiFallback: true,
  },
  output: {
    path: PATHS.build,
    filename: 'meli.min.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
}
