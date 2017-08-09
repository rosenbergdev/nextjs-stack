/* eslint-disable */
var webpack = require('webpack')
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

module.exports = {
  webpack: (config, {}) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.PORT': JSON.stringify(process.env.PORT || 80),
        'process.env.NODE_ENV':
          JSON.stringify(process.env.NODE_ENV) || 'development'
      })
    )

    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        verbose: true,
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    )

    return config
  }
}
/* eslint-enable */
