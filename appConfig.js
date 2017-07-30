const ip = require('ip')

const config = {
  host: process.env.NODE_ENV !== 'production' ? 'localhost' : ip.address(),
  port: process.env.PORT || 3000,
  dev: process.env.NODE_ENV !== 'production'
}

module.exports = config
