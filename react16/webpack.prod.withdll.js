//webpack.common.js
const path = require('path'); //路径的api
const HtmlWebpackPlugin = require('html-webpack-plugin');//引用html-webpack-plugin
const manifest = require('./dist/dll/manifest.json')  //get vendor hash

module.exports = {
    mode: 'production',
    //入口的设置
    entry: {
        app: './src/index.js', //入口的文件名
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
        filename: '[name].bundle.js',//命名文件
        path: path.resolve(__dirname, './dist')//生成的位置
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',//指定的html模板，这个会自动帮我引用下面output出口设置的文件名。
            filename: 'index.html',
            isDll: true,
            vendor: './dll/' + manifest.name + '.js' //manifest就是dll生成的json
        })
    ],
}