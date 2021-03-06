const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin = require("extract-text-webpack-plugin");

// 定义路径
const PATHS = {
    root: path.resolve(__dirname),
    src: path.resolve(__dirname, 'src'),
    dist: path.resolve(__dirname, 'dist'),
    node_modules: path.resolve(__dirname, 'node_modules')
};

module.exports = {
    entry: './src/index',
    output: {
        path: PATHS.dist,
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: ['babel-loader']
            },
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.less$/,
                use: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader?importLoaders=1&minimize=1','postcss-loader','less-loader']
                }),
                exclude: PATHS.node_modules,
                include: PATHS.src
            },
            {
                test: /\.css$/,
                use: extractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ['css-loader?importLoaders=1&minimize=1','postcss-loader']
                })
            },
            {
                test: /\.html$/,
                use: [ 'html-loader' ],
                exclude: PATHS.node_modules,
                include: PATHS.src
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [ 'url-loader?limit=1024&name=images/[hash:8].[name].[ext]&publicPath=../' ],
                exclude: PATHS.node_modules,
                include: PATHS.src
            },
            {
                test: /\.(svg|eot|ttf|woff)$/,
                use: [ 'url-loader?name=fonts/[name].[ext]&publicPath=../' ]
            }
        ]

    },
    plugins: [
        
        // html文件导出，这里的将文件导出到根目录
        new htmlWebpackPlugin({
          template: './src/template/index.html',
          filename: 'index.html',
          inject: 'body',
        }),
        // css文件导出
        new extractTextPlugin("css/style.css"),
        new webpack.DefinePlugin({
            'process.env':{
              'NODE_ENV': JSON.stringify('production')
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false,  // remove all comments
            }
        })
    ],
    resolve: {
        extensions: ['jpg','.js', '.jsx', 'css', '.less'] //后缀名自动补全
    }
};
