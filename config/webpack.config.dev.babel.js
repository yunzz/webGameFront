const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const ExtractText = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
require("babel-polyfill");
const getClientEnvironment = require('./env.js')
const paths = require('./paths');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const haveSourceMap = true
const Cleanwebpack = require('clean-webpack-plugin')
const entry = {
    article: paths.appSrc + '/article.js',
    explore: paths.appSrc + '/explore.js',
    index: paths.appSrc + '/index.js',
    login: paths.appSrc + '/login.js',
}
module.exports = {
    entry: entry,
    output: {
        filename: '[name]-bundle.js',
        publicPath: '/',
        path: paths.outDist
    },

    plugins: [
        new webpack.NamedModulesPlugin(),
        new Cleanwebpack(['dist'], {
            root: process.cwd()
        }),
        new ExtractText({
            filename: (getPath) => {
                return getPath('css/[name].css')
            },
            allChunks: true
        }),
        new HtmlWebpackPlugin({
            inject: true,
            cache: true,
            hash: true,
            filename: 'article.html',
            template: paths.appPublic + '/html/article.html',
            chunks: ['article', 'common']
        }),
        new HtmlWebpackPlugin({
            inject: true,
            cache: true,
            hash: true,
            filename: 'explore.html',
            template: paths.appPublic + '/html/explore.html',
            chunks: ['explore', 'common']
        }),
        new HtmlWebpackPlugin({
            inject: true,
            cache: true,
            hash: true,
            filename: 'login.html',
            template: paths.appPublic + '/html/login.html',
            chunks: ['login', 'common']
        }),
        new HtmlWebpackPlugin({
            inject: true,
            cache: true,
            hash: true,
            filename: 'index.html',
            template: paths.appPublic + '/index.html',
            chunks: ['index', 'common']
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common'
        }),

        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })

    ],
    devtool: 'cheap-module-source-map',


    module: {
        rules: [{
                test: /\.css$/,
                loader: ExtractText.extract(Object.assign({
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
                    }]
                }))
            },
            { test: /\.json$/, loader: 'json-loader' },
            {
                test: /\.js$/,
                include: [path.join(__dirname, 'src')],
                use: [{
                    loader: 'babel-loader',
                    query: {
                        presets: ['stage-0', 'es2015'],
                        plugins: ['transform-runtime', 'transform-class-properties', "syntax-dynamic-import"],
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
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: 'img/[name].[ext]'
                    }
                }]
            }
        ]
    },
    performance: {
        hints: false,
    },
};