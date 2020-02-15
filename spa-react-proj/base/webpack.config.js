const path = require('path'); //路径的api
const HtmlWebpackPlugin = require('html-webpack-plugin');//引用html-webpack-plugin

module.exports = {
    //入口的设置
    entry: {
        base: './src/base.js', //入口的文件名
    },

    // http服务的设置
    devServer: { //利用上面的webpack-dev-server插件
        port: 9000, //端口号，默认是8080
        // headers: {
        //     'Access-Control-Allow-Origin': '*'
        //   }
    },

    module: {
        rules: [
            // { parser: { system: false } },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [path.resolve(__dirname, 'src')]
            }
        ]
    },

    //出口的设置
    output: {
        filename: '[name].js',//命名文件
        path: path.resolve(__dirname, './dist'),//生成的位置
        // libraryTarget: 'system'
    },

    // node: {
    //     fs: 'empty'
    // },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',//指定的html模板，这个会自动帮我引用下面output出口设置的文件名。
        })
    ],
}