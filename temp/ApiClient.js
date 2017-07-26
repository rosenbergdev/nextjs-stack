import superagent from 'superagent'
const methods = ['get', 'post', 'put', 'patch', 'del']

function formatUrl(path) {
  return path
}

class _ApiClient {
  constructor(req) {
    methods.forEach(
      method =>
        (this[method] = (
          path,
          {
            params,
            data,
            external,
            removeToken = false,
            formData = false,
            textResponse,
            removeUserType = false,
            unauthorizedAction = true,
            isPublic = false
          } = {}
        ) =>
          new Promise((resolve, reject) => {
            const request = superagent[method](formatUrl(path))

            if (params) {
              request.query(params)
            }

            if (data && !formData) {
              request.send(data)
            }

            request.end((err, res = {}) => {
              err
                ? reject(
                    {
                      body: res.body || {},
                      headers: res.headers
                    } || err
                  )
                : resolve({ body: res.body || {}, headers: res.headers })
            })
          }))
    )
  }
}

const ApiClient = _ApiClient

export default ApiClient
