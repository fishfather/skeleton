const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        libs: "./src/libs.js"
    },
    output: {
        path: __dirname + "/public", //打包后的文件存放的地方
        filename: "[name].js", //打包后输出文件的文件名
        library: 'library', // 配置这里 支持script标签引入, 后用library拿到这个模块
        libraryTarget: 'umd'  // umd支持通用的模块化引入方法（cmd、amd、esmodule）
    },
    devServer: {
        contentBase: path.join(__dirname, ""),
        // compress: true,
        port: 9000
    },
    // plugins: [
    //     new CleanWebpackPlugin()
    // ]
}