module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8877',
        ws: true,
        changeOrigin: true,
				pathRewrite:{
					'^/api': ''
				}
      },
    }
  }
}