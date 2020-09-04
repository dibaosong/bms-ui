const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

const isDev = process.env.NODE_ENV === 'development'

const config = {
    // 将entry指向examples
    pages: {
        index: {
            entry: 'examples/main.js',
            template: 'public/index.html',
            filename: 'index.html'
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': path.resolve('examples'),
            },
            extensions: ['.scss', '.css']
        },
    },
    // 为packages目录添加babel-loader处理
    chainWebpack: config => {
        config.module
        .rule('js')
        .include
            .add(resolve('packages'))
            .end()
        .use('babel')
            .loader('babel-loader')
            .tap(options => {
                return options
            })
    }
}

// 如果是开发环境
if (isDev) {
    config.devServer = {
      port: 9006,
      // host: '0.0.0.0',
      overlay: {
        errors: true
      },
      hot: true,
      open: true
    }
}else {
    config.productionSourceMap = false; //去除.map 文件
}

module.exports = config;