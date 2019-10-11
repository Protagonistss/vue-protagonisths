const CompressionPlugin = require('compression-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  publicPath: './',
  chainWebpack: config => {
    // if (process.env.NODE_ENV === 'production') {
    //   if (process.env.npm_config_report) {
    //     config
    //       .plugin('webpack-bundle-analyzer')
    //       .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
    //       .end()
    //     config.plugins.delete('prefetch')
    //   }
    // }
    // config.plugins.delete('prefetch')
    // 解决ie11兼容ES6
    config.entry('main').add('babel-polyfill')
    // 开启图片压缩
    // config.module
    //   .rule('images')
    //   .test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
    //   .use('image-webpack-loader')
    //   .loader('image-webpack-loader')
    //   .options({ bypassOnDebug: true })
    // 开启js、css压缩
    if (process.env.NODE_ENV === 'production') {
      // 删除预加载
      config.plugins.delete('preload')
      config.plugins.delete('prefetch')
      // 压缩代码
      config.optimization.minimize(true)
      // 分割代码
      config.optimization.splitChunks({
        chunks: 'all'
      })
      config.plugin('compressionPlugin').use(
        new CompressionPlugin({
          test: /\.js$|\.html$|.\css/, // 匹配文件名
          threshold: 10240, // 对超过10k的数据压缩
          deleteOriginalAssets: false // 不删除源文件
        })
      )
    }
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // 为生产环境修改配置...
      config.plugins.push(
        //生产环境自动删除console
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              drop_debugger: true,
              drop_console: true
            }
          },
          sourceMap: false,
          parallel: true
        })
      )
    }
  },

  transpileDependencies: [
    'biyi-admin' // 指定对第三方依赖包进行babel-polyfill处理
  ]
}
