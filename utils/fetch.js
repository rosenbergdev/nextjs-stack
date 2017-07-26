import get from 'isomorphic-fetch'
// const ip = require('ip')

const dev = process.env.NODE_ENV !== 'production'

export function fetch(url, opts = {}) {
  let protocol = opts.self ? 'http://' : 'https://'
  const apiUrl = opts.self ? 'localhost' : 'API_URL'

  console.log('prod', process.env.NODE_ENV)

  if (!dev && opts.self) {
    protocol = 'https://'
  }

  console.log(`${protocol}${apiUrl}:${process.env.PORT}${url}`)

  return get(`${protocol}${apiUrl}:${process.env.PORT}${url}`)
}
