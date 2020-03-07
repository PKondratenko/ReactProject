const { join } = require('path');//путь
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const package = require('./package.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {

    entry: ['babel-polyfill', join(__dirname, 'src/main.jsx')], //вход
    output: {//выход
        filename: 'app.js',
        path: join(__dirname, 'dist'),
        publicPath: '/',
    },
    module: { // модуль бабеля
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/, //какие папки исключить из поиска
                use: {
                    loader: 'babel-loader', //использовать бабель-лоадер
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        hmr: process.env.NODE_ENV === 'development',
                    },
                },
                    'css-loader',
                    'sass-loader',],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test',
            template: join(__dirname, 'src/index.html'),
        }),

        new MiniCssExtractPlugin({
            filename: 'app.css',
            path: join(__dirname, 'dist')
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: join(__dirname, 'dist'),
    }
};