const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const autoprefixer = require('autoprefixer');

// function generateHtmlPlugins(templateDir) {
//   const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
//   return templateFiles.map((item) => {
//     const parts = item.split('.');
//     const name = parts[0];
//     const extension = parts[1];
//     return new HtmlWebpackPlugin({
//       filename: `${name}.html`,
//       template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
//       // inject: false //don't add js and css to html
//     });
//   });
// }

const PAGES_DIR = './src/pug/pages/';
const PAGES = fs
  .readdirSync(PAGES_DIR)
  .filter((fileName) => fileName.endsWith('.pug'));
// const htmlPlugins = generateHtmlPlugins('./src/html/views');

const config = {
  entry: ['./src/js/index.js', './src/scss/style.scss'],
  output: {
    filename: './js/bundle.js',
    // publicPath: 'http://suxscribe.tmweb.ru/transsignal/'
  },
  resolve: {
    modules: ['node_modules'],
    alias: {
      'debug.addIndicators':
        'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js',
    },
  },
  devtool: 'source-map',
  devServer: {
    host: '127.0.0.1', //192.168.88.252', //'127.0.0.1' your ip address
    port: 8080,
    disableHostCheck: true,
  },
  mode: 'production',
  // optimization: {
  //   minimizer: [
  //     new TerserPlugin({
  //       sourceMap: true,
  //       extractComments: true
  //     })
  //   ]
  // },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules[\/\\](?!(swiper|dom7|ssr-window)[\/\\])/],
        loader: 'babel-loader',
      },
      {
        test: /\.(sass|scss)$/,
        include: path.resolve(__dirname, 'src/scss'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              url: false,
            },
          },

          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              sourceMap: true,
              plugins: () => [
                autoprefixer(),
                require('cssnano')({
                  preset: [
                    'default',
                    {
                      calc: false,
                      discardComments: {
                        removeAll: true,
                      },
                    },
                  ],
                }),
              ],
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.html$/,
        include: path.resolve(__dirname, 'src/html/includes'),
        use: ['raw-loader'],
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-sprite-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/style.bundle.css',
    }),
    new CopyWebpackPlugin([
      {
        from: './src/fonts',
        to: './fonts',
      },
      {
        from: './src/favicon',
        to: './favicon',
      },
      {
        from: './src/assets',
        to: './assets',
      },
    ]),
    new SpriteLoaderPlugin({ plainSprite: true }),
    ...PAGES.map(
      (page) =>
        new HtmlWebpackPlugin({
          template: `${PAGES_DIR}/${page}`,
          filename: `./${page.replace(/\.pug/, '.html')}`,
        })
    ),
  ], //.concat(htmlPlugins)
};

module.exports = (env, argv) => {
  externals: {
    // ymaps: 'ymaps'
  }
  if (argv.mode === 'production') {
    config.plugins.push(new CleanWebpackPlugin());
  }
  return config;
};

// /////////////////////////////////
