const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    entry: {
        lib1: "./src/lib1.js"
    },
    output: {
        path: __dirname + "/public", //打包后的文件存放的地方
        filename: "[name].2.js", //打包后输出文件的文件名
        library: 'libv', // 配置这里 支持script标签引入, 后用library拿到这个模块
        // libraryTarget: 'umd'  // umd支持通用的模块化引入方法（cmd、amd、esmodule）
        // libraryTarget: "commonjs2"  //for node environemnt
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