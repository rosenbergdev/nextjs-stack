// const ip = require('ip')
const isServer = typeof window === 'undefined'

const config = {
  // host: process.env.NODE_ENV !== 'production' ? 'localhost' : ip.address(),
  host: isServer ? 'localhost' : document.domain,
  port: process.env.PORT || 3000,
  dev: process.env.NODE_ENV !== 'production'
}

module.exports = config
