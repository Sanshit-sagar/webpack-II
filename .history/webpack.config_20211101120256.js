const path = require('path')
const webpack = require('webpack')
// const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

let config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './public'), 
        filename: 'output.js',
    },
    devServer: {
        publicPath: "/",
        contentBase: "./dist",
        hot: true,
        open: true,
        watchOptions: {
          ignored: /node_modules/,
          poll: 1000,
        },
        port: 9000,
        historyApiFallback: true,
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
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
          template: "./public/index.html",
        }),
    ],
    devTool: 'eval-source-map'
}

module.exports = config;