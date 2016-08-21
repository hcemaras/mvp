/**
 * webpack.config.js
 * Builds all the website static assets for use in production
 */

import cssnext from 'postcss-cssnext'
import Extract from 'extract-text-webpack-plugin'
import path from 'path'

export default [{
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
            loader: Extract.extract('style-loader', 'css-loader!postcss-loader')
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
}]
