const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


module.exports = {
    entry: {
        app: ['babel-polyfill', './src/main.js']
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: `[name].js`,
    },

    // devtool: 'source-map',

    plugins: [
        // Вынос CSS/LESS в отдельный файл
        new ExtractTextPlugin(`[name].css`),
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        [ 'es2015', { 'modules': false } ],
                        'stage-0', 'react'
                    ]
                }
            },
            {
                test: /\.css$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'autoprefixer-loader']
                })
            },
            {
                test: /\.less$/i,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'autoprefixer-loader', 'less-loader?noIeCompat']
                })
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            },
        ]
    },
}
