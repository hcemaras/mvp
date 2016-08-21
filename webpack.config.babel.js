/**
 * webpack.config.js
 * Builds all the website static assets for use in production
 */

import cssnext from 'postcss-cssnext'
import Extract from 'extract-text-webpack-plugin'
import path from 'path'
import webpack from 'webpack'

const styles = {
    name: 'styles',
    target: 'web',
    entry: {
        'main': path.resolve(__dirname, '_styles', 'main.css')
    },
    output: {
        filename: '[name].css',
        path: path.resolve(__dirname, 'styles'),
        publicPath: '/styles'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: Extract.extract('style', 'css!postcss')
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file?name=/fonts/[name].[ext]'
        }]
    },
    postcss: {
        plugins: [
            cssnext({
                browsers: [
                    'last 2 version',
                    'not ie <= 11'
                ]
            })
        ]
    },
    plugins: [
        new Extract('[name].css')
    ]
}

const scripts = {
    name: 'scripts',
    target: 'web',
    entry: {
        'homepage': path.resolve(__dirname, '_scripts', 'homepage.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'scripts'),
        publicPath: '/scripts'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel'
        }, {
            test: /\.css$/,
            loader: 'style!css!postcss'
        }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            loader: 'file?name=/fonts/[name].[ext]'
        }]
    },
    postcss: {
        plugins: [
            cssnext({
                browsers: [
                    'last 2 version',
                    'not ie <= 11'
                ]
            })
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: 'common.js',
            async: true
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                dead_code: true,
                unused: true,
                warnings: false
            },
            comments: false,
            sourceMap: false
        })
    ]
}

export default [styles, scripts]
