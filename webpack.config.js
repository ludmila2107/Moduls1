const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    entry: "./src/index.js",
    module: {
        rules: [{
                test: /\.svg$/,
                use: "svg-inline-loader"
            },
            {
                test: /\.css$/,
                use: [MiniCSSExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.(js)$/,
                use: "babel-loader"
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: 'main.html'

        }),
        new MiniCSSExtractPlugin(),
    ]

};