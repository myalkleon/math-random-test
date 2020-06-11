const path = require("path");

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === "development";
const devtool = process.env.NODE_ENV === "development" ? "source-map" : undefined;

module.exports = {
    entry: path.resolve(__dirname, "src"),
    mode: isDev ? "development" : "production",
    output: {
        path: path.resolve(__dirname, "docs"),
    },
    devtool,
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/index.html")
        }),
        new MiniCssExtractPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ]
            }
        ]
    }
}