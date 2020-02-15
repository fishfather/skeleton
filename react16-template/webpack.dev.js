//webpack.dev.js
const common=require('./webpack.common.js');//引用通用配置
const merge=require('webpack-merge');//引用webpack-merge插件

module.exports=merge(common,{
    mode:'development', //开发的模式
})