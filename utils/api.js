import axios from 'axios'
import config from 'appConfig'

export default function api(
  url,
  opts = {
    isomorphic: false,
    method: 'get',
    data: undefined
  }
) {
  const isServer = typeof window === 'undefined'
  const method = opts.method || 'get'
  let protocol = isServer ? 'http://' : 'https://'
  let headers = {}
  const cookie = isServer && opts.req.get('cookie')
  let port = ''

  if (url.indexOf('api/') === 0) {
    // always https
    return ''
  }

  if (config.dev) {
    protocol = 'http://'
    port = config.port
  }

  const apiUrl = `${protocol}${config.host}:${port}${url}`

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
