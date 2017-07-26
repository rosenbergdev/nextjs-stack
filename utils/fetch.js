import get from 'isomorphic-fetch'
// const ip = require('ip')

const dev = process.env.NODE_ENV !== 'production'

export function fetch(url, opts = {}) {
  const isServer = typeof window === 'undefined'

  if (!isServer && opts.self) {
    return
  }

  let protocol = opts.self ? 'http://' : 'https://'
  const apiUrl = opts.self ? 'localhost' : 'API_URL'

  if (!dev && opts.self) {
    protocol = 'https://'
  }

  if (isServer && opts.self) {
    protocol = 'http://'
  }

  return get(`${protocol}${apiUrl}:${process.env.PORT}${url}`)
}
