const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = defineConfig({
  transpileDependencies: true,
  // preload: 'src/preload.js',
  pluginOptions: {
    electronBuilder: {
        preload: 'src/preload.js',
        // nodeIntegration: false
    }
},
  configureWebpack: {
    plugins: [
      new NodePolyfillPlugin()
    ]
  }
})
