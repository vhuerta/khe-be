var utils = require('./utils')
var config = require('../config')
var isProduction = process.env.NODE_ENV === 'production'

const cssLoaders = utils.cssLoaders({
  sourceMap: isProduction? 
    config.build.productionSourceMap : 
    config.dev.cssSourceMap,
  extract: isProduction,
});

module.exports = {
  loaders: Object.assign({}, cssLoaders, {
    scss: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
    sass: 'vue-style-loader!css-loader!sass-loader',
  }),
  postcss: [
    require('autoprefixer')({
      browsers: ['last 2 versions']
    })
  ]
}