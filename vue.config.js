'use strict'
const path = require('path')
const resolve = dir => {return path.join(__dirname, dir)}

module.exports = {
  // assetsDir: './src/static',
  // lintOnSave: true, // 是否开启eslint保存检测
  // productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('views', resolve('src/views'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'));
    // config.optimization.runtimeChunk('single')
  },
  // devServer: {
  //   host: '0.0.0.0',
  //   port: '8080',
  //   hot: true,
  //   open: true,
  //   overlay: {
  //     warning: false,
  //     error: true
  //   }
  // }
}
