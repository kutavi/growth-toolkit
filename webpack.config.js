const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === 'development';

  return {
    entry: './src/index.tsx',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isDevelopment ? '[name].js' : '[name].[contenthash].js',
      publicPath: '/',
      clean: true,
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                ['@babel/preset-react', { runtime: 'automatic' }],
                '@babel/preset-typescript',
              ],
            },
          },
        },
        {
          test: /\.module\.scss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: {
                  localIdentName: isDevelopment
                    ? '[path][name]__[local]'
                    : '[hash:base64]',
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: [path.resolve(__dirname, 'src')],
                },
              },
            },
          ],
        },
        {
          test: /\.scss$/,
          exclude: /\.module\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: [path.resolve(__dirname, 'src')],
                },
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|gif|svg|ico)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'assets/[name][ext]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name][ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './src/assets/favicon.png',
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/assets',
            to: 'assets',
            noErrorOnMissing: true,
          },
          {
            from: 'public/_redirects',
            to: '_redirects',
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
    performance: {
      maxAssetSize: 512000, // 500 KiB
      maxEntrypointSize: 512000, // 500 KiB
      hints: isDevelopment ? false : 'warning',
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      historyApiFallback: true,
      port: 8000,
      hot: true,
      open: true,
    },
    devtool: isDevelopment ? 'eval-source-map' : 'source-map',
  };
};
