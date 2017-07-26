import { get } from 'lodash'

export default function clientMiddleware(client) {
  return ({ dispatch, getState }) => {
    return next => action => {
      if (typeof action === 'function') {
        return action(dispatch, getState)
      }

      const store = getState()
      const token = get(store, 'auth.user.access_token')
      // const expiresIn = get(store, 'auth.user.expires_in')
      const refreshToken = get(store, 'auth.user.refresh_token')
      const exp = get(store, 'auth.user.exp')

      return createPromise({ next, action, client, getState })
    }
  }
}

function createPromise({ next, action, client, getState }) {
  const { promise, types, ...rest } = action

  if (!promise) {
    return next(action)
  }

  const [REQUEST, SUCCESS, FAILURE] = types
  const store = getState()

  client.token = getToken(get(store, 'auth.user'))
  client.locale = get(store, 'app.locale.code')
  client.userType = getActiveRole(get(store, 'auth.organization'), {
    returnOriginalUserType: true
  })
  client.organizationId =
    multipleOrganizations(get(store, 'auth.user')) &&
    get(store, 'auth.organization.id')

  next({ ...rest, type: REQUEST })

  const actionPromise = promise(client)

  actionPromise
    .then(
      ({ body, headers }) =>
        next({ ...rest, result: body || {}, headers, type: SUCCESS }),
      props => {
        const { body = {} } = props
        const parsedBody = typeof body !== 'object' ? JSON.parse(body) : body

        if (parsedBody.errorCode === 'UNAUTHORIZED' && client.isPublic) {
          location && location.replace('/')
          next({ ...rest, error: body, type: FAILURE })
        }

        if (
          parsedBody.errorCode === 'UNAUTHORIZED' &&
          client.unauthorizedAction
        ) {
          next({ ...rest, error: body, type: FAILURE })
        } else {
          next({ ...rest, error: body, type: FAILURE })
        }
      }
    )
    .catch(error => {
      console.error('MIDDLEWARE ERROR:', error)
      next({ ...rest, error, type: FAILURE })
    })

  return actionPromise
}
