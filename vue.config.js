module.exports = {
    //处理前端跨域问题
    devServer:{
        proxy:{
            '/reflex_1':{
                target:"http://music.chengfeng8.top",
                changeOrigin:true,
                pathRewrite:{
                    '^/reflex_1':''
                }
            }
        }
    },
    configureWebpack:{
        resolve:{
            //给文件取别名
            alias:{
                'views': '@/views',
                'components': '@/components',
                'network': '@/network',
                'assets': '@/assets',
            }
        },
        module: {
            rules: [
                //处理xml文件格式
                { test: /\.xml$/, loader: 'xml-loader' }
            ]
        },
    }
}