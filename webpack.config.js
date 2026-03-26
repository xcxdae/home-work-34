const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProd ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
      assetModuleFilename: 'assets/[name].[contenthash:8][ext]',
      publicPath: ''
    },
    devtool: isProd ? 'source-map' : 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader']
        },
        {
          test: /\.(woff2?|ttf|otf|eot)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name].[contenthash:8][ext]'
          }
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].[contenthash:8][ext]'
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new MiniCssExtractPlugin({
        filename: isProd ? 'css/[name].[contenthash:8].css' : 'css/[name].css'
      }),
      new HtmlWebpackPlugin({
        template: 'src/index.html',
        inject: 'body',
        scriptLoading: 'defer',
        minify: isProd && {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true
        }
      })
    ],
    optimization: {
      minimize: isProd,
      minimizer: ['...', new CssMinimizerPlugin()],
      splitChunks: {
        chunks: 'all',
        name: 'vendors',
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    externals: {
      lodash: '_'
    },
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist')
      },
      port: 8080,
      open: true,
      hot: true,
      compress: true
    }
  };
};
