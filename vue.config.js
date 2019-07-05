const path = require('path')

module.exports = {
  publicPath: '',
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
        includePaths: [path.join(__dirname, 'src/common/style')]
      }
    }
  }
}
