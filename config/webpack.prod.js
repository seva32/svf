/* eslint-disable max-len */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
// const TerserJSPlugin = require('terser-webpack-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const glob = require('glob');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].[chunkhash:8].bundle.js',
    chunkFilename: '[name].[chunkhash:8].chunk.js',
    publicPath: '/svf',
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // transpiling our JavaScript files using Babel and webpack
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader', // translates CSS into CommonJS
          'postcss-loader', // Loader for webpack to process CSS with PostCSS
          'sass-loader', // compiles Sass to CSS, using Node Sass by default
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader', // This will resolves import/require() on a file into a url and emits the file into the output directory.
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            attributes: false,
            minimize: true,
          },
        },
      },
    ],
  },
  // optimization: {
  //   minimizer: [new TerserJSPlugin(), new OptimizeCSSAssetsPlugin()],
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "vendors",
  //         chunks: "all"
  //       }
  //     },
  //     chunks: "all"
  //   },
  //   runtimeChunk: {
  //     name: "runtime"
  //   }
  // },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'reactvendor',
        },
        utilityVendor: {
          test: /[\\/]node_modules[\\/](lodash|moment|moment-timezone)[\\/]/,
          name: 'utilityVendor',
        },
        bootstrapVendor: {
          test: /[\\/]node_modules[\\/](animejs)[\\/]/,
          name: 'animejsVendor',
        },
        vendor: {
          test: /[\\/]node_modules[\\/](!react-bootstrap)(!lodash)(!moment)(!moment-timezone)[\\/]/,
          name: 'vendor',
        },
      },
    },
  },
  plugins: [
    // CleanWebpackPlugin will do some clean up/remove folder before build
    // In this case, this plugin will remove 'dist' and 'build' folder before re-build again
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ from: './**', to: './', context: './public' }],
    }),
    // PurgecssPlugin will remove unused CSS
    new PurgecssPlugin({
      paths: glob.sync(path.resolve(__dirname, '../src/**/*'), { nodir: true }),
    }),
    // This plugin will extract all css to one file
    new MiniCssExtractPlugin({
      filename: '[name].[chunkhash:8].bundle.css',
      chunkFilename: '[name].[chunkhash:8].chunk.css',
    }),
    // The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
    // ComppresionPlugin will Prepare compressed versions of assets to serve them with Content-Encoding.
    // In this case we use gzip
    // But, you can also use the newest algorithm like brotli, and it's supperior than gzip
    new CompressionPlugin({
      algorithm: 'gzip',
    }),
  ],
};
