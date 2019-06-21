module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-gltf-player/' : '/',
  configureWebpack: {
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    }
  }
}