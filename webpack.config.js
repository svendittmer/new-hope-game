const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "src/index.ejs",
            title: "bla"
        })
    ],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: [".ts"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    mode: "development"
};
