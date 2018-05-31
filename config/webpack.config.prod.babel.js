const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const ExtractText = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
require("babel-polyfill");
const MinifyPlugin = require("babel-minify-webpack-plugin");
const ClosureCompilerPlugin = require('webpack-closure-compiler');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const haveSourceMap = true
module.exports = {
        entry: {
            article: './src/article.js'
        },
        output: {
            filename: '[name]-bundle.js',
            publicPath: '/',
            path: path.resolve(__dirname, 'dist')
        },
        devtool: 'source-map',
        plugins: [
            new ExtractText('[name].css'),
            new HtmlWebpackPlugin({
                inject: true,
                cache: true,
                hash: true,
                filename: 'index.html',
                template: 'public/index.html',
                chunks: ['article', 'common']
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'common'
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    // This has effect on the react lib size
                    'NODE_ENV': JSON.stringify('production')
                }
            }),
            // new UglifyJSPlugin({ sourceMap: true}),
            new MinifyPlugin(),
            new ClosureCompilerPlugin({
                    compiler: {
                        language_in: 'ECMASCRIPT6',
                        language_out: 'ECMASCRIPT5',
                        compilation_level: 'ADVANCED'
                    },
                    concurrency: 3,
                }

            ],

            module: {
                rules: [
                    { test: /\.json$/, loader: 'json-loader' },
                    {
                        test: /\.js$/,
                        include: [path.join(__dirname, 'src')],
                        use: [{
                            loader: 'babel-loader',
                            query: {
                                presets: ['stage-0', 'es2015'],
                                plugins: ['transform-runtime', 'transform-class-properties'],
                            }

                        }],
                    },
                    {
                        test: /\.scss$/,
                        loader: ExtractText.extract(
                            Object.assign({
                                fallback: {
                                    loader: require.resolve('style-loader/url'),
                                    options: {
                                        sourceMap: haveSourceMap,
                                        hmr: false,
                                    },
                                },
                                use: [{
                                        loader: require.resolve('css-loader'),
                                        options: {
                                            sourceMap: haveSourceMap,
                                            importLoaders: 1,
                                            minimize: false
                                        },
                                    },
                                    {
                                        loader: require.resolve('postcss-loader'),
                                        options: {
                                            // Necessary for external CSS imports to work
                                            // https://github.com/facebookincubator/create-react-app/issues/2677
                                            ident: 'postcss',
                                            plugins: () => [
                                                require('postcss-flexbugs-fixes'),
                                                autoprefixer({
                                                    browsers: [
                                                        '>1%',
                                                        'last 4 versions',
                                                        'Firefox ESR',
                                                        'not ie < 9', // React doesn't support IE8 anyway
                                                    ],
                                                    flexbox: 'no-2009',
                                                }),
                                            ],
                                            sourceMap: 'inline'
                                        },
                                    },
                                    {
                                        loader: require.resolve('sass-loader'),
                                        options: {
                                            sourceMap: haveSourceMap
                                        }

                                    }
                                ],
                            })
                        )
                    }
                ]
            },
            performance: {
                hints: false,
            },
        };