//webpack.common.js
const path = require('path'); //路径的api
const HtmlWebpackPlugin = require('html-webpack-plugin');//引用html-webpack-plugin
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    //入口的设置
    entry: {
        app: './src/index.js', //入口的文件名
    },

    //http服务的设置
    devServer: { //利用上面的webpack-dev-server插件
        port: 9000 //端口号，默认是8080
    },

    //管理资源
    module: {
        rules: [
            {
                //加载js
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
        ]
    },

    //出口的设置
    output: {
        // filename: '[name].[chunkhash:4].js',//命名文件
        filename: '[name].1.js',//命名文件
        path: path.resolve(__dirname, './dist'),//生成的位置
        // libraryTarget: 'system'
        libraryTarget: 'amd',
        library:'app1'
    },

    plugins: [
        // new HtmlWebpackPlugin({
        //     template: 'public/index.html',//指定的html模板，这个会自动帮我引用下面output出口设置的文件名。
        // }),
        new CopyWebpackPlugin([
            {from: 'dist/app.1.js', to: 'E:\\Codes\\server\\public\\dist'}
        ])
    ],
}