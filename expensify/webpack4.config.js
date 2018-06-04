const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = (env, argv) => {
    const isProduction = env === 'production';

    return {
        entry: './src/app.js',
        mode: isProduction ? 'production' : 'development',
        output: {
            path: path.join(__dirname, 'public'),
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    loader: 'babel-loader',
                    test: /\.js$/,
                    exclude: /node_modules/
                },
                {
                    test: /\.s?[ac]ss$/,
                    // use: ['style-loader', 'css-loader', 'sass-loader']
                    // use: CSSExtract.extract({
                    //     use: ['css-loader', 'sass-loader']
                    // })
                    use: [
                        // isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
                        // 'css-loader',
                        // 'sass-loader',
                        isProduction
                            ? {
                                  // sourcemaps with MiniCssExtractPlugin seems to be a bit of an issue right now
                                  loader: MiniCssExtractPlugin.loader
                              }
                            : {
                                  loader: 'style-loader',
                                  options: {
                                      sourceMap: true
                                  }
                              },
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': isProduction
                    ? JSON.stringify('production')
                    : JSON.stringify('development')
            }),
            new MiniCssExtractPlugin({
                // filename: 'styles.[hash:8].css',
                filename: 'styles.css',
                chunkFilename: 'styles.[hash:8].css'
            })
        ],
        optimization: {
            minimizer: isProduction
                ? [
                      new UglifyJsPlugin({
                          cache: true,
                          parallel: true,
                          sourceMap: true
                      }),
                      new OptimizeCSSAssetsPlugin({})
                  ]
                : []
        },
        devtool: isProduction ? 'source-map' : 'eval-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true
        }
    };
};
