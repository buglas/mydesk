const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const publicPath=process.env.npm_lifecycle_event==='dev'?'':'http://www.yxyy.name/';
module.exports = {
    //入口文件
    entry: {
        main:'./src/index.js',
        test:'./src/example/test/test.js'
    },
    //出口
    output: {
        //文件名
        //filename:'js/[name]-[hash].js',
        filename:'js/[name].js',
        //路径
        path: path.resolve(__dirname, 'dist'),
        //线上路径
        publicPath:publicPath
    },
    resolve: {
        extensions: ['.js', '.json'],
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    //测试时，查找源代码
    devtool:'eval-source-map',
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {loader: 'css-loader', options: { importLoaders: 1 } },
                    'less-loader',
                    'postcss-loader'
                ],
                include: path.resolve(__dirname,'src')
            },
            {
                test:/\.js$/,
                use: {
                    loader: 'babel-loader',
                },
                include: path.resolve(__dirname,'src')
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name:'images/[name].[ext]',
                        limit:2048
                    }
                },
                include: path.resolve(__dirname,'src')
            },
        ]
    },
    plugins: [
        // 打包输出HTML
        new HtmlWebpackPlugin({
            title: '禅意花园',
            // 压缩HTML文件
            minify: {
                // 移除HTML中的注释
                removeComments: true,
                // 删除空白符与换行符
                //collapseWhitespace: true,
                // 压缩内联css
                minifyCSS: true
            },
            //文件输出路径默认为output 的path
            filename: 'index.html',
            //模板。默认context 上下文就是根目录，因此index.html 就是根目录的index.html
            template: 'index.html',
            chunks:['main'],
            hash:true
        }),
        new HtmlWebpackPlugin({
            filename: 'test.html',
            template: './src/example/test/index.html',
            chunks:['test'],
            hash:true
        }),
    ],
    devServer: {
        contentBase: './',
        host: 'localhost',
        port: 8001,
        inline: true,
        hot: true,
        open:true
    }
};

