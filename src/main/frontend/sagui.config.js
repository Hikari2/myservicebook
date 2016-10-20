var join = require('path').join

module.exports = {
  pages: ['index'],
  style: {
    cssModules: false
  },
  karma: {
    browsers: ['Chrome']
  },
  develop: {
    proxy: {
      '/api/*': {
        target: 'http://localhost:8080',
        secure: false
      },
      '/images/*': {
        target: 'http://localhost:8080',
        secure: false
      }
    }
  },
  webpack: {
    output: {
      path: join(__dirname, '../resources/public'),
      publicPath: '/'
    },
    module: {
      preLoaders: [
        {
          test: /src\/index\.scss/, // the main scss/css file
          loader: 'webpack-inject-css-loader?appPath=./src&debug=false'
        }]
    },
    externals: {
      'cheerio': 'window',
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    }
  }
}
