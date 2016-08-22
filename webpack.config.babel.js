/**
 * webpack.config.js
 * Builds all the website static assets for use in production
 */

import cssnext from 'postcss-cssnext'
import Extract from 'extract-text-webpack-plugin'
import path from 'path'
import webpack from 'webpack'

const styleFiles = [
    'brand',
    'capnet-assist',
    'developer',
    'docs',
    'get-involved',
    'home',
    'main',
    'open-source',
    'solarized_dark_bash',
    'solarized_dark',
    'solarized_light',
    'support',
    'team'
]

const scriptFiles = [
    'docs/installation',
    'docs/main',
    'developer',
    'external-links',
    'get-involved',
    'highlight.pack',
    'homepage',
    'jQuery.leanModal2',
    'popover',
    'smooth-scrolling',
    'twitter-links'
]

const browserSupport = [
    'last 2 version',
    'not ie <= 11'
]

const styles = {
    name: 'styles',
    target: 'web',
    entry: {},
    output: {
        filename: '[name].css',
        path: path.resolve(__dirname, 'styles'),
        publicPath: '/styles'
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: Extract.extract('raw!postcss')
        }]
    },
    postcss: {
        plugins: [
            cssnext({
                browsers: browserSupport
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
    entry: {},
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'scripts'),
        publicPath: '/scripts',
        libraryTarget: 'var'
    },
    resolve: {
        extensions: ['', '.js']
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }]
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

styleFiles.forEach((name) => {
    styles.entry[name] = path.resolve(__dirname, '_styles', `${name}.css`)
})

scriptFiles.forEach((name) => {
    scripts.entry[name] = path.resolve(__dirname, '_scripts', `${name}.js`)
})

export default [styles, scripts]
