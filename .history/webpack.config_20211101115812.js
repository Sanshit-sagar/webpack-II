const path = require('path')
const webpack = require('webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'), 
        filename: 'output.js',
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env', 
                            '@babel/preset-react',
                        ]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextWebpackPlugin.extract([
                        'css-loader', 
                        'sass-loader'
                    ]
                    fallback: 'style-loader' 
                })
            }
        ]
    },
    plugins: [
        new ExtractTextWebpackPlugin('styles.css') 
    ],
    devServer: {
        contentBase: path.resolve(__dirname, './public'), 
        historyApiFallback: true, 
        inline: true,
        open: true 
    },
    devTool: 'eval-source-map'
}

module.exports = config;