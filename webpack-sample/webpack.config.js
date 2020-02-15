const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    // entry: "./src/index.js", //已多次提及的唯一入口文件
    entry: {
        bundle: "./src/index.js",
        lib: "./src/libmodule.js"
    },
    output: {
        path: __dirname + "/public", //打包后的文件存放的地方
        // filename: "bundle.js", //打包后输出文件的文件名
        filename: "[name].js", //打包后输出文件的文件名
        publicPath: "public/" //test server generate output file(in memory),
    },
    devServer: {
        contentBase: path.join(__dirname, ""),
        // compress: true,
        port: 9000
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}