import axios from 'axios'
import config from 'app-config'

// find better and more robust solution

export default function api(
  url,
  opts = {
    isomorphic: false,
    method: 'get',
    data: undefined,
    internal: false
  }
) {
  const isServer = typeof window === 'undefined'
  const method = opts.method || 'get'
  let protocol = isServer ? 'http://' : 'https://'
  let headers = {}
  const cookie = isServer && opts.req.get('cookie')
  let port = process.env.PORT

  if (url.indexOf('api/') === 0) {
    // always https
    return ''
  }

  if (config.dev) {
    protocol = 'http://'
    port = config.port || process.env.PORT
  }

  let apiUrl = `${protocol}${config.host}:${port}${url}`

  if (!config.dev && opts.internal) {
    apiUrl = `${protocol}${config.host}${url}`
  }

  if (cookie) {
    headers = { Cookie: cookie }
  }

  return axios(apiUrl, {
    method,
    data: opts.data,
    withCredentials: true,
    headers
  })
}
